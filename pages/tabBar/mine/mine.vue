<template>
	<view class="container">
		<view class="user-section">
			<image class="bg" src="/static/user-bg.jpg"></image>
			<view class="user-info-box">
				<view class="portrait-box">
					<image class="portrait" :src="userInfo.avatar || '/static/missing-face.png'"></image>
				</view>
				<view class="info-box">
					<text class="username">{{userInfo.nickname || '未登录'}}</text>
				</view>
			</view>
			<view class="vip-card-box">
				<image class="card-bg" src="/static/vip-card-bg.png" mode=""></image>
				<view class="b-btn">
					立即开通
				</view>
				<view class="tit">
					<text class="yticon icon-iLinkapp-"></text>
					ForFood会员
				</view>
				<text class="e-m">ForFood Union</text>
				<text class="e-b">开通会员无敌券 好用又实惠</text>
			</view>
		</view>
		<!-- 分隔 -->
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
			<image class="arc" src="/static/arc.png"></image>
			
			<view class="tj-sction">
				<view class="tj-item">
					<text class="num">{{userInfo.money || 0}}</text>
					<text>余额</text>
				</view>
				<view class="tj-item">
					<text class="num">{{userInfo.coupon || 0}}</text>
					<text>优惠券</text>
				</view>
				<view class="tj-item">
					<text class="num">{{userInfo.food_level || '萌新'}}({{userInfo.food_point || 0}})</text>
					<text>评级(积分)</text>
				</view>
			</view>
			<!-- 浏览历史 -->
			<view class="history-section icon">
				<view class="sec-header">
					<text class="yticon icon-lishijilu"></text>
					<text>浏览历史</text>
				</view>
				<view v-if="userInfo.history">
					<scroll-view scroll-x class="h-list" v-for="his in (userInfo.history || '')" >
							<image @click="navTo('/pages/product/product')" :src="his.url" mode="aspectFill"></image>	
					</scroll-view>
				</view>
				<view v-else class="h-list h-list-text">还没有浏览哦</view>
				<list-cell icon="icon-iconfontweixin" iconColor="#e07472" title="我的钱包" tips="您还未开通会员"></list-cell>
				<list-cell icon="icon-dizhi" iconColor="#5fcda2" title="地址管理" @eventClick="navTo('/pages/address/address')"></list-cell>
				<list-cell icon="icon-share" iconColor="#9789f7" title="有奖推广" tips="邀请好友赢10万大礼" @eventClick="navTo('/pages/mine/share')"></list-cell>
				<list-cell icon="icon-pinglun-copy" iconColor="#ee883b" title="晒单" tips="晒单抢红包" @eventClick="navTo('/pages/mine/show')"></list-cell>
				<list-cell icon="icon-shoucang_xuanzhongzhuangtai" iconColor="#54b4ef" title="收藏夹" @eventClick="navTo('/pages/mine/favorites')"></list-cell>
				<list-cell icon="icon-shezhi1" iconColor="#e07472" title="设置" border="" @eventClick="navTo('/pages/set/set')"></list-cell>
				<list-cell icon="icon-about" iconColor="#bababa" title="关于" tips="版本1.0.0" border="" @eventClick="navTo('/pages/mine/about')"></list-cell>
				<uni-list v-if="hasLogin">
					<uni-list-item class="mine-text-direction" title="退出登录" clickable @click="loggout"/>
				</uni-list>
			</view>
		</view>
	</view>
