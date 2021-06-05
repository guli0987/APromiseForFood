<template>
	<view class="container">  
		<view
			class="cover-container"
			:style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-shouye"></text>
					<text>全部订单</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=1')"  hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-daifukuan"></text>
					<text>待付款</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-yishouhuo"></text>
					<text>待收货</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-shouhoutuikuan"></text>
					<text>退款/售后</text>
				</view>
			</view>
		</view>
		<view class="list" v-if="hasLogin">
			<!-- 刷新页面后的顶部提示框 -->
			<!-- 当前弹出内容没有实际逻辑 ，可根据当前业务修改弹出提示 -->
			<view class="tips" :class="{ 'tips-ani': tipShow }">订单刷新成功</view>
			<unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" :options="formData" :collection="collection"
			 :field="field" @load="load">
				<!-- 基于 uni-list 的页面布局 -->
				<uni-list>
					<!-- to 属性携带参数跳转详情页面，当前只为参考 -->
					<uni-list-item :border="true" class="uni-list-item--waterfall" title="自定义商品列表" v-for="item in data" :key="item._id" :to="'/pages/detail/detail?id='+item._id+'&title='+item.name">
						<!-- 通过header插槽定义列表左侧图片 -->
						<template v-slot:header>
							<view class="uni-thumb shop-picture">
								<image :src="item.goods_thumb" mode="aspectFill"></image>
							</view>
						</template>
						<!-- 通过body插槽定义商品布局 -->
						<view slot="body" class="shop">
							<view>
								<view class="uni-title">
									<text class="uni-ellipsis-2">{{ item.name }}</text>
								</view>
								<view>
									<text class="uni-tag hot-tag">{{ item.goods_tip }}</text>
									<text v-for="tag in item.tag" :key="tag" class="uni-tag">{{ tag }}</text>
								</view>
							</view>
							<view>
								<view class="shop-price">
									<text>¥</text>
									<text class="shop-price-text">{{ item.goods_price }}</text>
									<text>.00</text>
								</view>
								<view class="uni-note">{{ item.comment_count }}条评论 月销量 {{ item.month_sell_count }}</view>
								<view class="uni-note ellipsis">
									<text class="uni-ellipsis-1">{{ item.shop_name }}</text>
									<text class="uni-link">进店 ></text>
								</view>
							</view>
						</view>
					</uni-list-item>
				</uni-list>
				<!-- 通过 loadMore 组件实现上拉加载效果，如需自定义显示内容，可参考：https://ext.dcloud.net.cn/plugin?id=29 -->
				<uni-load-more v-if="loading || options.status === 'noMore' " :status="options.status" />
			</unicloud-db>
		</view>
		<view v-else>
			<view class="order-haslogin-no">
				<text>您还没有登录哦</text>
				<button type="primary" @click="onOrderBtnClick">先去登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
	    mapState
	} from 'vuex';
	import listCell from '@/components/mix-list-cell/mix-list-cell.vue';
	let startY = 0, moveY = 0, pageAtTop = true;
	export default {
		components: {
			listCell
		},
		computed: {
			...mapState({
				forceLogin:state=>state.user.forceLogin,
				hasLogin:state=>state.user.hasLogin,
				userInfo:state=>state.user.userInfo
			}),
		},
		data(){
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				orderList:[],
				//
				// 数据表名
				collection: 'opendb-mall-goods',
				// 查询字段，多个字段用 , 分割
				field: 'goods_thumb,name,goods_tip,tag,goods_price,comment_count,month_sell_count,shop_name',
				formData: {
					status: 'loading', // 加载状态
				},
				tipShow: false // 是否显示顶部提示框
			}
		},
		onLoad() {},
		methods: {
			onOrderBtnClick(){
				this.navTo('/pages/public/login');
				/* uni.switchTab({
					url: '/pages/tabbar/index'
				}) */
			},
			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
		
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			},
			/**
			 * 下拉刷新回调函数
			 */
			onPullDownRefresh() {
				this.tipShow = true
				this.formData.status = 'more'
				this.$refs.udb.loadData({
					clear: true
				}, () => {
					this.tipShow = false
					uni.stopPullDownRefresh()
				})
			},
			/**
			 * 上拉加载回调函数
			 */
			onReachBottom() {
				this.$refs.udb.loadMore()
			},
			load(data, ended) {
				if (ended) {
					this.formData.status = 'noMore'
				}
			}
		}  
	}
</script>

<style lang='scss'>
	.order-haslogin-no{
		display: flex;
		flex-direction:column;
		margin-top: 160rpx;
		text{
			text-align: center;
			margin-bottom: 30rpx;
		}
	}
	%flex-center {
	 display:flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	}
	%section {
	  display:flex;
	  justify-content: space-around;
	  align-content: center;
	  background: #fff;
	  border-radius: 10upx;
	}
	.cover-container{
		background: $page-color-base;
		margin-top: 0upx;
		padding: 0 30upx;
		position:relative;
		background: #f5f5f5;
		padding-bottom: 20upx;
		padding-top: 20upx;
		.arc{
			position:absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}
	.order-section{
		@extend %section;
		padding: 28upx 0;
		margin-top: 20upx;
		.order-item{
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}
		.yticon{
			font-size: 48upx;
			margin-bottom: 18upx;
			color: #fa436a;
		}
		.icon-shouhoutuikuan{
			font-size:44upx;
		}
	}
	
	/* 新加 */
	@import '@/common/css/uni-ui.scss';
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}
	
	.tips {
		color: #67c23a;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		background-color: #f0f9eb;
		height: 0;
		opacity: 0;
		transform: translateY(-100%);
		transition: all 0.3s;
	}
	
	.tips-ani {
		transform: translateY(0);
		height: 40px;
		opacity: 1;
	}
	
	.shop {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.shop-picture {
		width: 110px;
		height: 110px;
	}
	
	.shop-picture-column {
		width: 100%;
		height: 170px;
		margin-bottom: 10px;
	}
	
	.shop-price {
		margin-top: 5px;
		font-size: 12px;
		color: #ff5a5f;
	}
	
	.shop-price-text {
		font-size: 16px;
	}
	
	.hot-tag {
		background: #ff5a5f;
		border: none;
		color: #fff;
	}
	
	.button-box {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		background: #007AFF;
		color: #fff;
	}
	
	.uni-link {
		flex-shrink: 0;
	}
	
	.ellipsis {
		display: flex;
		overflow: hidden;
	}
	
	.uni-ellipsis-1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.uni-ellipsis-2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	
	// 默认加入 scoped ，所以外面加一层提升权重
	.list {
		.uni-list--waterfall {
	
			/* #ifndef H5 || APP-VUE */
			// 小程序 编译后会多一层标签，而其他平台没有，所以需要特殊处理一下
			/deep/ .uni-list {
				/* #endif */
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				padding: 5px;
				box-sizing: border-box;
	
				/* #ifdef H5 || APP-VUE */
				// h5 和 app-vue 使用深度选择器，因为默认使用了 scoped ，所以样式会无法穿透
				/deep/
				/* #endif */
				.uni-list-item--waterfall {
					width: 50%;
					box-sizing: border-box;
	
					.uni-list-item__container {
						padding: 5px;
						flex-direction: column;
					}
				}
	
				/* #ifndef H5 || APP-VUE */
			}
	
			/* #endif */
		}
	}
</style>
