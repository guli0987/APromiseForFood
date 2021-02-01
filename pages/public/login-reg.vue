<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view><!-- 右边“验证码登录选项” -->
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				欢迎回来！
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input 
						type="number" 
						:value="mobile" 
						placeholder="请输入手机号码"
						maxlength="11"
						data-key="mobile"
						@input="inputChange"
					/>
				</view>
				<view class="input-item-code">
					<text class="tit">验证码</text>
					<view class="row">
						<input
							v-model="code"
							type="number"
							maxlength="6"
							placeholder="请输入手机验证码"
							placeholder-style="color: #909399"
						/>
						<mix-code :mobile="mobile" templateCode="SMS_194050994"></mix-code>
					</view>
				</view>
			</view>
			<button class="confirm-btn" @click="toLogin" :loading="logining" :disabled="logining">{{loginText}}</button>
			<view class="login-other">
				已有账号?<br>
				<text @click="toLoginOther">换种方式登录</text>
			</view>
		</view>
		<view class="agreement center">
			<text class="mix-icon icon-xuanzhong" :class="{active: agreement}" @click="checkAgreement"></text>
			<text @click="checkAgreement">请认真阅读并同意</text>
			<text class="tit" @click="navToAgreementDetail(1)">《用户服务协议》</text>
			<text class="tit" @click="navToAgreementDetail(2)">《隐私权政策》</text>
		</view>
	</view>
</template>

<script>
	import {checkStr} from '@/common/js/util'
	import {  
        mapMutations  
    } from 'vuex';
	
	export default{
		data(){
			return {
				mobile: '',
				/* password: '', */
				logining: false,
				loginText:"注册或登录",
				code: '',
				agreement: true
			}
		},
		onLoad(){
			
		},
		methods: {
			...mapMutations(['login']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack(){
				uni.navigateBack({
					delta:2
				});
				//alert("back")
			},
			toRegist(){
				this.$api.msg('去注册');
			},
			toLoginOther(){
				uni.navigateTo({
					url:"login"
				});
			},
			async toLogin(){
				this.logining = true;
				this.loginText = "Loading...";
				//数据验证模块
				const {mobile, code} = this;
				if(!checkStr(mobile, 'mobile')){
					this.$util.msg('请输入正确的手机号码');
					this.logining = false;
					this.loginText = "注册或登录";
					return;
				}
				if(!checkStr(code, 'mobileCode')){
					this.$util.msg('验证码错误');
					this.logining = false;
					this.loginText = "注册或登录";
					return;
				}
				const result = await this.$request('user', 'login', {mobile,code});
				if(result.status === 1){
					this.loginSuccessCallBack(res.data);
				}else{
					this.$util.msg(res.msg);
				}
				this.logining = false;
				this.loginText = "注册或登录";
			},
			loginSuccessCallBack(data){
				this.$util.msg('登录成功');
				/* this.$store.commit('setToken', data);
				setTimeout(()=>{
					uni.navigateBack();
				}, 1000) */
			},
			//同意协议
			checkAgreement(){
				this.agreement = !this.agreement;
			},
			//打开协议
			navToAgreementDetail(type){
				this.navTo('/pages/public/article?param=' + JSON.stringify({
					module: 'article',
					operation: 'getAgreement',
					data: {
						type
					}
				}))
			}
		},

	}
</script>

<style lang='scss'>
	page{
		background: #fff;
	}
	.container{
		padding-top: 115px;
		position:relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}
	.wrapper{
		position:relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}
	.back-btn{
		position:absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: $font-color-dark;
	}
	.left-top-sign{
		font-size: 120upx;
		color: $page-color-base;
		position:relative;
		left: -16upx;
	}
	.right-top-sign{
		position:absolute;
		top: 80upx;
		right: -30upx;
		z-index: 95;
		&:before, &:after{
			display:block;
			content:"";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}
		&:before{
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}
		&:after{
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}
	.left-bottom-sign{
		position:absolute;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}
	.welcome{
		position:relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0,0,0,.3);
	}
	.input-content{
		padding: 0 60upx;
	}
	.input-item{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: center;
		padding: 0 30upx;
		background:$page-color-light;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;
		&:last-child{
			margin-bottom: 0;
		}
		.tit{
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}
		input{
			height: 60upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}	
	}
	/* 验证码登录 */
	.input-item-code{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: center;
		padding: 0 30rpx;
		background: #f8f6fc;
		height: 120rpx;
		border-radius: 4px;
		margin-bottom: 50rpx;
		
		&:last-child{
			margin-bottom: 0;
		}
		.row{
			width: 100%;
		}
		.tit{
			height: 50rpx;
			line-height: 56rpx;
			font-size: 26rpx;
			color: #606266;
		}
		input{
			flex: 1;
			height: 60rpx;
			font-size: 30rpx;
			color: #303133;
			width: 100%;
			margin-bottom: -48rpx;/* 勉强解决验证码位置错误的问题 */
		}	
	}

	.confirm-btn{
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		background: $uni-color-primary;
		color: #fff;
		font-size: $font-lg;
		&:after{
			border-radius: 100px;
		}
	}
	/* 换种方式登录  手机验证码*/
	/* .login-other{
		font-size: $font-sm+2upx;
		color: $font-color-spec;
		text-align: center;
		margin-top: 40upx;
	} */
	.login-other{
		margin-top: 50upx;
		/* position:absolute; */
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;
		text{
			color: $font-color-spec;
			margin-left: 10upx;
		}
	}
	/* 协议 */
	.center{
		text-align: center;
	}
	.agreement{
		position: absolute;
		left: 0;
		bottom: 6vh;
		z-index: 1;
		width: 750rpx;
		height: 90rpx;
		font-size: 24rpx;
		color: #999;	
		.mix-icon{
			font-size: 32rpx;
			color: #ccc;
			margin-right: 8rpx;
			margin-top: 1px;
			&.active{
				color: $base-color;
			}
		}
		.tit{
			color: #40a2ff;
		}
	}
</style>
