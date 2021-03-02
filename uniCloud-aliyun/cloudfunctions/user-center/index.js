'use strict';

const uniID = require('uni-id')
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	/* 如果你通过云函数Url访问
	 * 使用GET时参数位于event.queryStringParameters
	 * 使用POST时参数位于event.body
	 * 请自行处理上述场景
	 */
	console.log('event : ' + event)

	let params = event.data || {}//event.params
	let payload = {}
	let noCheckAction = ['register', 'loginByWeixin', 'checkToken', 'login', 'logout', 'sendSmsCode', 'loginBySms',
		'inviteLogin', 'loginByUniverify','updateUser','getUserInfo'
	]
	
	if (noCheckAction.indexOf(event.operation) === -1) {
		if (!event.uniIdToken) {
			return {
				code: 403,
				msg: '缺少token'
			}
		}
		payload = await uniID.checkToken(event.uniIdToken)
		if (payload.code && payload.code > 0) {
			return payload
		}
		params.uid = payload.uid
	}

	let res = {}
	switch (event.operation) {
		case 'register':
			res = uniID.register(params);
			break;
		case 'login':
			res = uniID.login(params);
			break;
		case 'loginByWeixin':
			res = await uniID.loginByWeixin(params);
			break;
		case 'checkToken':
			//res = uniID.checkToken(event.uniIdToken);
			res = uniID.checkToken(params.uniIdToken,params.checkTokenOptions);
			/* const {
			    code,
			    token,
			    tokenExpired,
				userInfo
			  } = res;
			  if(code === 0){
				  return {
					  code,
					  token,
					  tokenExpired,
					  userInfo
					  };
			  } */
			break;
		case 'createToken':
			res = uniID.createToken(event.uniIdToken);
			break;
		case 'logout':
			res = await uniID.logout(event.uniIdToken)
			break;
		case 'sendSmsCode':
			// 简单限制一下客户端调用频率，避免频繁获取以致使开发者破产
			const ipLimit = await db.collection('uni-verify').where({
				ip: context.CLIENTIP,
				created_at: dbCmd.gt(Date.now() - 60000)
			}).get()
			if (ipLimit.data.length > 0) {
				return {
					code: 429,
					msg: '请求过于频繁'
				}
			}
			const templateId = '11101'; // 替换为自己申请的模板id
			if (!templateId) {
				return {
					code: 500,
					msg: 'sendSmsCode需要传入自己的templateId，参考https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=sendsmscode'
				}
			}
			const randomStr = '00000' + Math.floor(Math.random() * 1000000);
			const code = randomStr.substring(randomStr.length - 6);
			//console.log("code:"+code+"/type:"+params.type+"/phone:"+params.mobile+"/templateId:"+templateId); + {"code":code,"type":params.type,"phone":params.mobile,"templateId":templateId};
			res = await uniID.sendSmsCode({
				mobile: params.mobile,
				code,
				type: params.type,
				templateId
			})
			break;
		case 'loginBySms':
			if (!params.code) {
				return {
					code: 500,
					msg: '请填写验证码'
				}
			}
			if (!/^1\d{10}$/.test(params.mobile)) {
				return {
					code: 500,
					msg: '手机号码填写错误'
				}
			}
			res = await uniID.loginBySms(params)
			break;
		case 'inviteLogin':
			if (!params.code) {
				return {
					code: 500,
					msg: '请填写验证码'
				}
			}
			res = await uniID.loginBySms({
				...params,
				type: 'register'
			})
			break;
		case 'getInviteCode':
			res = await uniID.getUserInfo({
				uid: params.uid,
				field: ['my_invite_code']
			})
			if (res.code === 0) {
				res.myInviteCode = res.userInfo.my_invite_code
				delete res.userInfo
			}
			break;
		case 'getInvitedUser':
			res = await uniID.getInvitedUser(params)
			break;
		case 'loginByUniverify':
			res = await uniID.loginByUniverify(params)
			break;
		case 'updatePwd':
			res = await uniID.updatePwd({
				uid: params.uid,
				...params
			})
			break;
		case 'setAvatar':
			res = await uniID.setAvatar({
				uid: params.uid,
				avatar:params.avatar
			})
			break;
		case 'updateUser':
			res = await uniID.updateUser({
				uid: params.uid,
				nickname:params.nickname,
				gender:params.gender,
				comment:params.comment,
				avatar:params.avatar
			})
			break;
		case 'getUserInfo':
			res = await uniID.getUserInfo({
			    uid: params.uid,
			    /* field: ['mobile'] *///指定返回的字段，不传则返回所有
			  })
			break;
		case 'getUserInfoByToken':
			res = await uniID.getUserInfoByToken(params.token);
			break;
		default:
			res = {
				code: 403,
				msg: '非法访问'
			}
			break;
	}

	//返回数据给客户端
	return res
};