</template>
<script>
	import listCell from '@/components/mix-list-cell/mix-list-cell.vue';
	//引入mapState,mapState 为辅助函数 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。
	import {
	    mapState,mapGetters
	} from 'vuex';  
	let startY = 0, moveY = 0, pageAtTop = true;
	export default{
		components: {
			listCell
		},
		computed: {//计算属性
		//当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
			//...mapState(['forceLogin','hasLogin','userName','userInfo']),//对全局变量进行监控，//映射 this.username 为 store.state.username
			...mapState({
				forceLogin:state=>state.user.forceLogin,
				hasLogin:state=>state.user.hasLogin,
				userName:state=>state.user.userName,
				userInfo:state=>state.user.userInfo
			}),
			...mapGetters({
				/* getUserInformation:'getUserAllInfo' */
			})
		},
		data(){
			return{
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
			}
		},
		onLoad(){
				/* alert("show:"+this.hasLogin+"————"+this.forceLogin); */
				if(!this.hasLogin){
					uni.showModal({
						title:"登录提醒",
						content:"您还未登录，需要登录后才能正常使用",
						showCancel:!this.forceLogin,//是否展示取消按钮
						success: (res) => {
							if(res.confirm){
								if(this.forceLogin){
									uni.navigateTo({
										url:"/pages/public/login"
									});
								}else{
									uni.navigateTo({
										url:"/pages/public/login-reg"
									});
								}
							}
						}
					});
				}
		},
		methods:{
			loggout(e) {
				console.log('执行click事件', e.data)
				uni.showToast({
					title: '退出成功'
				});
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
			}
		},
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if(index === 0){
				// #ifdef APP-PLUS
				/* const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				}); */
				// #endif
				/* uni.navigateTo({
					url: '/pages/notice/notice'
				}) */
			}
		}
	}
</script>
<style lang='scss'>
	.mine-text-direction{
		text-align: center;
		/* font-size:100upx; 无效*/
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

	.user-section{
		height: 520upx;
		padding: 100upx 30upx 0;
		position:relative;
		.bg{
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
	}
	.user-info-box{
		height: 180upx;
		display:flex;
		align-items:center;
		position:relative;
		z-index: 1;
		.portrait{
			width: 130upx;
			height: 130upx;
			border:5upx solid #fff;
			border-radius: 50%;
		}
		.username{
			font-size: $font-lg + 6upx;
			color: $font-color-dark;
			margin-left: 20upx;
		}
	}

	.vip-card-box{
		display:flex;
		flex-direction: column;
		color: #f7d680;
		height: 240upx;
		background: linear-gradient(left, rgba(0,0,0,.7), rgba(0,0,0,.8));
		border-radius: 16upx 16upx 0 0;
		overflow: hidden;
		position: relative;
		padding: 20upx 24upx;
		.card-bg{
			position:absolute;
			top: 20upx;
			right: 0;
			width: 380upx;
			height: 260upx;
		}
		.b-btn{
			position: absolute;
			right: 20upx;
			top: 26upx;
			width: 132upx;
			height: 40upx;
			text-align: center;
			line-height: 40upx;
			font-size: 22upx;
			color: #36343c;
			border-radius: 20px;
			background: linear-gradient(left, #f9e6af, #ffd465);
			z-index: 1;
		}
		.tit{
			font-size: $font-base+2upx;
			color: #f7d680;
			margin-bottom: 28upx;
			.yticon{
				color: #f6e5a3;
				margin-right: 16upx;
			}
		}
		.e-b{
			font-size: $font-sm;
			color: #d8cba9;
			margin-top: 10upx;
		}
	}
	.cover-container{
		background: $page-color-base;
		margin-top: -150upx;
		padding: 0 30upx;
		position:relative;
		background: #f5f5f5;
		padding-bottom: 20upx;
		.arc{
			position:absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}
	.tj-sction{
		@extend %section;
		.tj-item{
			@extend %flex-center;
			flex-direction: column;
			height: 140upx;
			font-size: $font-sm;
			color: #75787d;
		}
		.num{
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 8upx;
		}
	}
	.history-section{
		padding: 30upx 0 0;
		margin-top: 20upx;
		background: #fff;
		border-radius:10upx;
		.sec-header{
			display:flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
			margin-left: 30upx;
			.yticon{
				font-size: 44upx;
				color: #5eba8f;
				margin-right: 16upx;
				line-height: 40upx;
			}
		}
		.h-list{
			white-space: nowrap;
			padding: 30upx 30upx 0;
			image{
				display:inline-block;
				width: 160upx;
				height: 160upx;
				margin-right: 20upx;
				border-radius: 10upx;
			}
		}
		.h-list-text{
			text-align: center;
			color: #bfbfc8;
			font-size: 10upx;
		}
	}
	
</style>