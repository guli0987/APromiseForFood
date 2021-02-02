<template>
	<view class="mix-get-code" @click="getCode">
		<view v-if="loading" class="loading">
			<mix-icon-loading size="40rpx" color="#0083ff"></mix-icon-loading>
			<view class="icon-text">获取中..</view>
		</view>
		<text class="text" :class="{disabled: timeDown > 0}">
			{{ timeDown > 0 ? '重新获取 ' + timeDown + 's' : '获取验证码' }}
		</text>
	</view>
</template>

<script>
	/**
	 * 手机验证码
	 * @prop mobile 手机号
	 * @prop templateCode 短信模版id
	 */
	import {checkStr} from '@/common/js/util'
	export default {
		//获取手机验证码
		name: 'MixMobileCode',
		data() {
			return {
				loading: false,
				timeDown: ''
			}
		},
		props: {
			mobile: {
				type: String,
				default: ''
			},
			templateCode: {
				type: String,
				default: ''
			},
			action: {
				type: String,
				default: '用户注册' //设置支付密码
			}
		},
		methods: {
			//获取验证码
			async getCode(){
				
				if(this.timeDown > 0){
					return;
				}
				this.$util.throttle(()=>{
					const mobile = this.mobile
					//const mobile = this.mobile || this.$store.state.userInfo.username;
					if(!checkStr(mobile, 'mobile')){
						this.$util.msg('手机号码格式不正确');
						return;
					}
					this.loading = true;
					
					this.$request('userCenter', 'sendSmsCode', {
						mobile,
						type:"login",//不存在则注册
						action: this.action, //uni短信必填
						TemplateCode: this.templateCode, //阿里云必填
					}).then(response=>{
						/* this.$util.msg(response.msg);
						console.log(response.msg);
						this.loading = false;
						if(response.status === 1){
							this.countDown(60);
						} */
						if(response.success && response.result.code === 0){
							this.$util.msg("验证码请求成功");
							this.loading = false;
							this.countDown(60);
						}else{
							this.$util.msg('验证码请求失败');
							this.loading = false;
						}
					}).catch(err=>{
						this.$util.msg('验证码发送失败');
						this.loading = false;
						console.log(err);//null
					})
				}, 2000)
			},
			//倒计时
			countDown(timer){
				timer --;
				this.timeDown = timer;
				if(timer > 0){
					setTimeout(()=>{
						this.countDown(timer);
					}, 1000)
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.mix-get-code{
		flex-shrink: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 36rpx;
		
		&:before{
			content: '';
			width: 0;
			height: 40;
			border-right: 1px solid #f0f0f0;
		}
		.loading{
			padding: 40upx;
			border: #3B4144 solid 1px;
			background-color: #9e9ea1;
			opacity: 0.6;
			margin-left: 80rpx;
			margin-bottom: 60rpx;
			z-index: 1;
			.icon-text{
				margin-top: 10rpx;
				font-size: 16rpx;
				color: #4c4c4c;
			}
		}
		.text{
			line-height: 28rpx;
			font-size: 26rpx;
			color: #40a2ff;
			
			&.disabled{
				color: #ccc;
			}
		}
	}
</style>
