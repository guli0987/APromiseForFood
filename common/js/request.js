//云函数映射 默认apff-uni
const moduleMap = {
	user: 'apff-user',
	payment: 'apff-pay',
	swiper:'apff-swiper_info'
}
/**
 * @param {String} module  
 * @param {String} operation  
 * @param {Object} data 请求参数
 */
export const request = (module, operation, data={})=>{
	return new Promise((resolve, reject) => {
		const cloudFnName = moduleMap[module] || 'test';
		//alert(cloudFnName);
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
			  //alert(res.result.code);
			  //alert(JSON.stringify(res.result.data));
			  resolve(res.result);
		  })
		  .catch((err) => {
			  
		  });
	});
}