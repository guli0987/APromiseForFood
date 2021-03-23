// #ifndef MP-WEIXIN
/* 非小程序端 */
export default {
	mixins: [],
	data() {
		return {
			sysSettingsList:[
				{
					"title":"通知",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffnotice'
					},
					"link":"",
					"code":1
				},
				{
					"title":"网络",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffnetwork'
					},
					"link":"",
					"code":2
				},
				{
					"title":"亮度",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffbrightness'
					},
					"link":"",
					"code":3
				},
				{
					"title":"夜间模式",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffnightmode2'
					},
					"link":"",
					"code":4
				},
				{
					"title":"布局",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apfflayout'
					},
					"link":"",
					"code":5
				},
				{
					"title":"其它",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffother'
					},
					"link":"",
					"code":6,
					"children":[
						{
							"title":"缓存清理",
							"extraIcon": {
								color: '#000000',
								size: '16',
								type: 'apffcache'},
							"link":"",
							"code":60
						},
						{
							"title":"省流量模式",
							"extraIcon": {
								color: '#000000',
								size: '16',
								type: 'apffflow'},
							"link":"",
							"code":61
						}]
				},
				{
					"title":"去评价",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffevaluation'
					},
					"link":"",
					"code":7
				},
				{
					"title":"分享给好友",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffshare'
					},
					"link":"",
					"code":8
				},
				{
					"title":"开源许可",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffopensource'
					},
					"link":"",
					"code":9
				},
				{
					"title":"隐私协议",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffprivacy'
					},
					"link":"",
					"code":10
				}

			]
		}
	},
	computed: {
		
	},
	methods: {
		setNetWork(){
			this.navTo('/pages/sysset/network',{noCheckLogin:true});
		},
		sysSettingsClick(e){
			console.log("设置：e: " + JSON.stringify(e));
			/* uni.showToast({
				icon: 'none',
				title: "你点击了设置选项"
			}) */
			let code=e;
			switch(code){
				case 1:
					
					break;
				case 2://网络设置
					this.setNetWork();
					break;
				case 3:
					
					break;
				case 4:
					
					break;
				case 5:
					
					break;
				case 6:
					
					break;
				case 7:
					
					break;
				case 8:
					
					break;
				case 9:
					
					break;
				case 10:
					
					break;
				case 11:
					
					break;
				default:
					console.log("error:"+code);
					break;
			}
		}
	},
}
// #endif