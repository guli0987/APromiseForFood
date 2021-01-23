// #ifndef MP-WEIXIN
/* 非小程序端 */
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
export default{
	mixins: [MescrollMixin], 
	data() {
		return {
			upOption:{
				use : true,//是否启用上拉加载
				auto: false, // 是否自动加载
				page: {
				 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
				 	size: 8, // 每页数据的数量，要与数据库一次取出对应，如果数据库取出数据小于size则默认到底
					time : null//time : 加载第一页数据服务器返回的时间 (可空); 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
				},
				noMoreSize: 1,//如果列表已无数据,可设置列表的总数量要大于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
				textLoading:'加载中 ...',//	上拉加载中的文本
				textNoMore:'到底了哦',//	没有更多数据的提示文本
				bgColor:'transparent',//	下拉区域背景颜色 (1.2.4新增)
				textColor:'gray',//下拉文本的颜色 (当bgColor配置了颜色,textColor未配置时,则会默认为白色 1.2.4新增);支持背景图和渐变: 如 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)' (1.2.6版本);支持一行代码定义background: https://www.runoob.com/cssref/css3-pr-background.html;建议同步配置pages.json的"backgroundColorBottom"
				toTop:{
				  src : null ,//回到顶部按钮的配置:src : 图片路径,必须配置src才会显示; (若想禁用,则src为空串即可)
				  offset : 1000 ,//列表滚动1000px显示回到顶部按钮
				  duration : 300,//回到顶部的动画时长, 默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过js模拟,比较耗性能; 所以非特殊情况不建议修改)
				  zIndex: 9990,//fixed定位z-index值 (1.2.0新增)
				  right: 20,//到右边的距离 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
				  bottom: 120,//到底部的距离 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
				  safearea: false,// bottom的偏移量是否加上底部安全区的距离, 默认false. 适配iPhoneX时使用 (具体页面如不配此项,则取mescroll组件props的safearea值. 1.2.0新增)
				  width: 72,//回到顶部图标的宽度 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
				  radius: "50%",// 圆角 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
				  left: null//到左边的距离. 此项有值时,right不生效. (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增)
				},
				empty:{
				  use : true ,//列表第一页无任何数据时,显示的空布局 use : 是否启用
				  icon : null ,//icon : 空布局的图标路径 (支持网络路径)
				  tip : "暂无相关数据",//tip : 提示文本
				  btnText : "",//按钮文本
				  fixed: false,//是否使用定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,所以最终还是会降级为absolute)
				  top: "100rpx",//fixed定位的top值 (完整的单位值,如"100rpx", "10%";)
				  zIndex: 99//fixed定位z-index值
				},
				isBoth:false,//	上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新
				isLock:false,//	是否锁定上拉加载 如果配置true,则会锁定不可上拉,可通过调用mescroll.lockUpScroll(false)解锁
				offset:150,//	距底部多远时,触发upCallback ; 1.1.0新增 (仅mescroll-uni生效) mescroll-body配置的是pages.json的 onReachBottomDistance
				onScroll:false,//	是否监听滚动事件, 默认false (仅mescroll-uni可用;mescroll-body是页面的onPageScroll);监听列表滚动是非常耗性能的,很容易出现卡顿,非特殊情况不要配置此项
			},
			downOption:{//网址http://www.mescroll.com/uni.html#options
				use:true,//是否启用下拉刷新,如果配置false,则不会初始化下拉刷新的布局
				auto:false,//是否在初始化完毕之后自动执行一次下拉刷新的回调 callback
				native:false,//是否使用系统自带的下拉刷新; 默认false;
				textInOffset:"下拉刷新",//下拉的距离在offset范围内的提示文本
				textOutOffset:'释放更新'	,//下拉的距离大于offset范围的提示文本
				textLoading:'加载中 ...'	,//加载中的提示文本
				textSuccess:'加载成功',//加载成功的提示文本 (1.3.3新增)
				textErr:'加载失败',//加载失败的提示文本 (1.3.3新增)
				beforeEndDelay:100,//延时结束的时长, 也是显示加载成功/失败的时长; 单位ms (1.3.3新增)
				bgColor:'transparent',//下拉区域背景颜色 (1.2.4新增);支持背景图和渐变: 如 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)' (1.2.6版本);支持一行代码定义background: https://www.runoob.com/cssref/css3-pr-background.html;建议同步配置pages.json的"backgroundColorTop"
				textColor:'gray',//下拉文本的颜色 (当bgColor配置了颜色,textColor未配置时,则会默认为白色 1.2.4新增)
				autoShowLoading:false,//如果设置auto=true ( 在初始化完毕之后自动执行下拉刷新的回调 ) ,那么是否显示下拉刷新的进度需配置down的callback才生效
				isLock:false,//是否锁定下拉刷新 如果配置true,则会锁定不可下拉,可通过调用mescroll.lockDownScroll(false)解锁
				offset:80,//在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
				fps:80,//下拉的节流配置 (值越大每秒更新下拉状态的频率越高, 当您发觉下拉卡顿时可尝试调高/低此值)1.3.0版本已废弃, 已通过wxs提高性能, 无需手动节流
				inOffsetRate:1,//在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
				outOffsetRate:0.2,//在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值越接近0,高度变化越小,表现为越往下越难拉
				bottomOffset:20,//当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
				minAngle:45,//触发下拉最少要偏移的角度(滑动的轨迹与水平线的锐角值),取值区间 [0,90];;默认45度,即向下滑动的角度大于45度(方位角为45°~145°及225°~315°)则触发下拉;;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突
			}
		}
	},
	computed: {
		headerHeight(){
			return 750 / uni.upx2px(750) * (this.systemInfo.navigationBarHeight + this.systemInfo.statusBarHeight);
		}
	},
	methods: {
		//加载热门推荐窗口列表-上拉加载
		async loadHotWindowList(page){
			let pageNum = page.num; // 页码, 默认从1开始
			let pageSize = page.size; // 页长, 默认每页10条
			if(pageNum === 1){
				//第一页清空数据重载，第一页刷新
				//this.windowList = [];
				//alert("刷新数据");
				/* this.$nextTick(() => {
					 alert(this.$refs.productList);
				 }) */
				this.$nextTick(() => {
					if(this.$refs.productList){
						this.$refs.productList.loadType = 'refresh';
					}
				 }) 
			}else{//第二页往上增加
				alert("增加数据");
				this.$refs.productList.loadType = 'add';
			}
			const res = await this.$request('window', 'getWindow', {
				offset: (pageNum - 1) * pageSize,//偏移量
				limit: pageSize//数据数
			});
			const currentList = res.data;
			//alert(JSON.stringify(currentList))
			this.windowList = this.windowList.concat(currentList); //追加新数据
			this.mescroll.endSuccess(currentList.length); //结束加载状态
			
			console.log(JSON.parse(JSON.stringify(res.data)));
		},
		mescrollInit(mescroll){
			this.isLoading = true;
			this.mescroll = mescroll;
			this.mescroll.resetUpScroll(false)
		}/* ,
		downCallback(){// 绝大部分情况methods中都不用写downCallback的,此时会默认调MescrollMixin的downCallback (效果同第2
			// 第2种: 下拉刷新和上拉加载调同样的接口, 则不用第1种, 直接mescroll.resetUpScroll()即可
			this.mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
		} */
	},
}
// #endif
