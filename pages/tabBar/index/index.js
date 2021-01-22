// #ifndef MP-WEIXIN
/* 非小程序端 */
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
export default{
	mixins: [MescrollMixin], 
	data() {
		return {
			upOption:{
				auto: false, // 是否自动加载
				page: {
				 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
				 	size: 8 // 每页数据的数量，要与数据库一次取出对应，如果数据库取出数据小于size则默认到底
				},
				noMoreSize: 1,
			},
			downOption:{
				use:false,//是否启用下拉刷新,如果配置false,则不会初始化下拉刷新的布局
				auto:false,//是否在初始化完毕之后自动执行一次下拉刷新的回调 callback
				native:false,//是否使用系统自带的下拉刷新; 默认false;
				textInOffset:"下拉刷新",//下拉的距离在offset范围内的提示文本
				textOutOffset:'释放更新'	,//下拉的距离大于offset范围的提示文本
				textLoading:'加载中 ...'	,//加载中的提示文本
				textSuccess:'加载成功',//加载成功的提示文本 (1.3.3新增)
				textErr:'加载失败',//加载失败的提示文本 (1.3.3新增)
				beforeEndDelay:100,//延时结束的时长, 也是显示加载成功/失败的时长; 单位ms (1.3.3新增)
				bgColor:'transparent',
				//网址http://www.mescroll.com/uni.html#options
				
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
		}
	},
}
// #endif
