// #ifndef MP-WEIXIN
/* 非小程序端 */
// 引入mescroll-mixins.js
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
export default {
	mixins: [MescrollMixin], // 使用mixin
	data() {
		return {
			// 上拉加载的配置(可选, 绝大部分情况无需配置)
			upOption: {
				use: true, //是否启用上拉加载
				auto: true, // 是否在初始化完毕之后自动执行一次上拉加载的回调
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 10, // 每页数据的数量，要与数据库一次取出对应，如果数据库取出数据小于size则默认到底
					time: null //time : 加载第一页数据服务器返回的时间 (可空); 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
				},
				noMoreSize: 1, //如果列表已无数据,可设置列表的总数量要大于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
				textLoading: '加载中 ...', //	上拉加载中的文本
				textNoMore: '到底了哦', //	没有更多数据的提示文本
				bgColor: 'transparent', //	下拉区域背景颜色 (1.2.4新增)
				textColor: 'gray', //下拉文本的颜色 (当bgColor配置了颜色,textColor未配置时,则会默认为白色 1.2.4新增);支持背景图和渐变: 如 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)' (1.2.6版本);支持一行代码定义background: https://www.runoob.com/cssref/css3-pr-background.html;建议同步配置pages.json的"backgroundColorBottom"
				toTop: {
					src: null, //回到顶部按钮的配置:src : 图片路径,必须配置src才会显示; (若想禁用,则src为空串即可)
					offset: 1000, //列表滚动1000px显示回到顶部按钮
					duration: 300, //回到顶部的动画时长, 默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过js模拟,比较耗性能; 所以非特殊情况不建议修改)
					zIndex: 9990, //fixed定位z-index值 (1.2.0新增)
					right: 20, //到右边的距离 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
					bottom: 120, //到底部的距离 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
					safearea: false, // bottom的偏移量是否加上底部安全区的距离, 默认false. 适配iPhoneX时使用 (具体页面如不配此项,则取mescroll组件props的safearea值. 1.2.0新增)
					width: 72, //回到顶部图标的宽度 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
					radius: "50%", // 圆角 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
					left: null //到左边的距离. 此项有值时,right不生效. (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
				},
				empty: {
					use: true, //列表第一页无任何数据时,显示的空布局 use : 是否启用
					icon: null, //icon : 空布局的图标路径 (支持网络路径)
					tip: "暂无相关数据", //tip : 提示文本
					btnText: "选择你的位置", //按钮文本
					fixed: false, //是否使用定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,所以最终还是会降级为absolute)
					top: "100rpx", //fixed定位的top值 (完整的单位值,如"100rpx", "10%";)
					zIndex: 99 //fixed定位z-index值
				},
				isBoth: false, //	上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新
				isLock: false, //	是否锁定上拉加载 如果配置true,则会锁定不可上拉,可通过调用mescroll.lockUpScroll(false)解锁
				offset: 150, //	距底部多远时,触发upCallback ; 1.1.0新增 (仅mescroll-uni生效) mescroll-body配置的是pages.json的 onReachBottomDistance
				onScroll: false, //	是否监听滚动事件, 默认false (仅mescroll-uni可用;mescroll-body是页面的onPageScroll);监听列表滚动是非常耗性能的,很容易出现卡顿,非特殊情况不要配置此项
			},
			// 下拉刷新的配置(可选, 绝大部分情况无需配置)
			downOption: { //网址http://www.mescroll.com/uni.html#options
				use: true, //是否启用下拉刷新,如果配置false,则不会初始化下拉刷新的布局
				auto: false, //是否在初始化完毕之后自动执行一次下拉刷新的回调 callback
				native: false, //是否使用系统自带的下拉刷新; 默认false;
				textInOffset: "下拉刷新", //下拉的距离在offset范围内的提示文本
				textOutOffset: '释放更新', //下拉的距离大于offset范围的提示文本
				textLoading: '加载中 ...', //加载中的提示文本
				textSuccess: '加载成功', //加载成功的提示文本 (1.3.3新增)
				textErr: '加载失败', //加载失败的提示文本 (1.3.3新增)
				beforeEndDelay: 100, //延时结束的时长, 也是显示加载成功/失败的时长; 单位ms (1.3.3新增)
				bgColor: 'transparent', //下拉区域背景颜色 (1.2.4新增);支持背景图和渐变: 如 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)' (1.2.6版本);支持一行代码定义background: https://www.runoob.com/cssref/css3-pr-background.html;建议同步配置pages.json的"backgroundColorTop"
				textColor: 'gray', //下拉文本的颜色 (当bgColor配置了颜色,textColor未配置时,则会默认为白色 1.2.4新增)
				autoShowLoading: false, //如果设置auto=true ( 在初始化完毕之后自动执行下拉刷新的回调 ) ,那么是否显示下拉刷新的进度需配置down的callback才生效
				isLock: false, //是否锁定下拉刷新 如果配置true,则会锁定不可下拉,可通过调用mescroll.lockDownScroll(false)解锁
				offset: 80, //在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
				fps: 80, //下拉的节流配置 (值越大每秒更新下拉状态的频率越高, 当您发觉下拉卡顿时可尝试调高/低此值)1.3.0版本已废弃, 已通过wxs提高性能, 无需手动节流
				inOffsetRate: 1, //在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
				outOffsetRate: 0.2, //在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值越接近0,高度变化越小,表现为越往下越难拉
				bottomOffset: 20, //当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
				minAngle: 45, //触发下拉最少要偏移的角度(滑动的轨迹与水平线的锐角值),取值区间 [0,90];;默认45度,即向下滑动的角度大于45度(方位角为45°~145°及225°~315°)则触发下拉;;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突
			}
		}
	},
	computed: {
		headerHeight() {
			return 750 / uni.upx2px(750) * (this.systemInfo.navigationBarHeight + this.systemInfo.statusBarHeight);
		}
	},
	methods: {
		//mescroll组件初始化的回调,可获取到mescroll对象,(此处可删,mixins已默认)
		/* mescrollInit(mescroll){
			console.log("mescrollInit");
			//this.isLoading = true;
			this.mescroll = mescroll;
			this.mescroll.resetUpScroll(false)
		}, */
		//上拉加载回调  加载热门推荐窗口列表
		async upCallback(page) {
			console.log("【upCallback】");
			let pageNum = page.num; // 页码, 默认从1开始
			let pageSize = page.size; // 页长, 默认每页显示10条，注意与customCachePages的区别于联系
			let customCachePages = 10; //自定义每次网络请求获取多少数据
			//console.log("pageNum:"+pageNum+"/"+"pageSize:"+pageSize);
			//网络请求request,这里先用uniClod数据，等待后续迁移


			/* //数据计数
			const res = await this.$request('window', 'getWindowCount',{});
			console.log("res: " + JSON.stringify(res));
			console.log(res.result.total); */

			//返回数据
			//this.cachePosition为store/modules/cache.js中变量，存储用户先前选择的位置。若进入首页发现cachePosition未存储位置数据，则不加载窗口，并提醒。
			//若有数据则通过位置数据向服务器请求，获得窗口展示列表。
			//console.log("index.js页面this.cachePosition:"+JSON.stringify(this.cachePosition));
			if (Object.keys(this.cachePosition).length == 0 || this.cachePosition == null) {
				this.mescroll.endSuccess(0);
			} else {
				//console.log("text:"+this.cachePosition[this.cachePosition.length-1].text);
				//this.picker_setNavStyle(this.cachePosition); //设置样式
				/* uni.showToast({
					title: "向码号为" + this.cachePosition[this.cachePosition.length - 1].value + "名称为" + this
						.cachePosition[this.cachePosition.length - 1].text + "请求数据"
				}) */

				const res = await this.$request_ssm('area/getProductShopList', {
					code: this.cachePosition[this.cachePosition.length - 1].value
				});
				//console.log("测试区域数据："+JSON.stringify(res));
				/* const res = await this.$request('window', 'getWindow', {
					offset: (pageNum - 1) * customCachePages,//偏移量
					limit: customCachePages//数据数
				}); */
				/* const currentList = res.result.data;//取到customCachePages条数据
				console.log(JSON.stringify(currentList)); */
				if (res.code === 100) {//请求成功
					// 接口返回的当前页数据列表 (数组)
					let curPageData = JSON.parse(res.data.result);
					let currentDataList = curPageData[0].productShopList;//店铺数据列表
					//console.log("curPageData:"+curPageData+"/"+curPageData[0]);
					// 接口返回的当前页数据长度
					let curPageLen = currentDataList.length;
					//console.log(curPageLen);
					//console.log(JSON.stringify(curPageData)+"/"+JSON.stringify(curPageData[0]));
					// 接口返回的总页数 暂不设
					//let totalPage = data.xxx; 
					// 接口返回的总数据量 暂不设
					//let totalSize = data.xxx; 
					// 接口返回的是否有下一页 (true/false) 暂不设
					//let hasNext = data.xxx; 
					
					
					if (curPageLen != 0) {
						if (pageNum === 1) {
							this.$refs.productList.productLists = []; //先清空之前数据再追加第一页数据
						}
						this.$nextTick(() => {
							//console.log("currentDataList:"+JSON.stringify(currentDataList));//应该有多个才对
							//设想遍历
							let endWindowList=[];
							currentDataList.forEach((item,index)=>{
								// console.log(item);
								// console.log(index);
								const {
									productShopId:id,
									productShopAvatar:icon,
									productShopExtra:subTitle,//副标题
									productShopHot:isHot,
									//productShopId:,
									productShopImg:imgs_notParse,
									productShopName:title
								}=item;
								endWindowList.push({
									id,
									icon,
									extra:isHot==0?"新店开张":"热门",
									subTitle,//副标题
									//productShopId:,
									imgs:JSON.parse(imgs_notParse),
									title
								})
								
							})
							
							this.$refs.productList.productLists = this.$refs.productList.productLists
								.concat(endWindowList);
							//console.log("this.$refs.productList.productLists:"+JSON.stringify(this.$refs.productList.productLists));
						})
					}else{
						this.$refs.productList.productLists = [];//当切换位置发现页面商店数据为0时把原来位置数据清空
					}

					this.mescroll.endSuccess(curPageLen);
				} else {
					console.log("error:" + JSON.stringify(res));
				}

				/* 请求成功,隐藏加载状态 */
				//方法一(推荐): 后台接口有返回列表的总页数 totalPage
				//this.mescroll.endByPage(curPageLen, totalPage);
				//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
				//this.mescroll.endBySize(curPageLen, totalSize);
				//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
				//this.mescroll.endSuccess(curPageLen, hasNext);
				// 如果数据较复杂,可等到渲染完成之后再隐藏下拉加载状态: 如
				// 建议使用setTimeout,因为this.$nextTick某些情况某些机型不触发
				/* setTimeout(()=>{
					this.mescroll.endSuccess(curPageLen)
				},20) */

			}
		},
		/*下拉刷新的回调, 有3种处理方式:
		  第1种: 请求具体接口
		  第2种: 下拉刷新和上拉加载调同样的接口, 则不用第1种, 直接mescroll.resetUpScroll()即可
		  第3种: 下拉刷新什么也不处理, 可直接调用或者延时一会调用 mescroll.endSuccess() 结束即可
		*/
		//当前第二种
		downCallback(){
			console.log("【downCallback】");
			//this.$refs.productList.loadType = 'refresh';
			//if(this.$refs.productList.loadType == 'refresh')
			this.mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
		},
		pickerEmptyclick() {
			this.clickNavBarBtnSkipPicker();
		}
	},
}
// #endif
