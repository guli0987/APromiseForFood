const baseUrl='http://localhost:8080/apff_ssm_war_exploded/';//http://localhost:8080/apff_ssm_war_exploded/city/jsonCity
/* abort		中断请求任务
offHeadersReceived		取消监听 HTTP Response Header 事件，仅微信小程序平台支持，文档详情
onHeadersReceived		监听 HTTP Response Header 事件。会比请求完成事件更早，仅微信小程序平台支持，文档详情 */
export const request_ssm = (url = '',params={},type = 'GET',header={})=>{
	return new Promise((resolve, reject) => {
		uni.request({
				url:baseUrl+url,//请求地址
				data:params,
				header:header,
				method:type,//请求类型 GET POST PUT DELETE CONNECT HEAD OPTIONS TRACE
				/* timeout:60000,
				dataType:"json",
				responseType:"text",
				sslVerify:true,
				withCredentials:false,
				firstIpv4:false, */
				/**
				 * data	Object/String/ArrayBuffer	开发者服务器返回的数据
				 * statusCode	Number	开发者服务器返回的 HTTP 状态码
				 * header	Object	开发者服务器返回的 HTTP Response Header
				 * cookies	Array.<string>	开发者服务器返回的 cookies，格式为字符串数组
				 */
				/* success:(res)=>{
					console.log("【success】:"+JSON.stringify(res));
				}, */
				/* fail: (res) => {
					console.log("错误: ");
				},
				complete: () => {
					
				} */	
		}).then((response)=>{//response为一个数组，数组第一项为错误信息，第二项为返回数据
			console.log("【本地请求测试request_ssm返回】:"+JSON.stringify(response));
			/* setTimeout(function(){
				uni.showToast({
					title:"请求成功"
				})
			},200); */
			//let [error, res, data] = response;		
			/* let data = response[1];
			resolve(data.data); */
			let result = response[1].data;
			resolve(result);
		}).catch((error)=>{
			//console.log("【本地请求测试error】:"+JSON.stringify(error));
			let [err,res] =error;
			reject(err);
		});
	});
}