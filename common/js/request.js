import store from '@/store'
import cache from './cache'
//云函数映射 默认apff-uni
const moduleMap = {
	user: 'apff-user',
	payment: 'apff-pay',
	userCenter:'user-center'
}
/**
 * @param {String} module  
 * @param {String} operation  
 * @param {Object} data 请求参数
 */
export const request = (module,operation, data={},ext={})=>{
	return new Promise((resolve, reject) => {
		const cloudFnName = moduleMap[module] || 'apff-uniapp';
		//缓存列表数据-未测试
		if(ext.cache > 0){
			const cacheResult = cache.getSync(cloudFnName + '-' + module+ '-' +operation);
			if(cacheResult !== false && cacheResult.status !== 0){
				resolve(cacheResult);
				return;
			}
		}
		//console.log(module+"-"+cloudFnName+"-"+operation+"-"+JSON.stringify(data));
		
		uniCloud.callFunction({
		    name: cloudFnName,
		    data: {
				module,
				operation,
				data
			   }
		  })
		  .then(res => {
			   /* if(res.result){
				  
			  } */
			  console.log("云函数回调："+JSON.stringify(res));
			  //console.log("云函数回调【NoJSON】："+res.success+"/"+res.result.type);
			  //alert(JSON.stringify(res.result.data));
			  //resolve(res.result);
			  //const {success,fail,result}=res;
			  resolve(res);
		  })
		  .catch((err) => {
			  reject(err);
		  });
	});
}