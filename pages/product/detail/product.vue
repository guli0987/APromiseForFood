<template>
	<view class="container">
		<!-- <view>{{currProductInfo}}</view> -->
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in this.currProductInfo.bannerImgs" :key="index">
					<view class="image-wrapper">
						<image
							:src="item.src" 
							class="loaded" 
							mode="aspectFill"
						></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="introduce-section">
			<text class="title">{{currProductInfo.name}}</text>
			<text class="hot">{{currProductInfo.isHot}}</text>
			<view class="price-box">
				<text class="price-tip">¥</text>
				<text class="price">{{Math.floor(currProductInfo.price*0.8)}}</text>
				<text class="m-price">¥{{currProductInfo.price}}</text>
				<text class="coupon-tip">折扣</text>
			</view>
			<view class="bot-row">
				<text>销量: {{currProductInfo.monthSellCount}}</text>
				<text>排名: 加载中</text>
				<text>浏览量: 3476</text>
			</view>
		</view>
		
		<!--  分享 如果有优惠活动则显示-->
		<!-- <view class="share-section" @click="share" v-if="true">
			<view class="">
				<text>[活动]</text>
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<text class="yticon icon-you"></text>
			</view>
			
		</view> -->
		
		<view class="c-list">
			<view class="c-row b-b" @click="toggleSpec">
				<text class="tit">类型</text>
				<view class="con">
					<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
						{{sItem.name}}
					</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>
			<!-- 如果有优惠券显示 -->
			<view class="c-row b-b" v-if="true">
				<text class="tit">优惠</text>
				<text class="con t-r red">领取优惠券</text>
				<text class="yticon icon-you"></text>
			</view>
			<view class="c-row b-b">
				<text class="tit">活动</text>
				<view class="con-list">
					<text>新人用户首单送3元无门槛代金券</text>
					<text>订单满20减5</text>
					<text>订单满50减10</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">日期</text>
				<view class="bz-list con">
					<text>{{currProductInfo.addDate}}</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">其他</text>
				<view class="bz-list con">
					<text>暂无</text>
				</view>
			</view>
		</view>
		
		<!-- 评价 -->
		<view class="eva-section">
			<view class="e-header">
				<text class="tit">总体评价</text>
				<text>(86)</text>
				<text class="tip">好评率 100%</text>
				<text class="yticon icon-you"></text>
			</view> 
			<view class="eva-box">
				<!-- <image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="right">
					<text class="name">Leo yo</text>
					<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot">
						<text class="attr">购买类型：XL 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view> -->
				<!-- 柱状图 -->
				<!-- <view class="qiun-columns">
					<view class="qiun-charts" style="background-color: #E5FDC3;">
						<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" style="background-color: #E5FDC3;" :width="cWidth*pixelRatio"
						 :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchIt($event,'canvasColumn')"></canvas>
						<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" style="background-color: #E5FDC3;" @touchstart="touchIt($event,'canvasColumn')"></canvas>
					</view>
				</view> -->
				<view class="qiun-columns">
						<view class="qiun-charts" >
							<canvas canvas-id="canvasColumnStack" id="canvasColumnStack" class="charts"  @touchstart="touchStartColumn" @touchmove="touchMoveColumn" @touchend="touchEndColumn"></canvas>
						</view>
				</view>
			</view>
		</view>
		<view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<rich-text :nodes="currProductInfo.desc"></rich-text>
		</view>
		
		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<uni-goods-nav-best :options="options" :fill="true" :button-group="buttonGroup" @click="menuClick" @buttonClick="menuButtonClick" />
		</view>
		
		
		<!-- 规格-模态层弹窗 -->
		<view 
			class="popup spec" 
			:class="specClass"
			@touchmove.stop.prevent="stopPrevent"
			@click="toggleSpec"
		>
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<image :src="this.currProductInfo.img"></image>
					<view class="right">
						<text class="price">¥{{currProductInfo.price}}</text>
						<text class="stock">库存：{{currProductInfo.stock}}件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
								{{sItem.name}}
							</text>
						</view>
					</view>
				</view>
				<view v-for="(item,index) in specList" :key="index" class="attr-list">
					<text>{{item.name}}</text>
					<view class="item-list">
						<text 
							v-for="(childItem, childIndex) in specChildList" 
							v-if="childItem.pid === item.id"
							:key="childIndex" class="tit"
							:class="{selected: childItem.selected}"
							@click="selectSpec(childIndex, childItem.pid)"
						>
							{{childItem.name}}
						</text>
					</view>
				</view>
				<button class="btn" @click="toggleSpec">完成</button>
			</view>
		</view>
		<!-- 分享 -->
		<uni-popup id="popupShare" ref="popupShare" type="share" @change="change">
			<uni-popup-share title="分享到" @select="select"></uni-popup-share>
		</uni-popup>
		<!-- 悬浮按钮 -->
		<!-- <movable-area>
			<movable-view :x="x" :y="y" direction="all" @change="onChangeM"> -->
				<!-- <uni-fab-best ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction" @trigger="trigger" @fabClick="fabClick" /> -->
			<!-- </movable-view>
		</movable-area> -->
	</view>
