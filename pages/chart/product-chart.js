/* import uCharts from '../../components/u-charts/u-charts.js'; */
import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.js';
import  { isJSON } from '@/common/js/checker.js';
	var _self;
	var canvaColumn=null;

	export default {
		data() {
				return {
					cWidth:'',
					cHeight:'',
					pixelRatio:1,
					textarea:'',
				}
			},
			onShareAppMessage(){
					//#ifdef MP-QQ
					qq.showShareMenu({showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']})
					//#endif
			},
			onLoad() {
				_self = this;
				//#ifdef MP-ALIPAY
				uni.getSystemInfo({
					success: function (res) {
						if(res.pixelRatio>1){
							//正常这里给2就行，如果pixelRatio=3性能会降低一点
							//_self.pixelRatio =res.pixelRatio;
							_self.pixelRatio =2;
						}
					}
				});
				//#endif
				this.cWidth=uni.upx2px(750);
				this.cHeight=uni.upx2px(500);
				//this.getServerData();
				this.loadServerData();
			},
			methods: {
				async loadServerData(){
					uni.showLoading({
						title: "正在加载数据..."
					})
					const data=await this.$api.json('charts');
					console.log("data:"+JSON.stringify(data));
					let ColumnStack={categories:[],series:[]};
					//
					ColumnStack.categories=data.ColumnStack.categories;
					ColumnStack.series=data.ColumnStack.series;
					_self.textarea = JSON.stringify(data.ColumnStack);
					_self.showColumnStack("canvasColumnStack",ColumnStack);
					uni.hideLoading();
				},
				getServerData(){
					uni.request({
						url: 'https://www.ucharts.cn/data.json',
						data:{
						},
						success: function(res) {
							console.log(res.data.data)
							let ColumnStack={categories:[],series:[]};
							//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
							ColumnStack.categories=res.data.data.ColumnStack.categories;
							ColumnStack.series=res.data.data.ColumnStack.series;
							_self.textarea = JSON.stringify(res.data.data.ColumnStack);
							_self.showColumnStack("canvasColumnStack",ColumnStack);
						},
						fail: () => {
							_self.tips="网络错误，小程序端请检查合法域名";
						},
					});
				},
				showColumnStack(canvasId,chartData){
					canvaColumn=new uCharts({
						$this:_self,
						canvasId: canvasId,
						type: 'column',
						padding:[15,15,0,15],
						legend:{
							show:true,
							padding:5,
							lineHeight:11,
							margin:0,
						},
						fontSize:11,
						background:'#FFFFFF',
						pixelRatio:_self.pixelRatio,
						animation: true,
						categories: chartData.categories,
						series: chartData.series,
						xAxis: {
							disableGrid:true,
						},
						yAxis: {
							//disabled:true
						},
						dataLabel: true,
						width: _self.cWidth*_self.pixelRatio,
						height: _self.cHeight*_self.pixelRatio,
						extra: {
							column: {
								type:'stack',
								width: _self.cWidth*_self.pixelRatio*0.5/chartData.categories.length
							}
						  }
					});
					
				},
				touchColumn(e){
					canvaColumn.touchLegend(e);
					canvaColumn.showToolTip(e, {
						format: function (item, category) {
							return category + ' ' + item.name + ':' + item.data 
						}
					});
				},
				changeData(){
					if(isJSON(_self.textarea)){
						let newdata=JSON.parse(_self.textarea);
						canvaColumn.updateData({
							series: newdata.series,
							categories: newdata.categories
						});
					}else{
						uni.showToast({
							title:'数据格式错误',
							image:'../../../static/images/alert-warning.png'
						})
					}
				}
			}
	}