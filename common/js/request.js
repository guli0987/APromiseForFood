//云函数映射 默认apff-uni
const moduleMap = {
	user: 'apff-user',
	payment: 'apff-pay'
}
/**
 * @param {String} module  
 * @param {String} operation  
 * @param {Object} data 请求参数
 */
export const request = (module,operation, data={})=>{
	return new Promise((resolve, reject) => {
		const cloudFnName = moduleMap[module] || 'apff-uniapp';
		//alert(cloudFnName);
		//alert(operation)
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
/*上拉加载的回调*/
/* 				upCallback(page) {
					let pageNum = page.num; // 页码, 默认从1开始
					let pageSize = page.size; // 页长, 默认每页10条
					uni.request({
						url: 'xxxx?pageNum='+pageNum+'&pageSize='+pageSize,
						success: (data) => {
							// 接口返回的当前页数据列表 (数组)
							let curPageData = data.xxx; 
							// 接口返回的当前页数据长度 (如列表有26个数据,当前页返回8个,则curPageLen=8)
							let curPageLen = curPageData.length; 
							// 接口返回的总页数 (如列表有26个数据,每页10条,共3页; 则totalPage=3)
							let totalPage = data.xxx; 
							// 接口返回的总数据量(如列表有26个数据,每页10条,共3页; 则totalSize=26)
							let totalSize = data.xxx; 
							// 接口返回的是否有下一页 (true/false)
							let hasNext = data.xxx; 
							
							//设置列表数据
							if(page.num == 1) this.dataList = []; //如果是第一页需手动置空列表
							this.dataList = this.dataList.concat(curPageData); //追加新数据
							
							// 请求成功,隐藏加载状态
							//方法一(推荐): 后台接口有返回列表的总页数 totalPage
							this.mescroll.endByPage(curPageLen, totalPage); 
							
							//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
							//this.mescroll.endBySize(curPageLen, totalSize); 
							
							//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
							//this.mescroll.endSuccess(curPageLen, hasNext); 
							
							//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.
							//如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据
							//如果传了hasNext,则翻到第二页即可显示无更多数据.
							//this.mescroll.endSuccess(curPageLen);
							
							// 如果数据较复杂,可等到渲染完成之后再隐藏下拉加载状态: 如
							// 建议使用setTimeout,因为this.$nextTick某些情况某些机型不触发
							setTimeout(()=>{
								this.mescroll.endSuccess(curPageLen)
							},20)
							
							// 上拉加载的 curPageLen 必传, 否则会一直显示'加载中...':
							1. 使配置的noMoreSize 和 empty生效
							2. 判断是否有下一页的首要依据: 
							   当传的值小于page.size时(说明不满页了),则一定会认为无更多数据;
							   比传入的totalPage, totalSize, hasNext具有更高的判断优先级;
							3. 当传的值等于page.size时(满页),才取totalPage, totalSize, hasNext判断是否有下一页
							传totalPage, totalSize, hasNext目的是避免方法四描述的小问题
							
							// 提示: 您无需额外维护页码和判断显示空布局,mescroll已自动处理好.
							// 当您发现结果和预期不一样时, 建议再认真检查以上参数是否传正确
						},
						fail: () => {
							//  请求失败,隐藏加载状态
							this.mescroll.endErr()
						}
					}) */