</template>

<script>
	import chartProduct from '../../chart/product-chart.js'
	import share from '@/components/mix-share/share.vue';
	export default{
		components: {
			share
		},
		mixins: [chartProduct],
		data() {
			return {
				productId:0,
				currProductInfo:{
					id:0,
					img:"加载中",
					name:"加载中",
					price:"--",
					desc:"加载中",
					sn:0,
					type:"加载中",
					tag:"",
					note:"加载中",
					addDate:"加载中",
					modifyDate:"加载中",
					isAlone:"加载中",
					isBest:"加载中",
					isHot:"加载中",
					isNew:"加载中",
					isOnSale:"加载中",
					isReal:"加载中",
					keyWords:"加载中",
					bannerImgs:"加载中",
					showid:"加载中"
				},
				/* productInfoList:[{
					"category_id": "1", // 所属窗口
					"goods_sn": "20210225828", // 商品的唯一货号
					"name": "手抓饼 传统美食", // 商品名称
					"keywords": "饼,传统美食", // 商品关键字，为搜索引擎收录使用
					// 商品详细描述
					"goods_desc": "手抓饼是从葱抓饼演变而来，起源于中国台湾地区。2004年在台湾夜市被发现并于2005年正式从台湾引进至内地。新鲜出炉后的手抓饼，千层百叠，层如薄纸，用手抓之，面丝千连，其外层金黄酥脆，内层柔软白嫩，一股葱油与面筋的香味扑鼻而来，让每位食客来不及等待，抓起就吃。手抓饼至今一直风靡全国，可搭配鸡蛋、猪肉叉烧、牛肉饼、粮心香肠、藤椒鸡排、培根、方火腿、鸡柳、蔬菜等辅料，也可搭配酱爆汁、孜然香辣酱、番茄沙司、麻辣汁、甜辣酱、甜味沙拉酱、黑椒酱、排骨酱等酱料，香酥可口，老少皆宜。", 
					"goods_thumb": "https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg", // 商品缩略图，用于在列表或搜索结果中预览显示
					"goods_banner_imgs": "", // 商品详情页的banner图地址
					"goods_price": "9999", // 商品价格
					"remain_count": "999999", // 库存数量
					"month_sell_count": "640", // 月销量
					"total_sell_count": "28512", // 总销量
					"comment_count": "980021", // 累计评论数
					"is_real": true, // 是否实物
					"is_on_sale": true, // 是否上架销售
					"is_alone_sale": true, // 是否能单独销售；如果不能单独销售，则只能作为某商品的配件或者赠品销售
					"is_best": false, // 是否精品
					"is_new": true, // 是否新品
					"is_hot": false, // 是否热销
					"add_date": "2020-8-26 09:37:21", // 上架时间
					"last_modify_date": "2020-8-26 09:37:21", // 最后修改时间
					"seller_note": "", //商家备注，仅商家可见
					"shop_name": "京东商城网上自营专卖店",
					"tag": ["饼", "传统美食"],
					"goods_tip": "自营"
				}], */
				//
				x: 0,
				y: 0,
				scale: 2,
				old: {
					x: 0,
					y: 0,
					scale: 2
				},
				/* fab */
				horizontal: 'left',
				vertical: 'bottom',
				direction: 'horizontal',
				pattern: {
					color: '#ff007f',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
				},
				content: [{
						iconPath: '/static/component.png',
						selectedIconPath: '/static/componentHL.png',
						text: '当前订单',
						active: false
					},
					{
						iconPath: '/static/api.png',
						selectedIconPath: '/static/apiHL.png',
						text: '预约时间',
						active: false
					},
					{
						iconPath: '/static/template.png',
						selectedIconPath: '/static/templateHL.png',
						text: '设置',
						active: false
					}
				],
				
				
				options: [
				{
					icon: 'home',
					text: '首页',
					color:'#7b7b7b'
				},{
					icon: 'headphones',
					text: '客服',
					color:'#7b7b7b',
					info:1,
					infoBackgroundColor: '#ff0000',
					infoColor: "#f5f5f5"
				}, {
					icon: 'heart',
					text: '收藏',
					color:'#646566'
				}],
				buttonGroup: [{
						text: '加入订单',
						backgroundColor: '#ffa200',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ff0000',
						color: '#fff'
					}
				],
				
				specClass: 'none',
				specSelected:[
					{name:"未选择"}
				],
				
				favorite: true,
				/* imgList: [
					{
						src: 'https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/p1.jpeg'
					},
					{
						src: 'https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/p2.jpeg'
					},
					{
						src: 'https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/p3.jpeg'
					}
				], */
				desc: `
					<div style="width:100%">
						<img style="width:100%;display:block;" src="https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/p4.jpeg" /><br>
						<img style="width:100%;display:block;" src="https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/p5.jpeg" /><br>
						<img style="width:100%;display:block;" src="https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/p6.jpeg" /><br>
						<img style="width:100%;display:block;" src="https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/p7.jpeg" /><br>
						<img style="width:100%;display:block;" src="https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/p1.jpeg" />
					</div>
				`,
				specList: [
					{
						id: 1,
						name: '种类',
					},
					{	
						id: 2,
						name: '口味',
					},
				],
				specChildList: [
					{
						id: 1,
						pid: 1,
						name: '小碗',
					},
					{
						id: 2,
						pid: 1,
						name: '中碗',
					},
					{
						id: 3,
						pid: 1,
						name: '大碗',
					},
					{
						id: 7,
						pid: 2,
						name: '默认',
					},
					{
						id: 8,
						pid: 2,
						name: '微辣',
					},
					{
						id: 9,
						pid: 2,
						name: '中辣',
					},
				]
			};
		},
		onLoad(options){
			console.log("options:"+JSON.stringify(options));
			
			//接收传值,id里面放的是标题，因为测试数据并没写id 
			let id = options.productid;
			this.productId=id;
			//console.log(id);
			this.getProductInfo(id);
			
			//规格 默认选中第一条
			/* this.specList.forEach(item=>{
				for(let cItem of this.specChildList){
					if(cItem.pid === item.id){
						this.$set(cItem, 'selected', true);
						this.specSelected.push(cItem);
						break; //forEach不能使用break
					}
				}
			}) */
			//this.shareList = await this.$api.json('shareList');
		},
		computed:{
			/* currentProductInfo(){
				return this.productInfo;
			} */
		},
		methods:{
			//得到产品详细数据
			async getProductInfo(id){
				let res=await this.$request_ssm('product/getProductInfo',{
						id:id
					});
				console.log("【product/getProductInfo】："+JSON.stringify(res));
				if(res.code==100){
					console.log("result:"+res.data.result);
					let result= JSON.parse(res.data.result);
					this.$nextTick(() => {
						
						let getProductInfo=[];
							const {
								productId:id,//产品详情id
								productGoodsThumb:img,//缩略图列表
								productName:name,//产品名
								productGoodsPrice:price,//产品价格
								productGoodsDesc:desc,//描述
								productGoodsSn:sn,//唯一货号
								productGoodsType:type,//类型
								productTag:tag,//标签
								productSellerNote:note,//备注
								productAddDate:addDate,//上架日期
								productLastModifyDate:modifyDate,//修改日期
								productAloneSale:isAlone,//是否单独销售
								productBest:isBest,//是否精品
								productHot:isHot,//是否热销
								productNew:isNew,//是否新品
								productOnSale:isOnSale,//是否上架销售
								productReal:isReal,//是否为实物
								productKeywords:keyWords,//关键字
								productGoodsBannerImgs:bannerImgs,//BannerImgs地址
								productShowId:showid,//所属产品展示id
							}=result;
							getProductInfo.push({
								id,
								img,
								name,
								price,
								desc,
								sn,
								type,
								tag,
								note,
								addDate:this.formatDate(addDate),
								modifyDate,
								isAlone,
								isBest,
								isHot:isHot==1?"火爆":"",
								isNew,
								isOnSale,
								isReal,
								keyWords,
								bannerImgs:JSON.parse(bannerImgs),
								showid,
								stock:"加载中",//库存
								monthSellCount:"加载中",
								monthSellRank:"加载中"
							})
						this.currProductInfo=getProductInfo[0];
						console.log("【数据刷新】"+JSON.stringify(this.currProductInfo));
						//console.log(JSON.stringify(this.currProductInfo.bannerImgs.length));
						//开始获取库存信息
						this.getProductStockInfo(this.currProductInfo.showid);
					
					});
				}else{
					console.log("请求错误"+res);
				}
			},
			checkZero(time){
				return time<10?'0'+time:time;
			},
			formatDate(date){
				var time = new Date(date);
				var y = time.getFullYear();
				var m = time.getMonth()+1;
				var d = time.getDate();
				var h = time.getHours();
				var mm = time.getMinutes();
				var s = time.getSeconds();
				return y+'-'+this.checkZero(m)+'-'+this.checkZero(d);//+' '+this.checkZero(h)+':'+this.checkZero(mm)+':'+this.checkZero(s)
			},
			async getProductStockInfo(id){
				let res=await this.$request_ssm('product/getProductStockInfo',{
						id:id
					});
				console.log("【product/getProductStockInfo】："+JSON.stringify(res));
				if(res.code==100){
					let result= JSON.parse(res.data.result);
					this.currProductInfo.stock=result.productStockCount;
					this.currProductInfo.monthSellCount=result.productMonthSellCount;
					console.log("【刷新数据】"+JSON.stringify(this.currProductInfo));
					
				}else{
					console.log("error");
				}
			},
			onChangeM(e) {
				this.old.x = e.detail.x
				this.old.y = e.detail.y
			},
			/* 按钮组点击事件 */
			menuClick(e) {
				//console.log(JSON.stringify(e))
				if(e.index === 0){
					uni.showToast({
						title: `回到${e.content.text}`,
						icon: 'none'
					})
				}else if(e.index === 1){
					uni.showToast({
						title: `${e.content.text}`,
						icon: 'none'
					})
				}else if(e.index === 2){
					uni.showToast({
						title: `加入${e.content.text}`,
						icon: 'none'
					})
					this.options[e.index].icon="heart-filled";
					this.options[e.index].color='#ff0000';
				}
			},
			menuButtonClick(e) {
				console.log(JSON.stringify(e))
				//this.options[2].info++
				if(e.index === 0){
					uni.showToast({
						title: `${e.content.text}`,
						icon: 'none'
					})
				}else if(e.index === 1){
					//是否校验登录状态{noCheckLogin:true}
					this.navTo('/pages/tabBar/order/detail/createOrder',{noCheckLogin:true});
				}
				
			},
			//规格弹窗开关
			toggleSpec() {
				if(this.specClass === 'show'){
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				}else if(this.specClass === 'none'){
					this.specClass = 'show';
				}
			},
			//选择规格
			selectSpec(index, pid){
				let list = this.specChildList;
				list.forEach(item=>{
					if(item.pid === pid){
						this.$set(item, 'selected', false);
					}
				})

				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = []; 
				list.forEach(item=>{ 
					if(item.selected === true){ 
						this.specSelected.push(item); 
					} 
				})
				
			},
			//分享
			share(){
				//this.$refs.share.toggleMask();	
				/* alert("share") */
				this.$refs.popupShare.open()
			},
			/**
			 * popup 状态发生变化触发
			 * @param {Object} e
			 */
			change(e) {
				console.log('popup ' + e.type + ' 状态', e.show)
			},
			/**
			 * 选择内容
			 */
			select(e, done) {
				uni.showToast({
					title: `您选择了第${e.index+1}项：${e.item.text}`,
					icon: 'none'
				})
				done()
			},
			//收藏
			toFavorite(){
				this.favorite = !this.favorite;
			},
			buy(){
				uni.navigateTo({
					url: `/pages/order/createOrder`
				})
			},
			stopPrevent(){},
			trigger(e) {
				if(e.index === 2){
					uni.showActionSheet({
						title:'',
						itemList: ['切换菜单', '左下角显示', '右下角显示', '左上角显示','右上角显示'],
						popover: {
							top: 0,
							left: 0
						},
						success: (e) => {
							console.log(e.tapIndex);
							/* uni.showToast({
								title:"点击了第" + e.tapIndex + "个选项",
								icon:"none"
							}) */
							if(e.tapIndex === 0){
								this.switchBtn(0);
							}else if(e.tapIndex === 1){
								this.switchBtn('left', 'bottom');
							}else if(e.tapIndex === 2){
								this.switchBtn('right', 'bottom')
							}else if(e.tapIndex === 3){
								this.switchBtn('left', 'top')
							}else if(e.tapIndex === 4){
								this.switchBtn('right', 'top')
							}
						}
					})
				}
			},
			fabClick() {
				uni.showToast({
					title: '点击了悬浮按钮',
					icon: 'none'
				})
			},
			switchBtn(hor, ver) {
				if (hor === 0) {
					this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal'
					this.directionStr = this.direction === 'horizontal' ? '垂直' : '水平'
				} else {
					this.horizontal = hor
					this.vertical = ver
				}
				this.$forceUpdate()
			}
		},
		/* onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		}, */
		onNavigationBarButtonTap(e) {
			console.log(JSON.stringify(e))
			if(e.index === 0){
				//alert("123")
				this.$refs.popupShare.open();
			}
		}

	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
		padding-bottom: 160upx;
	}
	.icon-you{
		font-size: $font-base + 2upx;
		color: #888;
	}
	.carousel {
		height: 722upx;
		position:relative;
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	
	/* 标题简介 */
	.introduce-section{
		background: #fff;
		padding: 20upx 30upx;
		
		.title{
			font-size: 32upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}
		.hot{
			position: absolute;
			right: 30upx;
			background: $uni-color-error;
			color: #fff;
			font-size: 6rpx;
			border-radius: 8upx;
			line-height: 1;
			transform: translateY(-4upx); 
		}
		.price-box{
			display:flex;
			align-items:baseline;
			height: 64upx;
			padding: 10upx 0;
			font-size: 26upx;
			color:$font-color-hot;
		}
		.price{
			font-size: $font-lg + 2upx;
		}
		.m-price{
			margin:0 12upx;
			color: $font-color-light;
			text-decoration: line-through;
		}
		.coupon-tip{
			align-items: center;
			padding: 4upx 10upx;
			background: $font-color-discount;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx); 
		}
		.bot-row{
			display:flex;
			align-items:center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;
			text{
				flex: 1;
			}
		}
	}
	/* 分享 */
	.share-section{
		display:flex;
		align-items:center;
		color: $font-color-base;
		background: linear-gradient(to left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;
		.share-icon{
			display:flex;
			align-items:center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $font-color-share;
			border-radius: 4upx;
			position:relative;
			overflow: hidden;
			font-size: 22upx;
			color: $font-color-share;
			&:after{
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position:absolute;
				background: $font-color-share;
			}
		}
		.icon-xingxing{
			position:relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}
		.tit{
			font-size: $font-base;
			margin-left:10upx;
		}
		.icon-bangzhu1{
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}
		.share-btn{
			flex: 1;
			text-align:right;
			font-size: $font-sm;
			color: $font-color-share;
		}
		.icon-you{
			font-size: $font-sm;
			margin-left: 4upx;
			color: $font-color-share;
		}
	}
	
	.c-list{
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;
		.c-row{
			display:flex;
			align-items:center;
			padding: 20upx 30upx;
			position:relative;
		}
		.tit{
			width: 140upx;
		}
		.con{
			flex: 1;
			color: $font-color-dark;
			.selected-text{
				margin-right: 10upx;
			}
		}
		.bz-list{
			height: 40upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			text{
				display: inline-block;
				margin-right: 30upx;
			}
		}
		.con-list{
			flex: 1;
			display:flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}
		.red{
			color: $font-color-hot;
		}
	}
	
	/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		/* padding: 20upx 30upx; */
		padding: 20upx 0upx;
		background: #fff;
		margin-top: 16upx;
		.e-header{
			padding: 20upx 30upx;
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.tit{
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}
			.tip{
				flex: 1;
				text-align: right;
			}
			.icon-you{
				margin-left: 10upx;
			}
		}
	}
	.eva-box{
		overflow-x: hidden;
			
	}
	.qiun-padding{padding:2%; width:96%;}
	.qiun-wrap{display:flex; flex-wrap:wrap;}
	.qiun-rows{display:flex; flex-direction:row !important;}
	.qiun-columns{display:flex; flex-direction:column !important;}
	.qiun-common-mt{margin-top:10upx;}
	.qiun-bg-white{background:#FFFFFF;}
	.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
	.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
	.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
	.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
	/*  详情 */
	.detail-desc{
		background: #fff;
		margin-top: 16upx;
		.d-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;
				
			text{
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}
			&:after{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc; 
			}
		}
	}
	
	/* 规格选择弹窗 */
	.attr-content{
		padding: 10upx 30upx;
		.a-t{
			display: flex;
			image{
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;
				
				.price{
					font-size: $font-lg;
					color: $font-color-hot;
					margin-bottom: 10upx;
				}
				.selected-text{
					margin-right: 10upx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}
		.item-list{
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}
			.selected{
				background: #fbebee;
				color: $font-color-hot;
			}
		}
	}
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;
			.btn{
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: $font-color-btn-red;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	
	/* 底部操作菜单 */
	.page-bottom{
		position:fixed;
		left: 30upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 16upx;
		
		.p-b-btn{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;
			.yticon{
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}
			&.active, &.active .yticon{
				color: $font-color-hot;
			}
			.icon-fenxiang2{
				font-size: 42upx;
				transform: translateY(-2upx);
			}
			.icon-shoucang{
				font-size: 46upx;
			}
		}
		.action-btn-group{
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
			margin-left: 20upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255,255,255,.5);
			}
			.action-btn{
				display:flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base ;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
/* 	movable-area {
		position: fixed;
		left: 0;
		right: 0;
		top: var(--window-top);
		height: 100%;
		width: 100%;
		background-color: #D8D8D8;
		overflow: hidden;
		movable-view {
			height: 100rpx;
			width: 100rpx;
			border: #ff0000 solid 1px;
		}
	} */

	
</style>
<!-- 加入当前订单，没有购物车一说 
	将地址改为预约时间
-->