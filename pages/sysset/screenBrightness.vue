<template>
	<view>
		<page-head :title="'当前屏幕亮度为:'+currentScreenBrightShow"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">屏幕亮度设置</view>
			<view>
				<slider :value="currentScreenBright" @change="sliderChange" step="0.1" min="0" max="1" activeColor="#ffffff" backgroundColor="#000000"/><!-- show-value -->
			</view>
			<view class="uni-title">是否保持常亮</view>
			<view class="apff-screen-brightness-keep">
				<view class="apff-screen-brightness-keep-text">
					<view>仅在当前应用生效，离开应用后设置失效</view>
				</view>
				<view class="apff-screen-brightness-keep-switch">
					<switch style="transform:scale(1)" @change="onSwitchKeepScreenBrightness"/>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				currentScreenBright:0,
				currentScreenBrightShow:0,
			}
		},
		onReady(){
			this.screenBrightnessGet();
		},
		computed:{
			
		},
		methods: {
			onSwitchKeepScreenBrightness(e){
				// #ifndef  H5
				if(e.target.value){
					console.log("保持常亮");
				}else{
					console.log("取消常亮");
				}
				uni.setKeepScreenOn({
				    keepScreenOn: e.target.value
				});
				// #endif
				
			},
			screenBrightnessSet(val){
				// #ifndef  H5 || MP-TOUTIAO
				uni.setScreenBrightness({
				    value: val,
				    success: function () {
				        console.log('success');
				    }
				});
				// #endif
			},
			screenBrightnessGet(){
				// #ifndef  H5 || MP-TOUTIAO
					uni.getScreenBrightness({
					    success:(res)=> {
					        console.log('屏幕亮度值：' + res.value);
							this.currentScreenBright=res.value;
							this.currentScreenBrightShow=this.parseIntMethod(this.currentScreenBright);
							//console.log(this.parseIntMethod(res.value));
					    }
					});
				// #endif
			},
			sliderChange(e) {
				console.log('value 发生变化：' + e.detail.value)
				this.currentScreenBrightShow=this.parseIntMethod(e.detail.value);
				this.screenBrightnessSet(e.detail.value);//this.currentScreenBright
			},
			parseIntMethod(value){
				return parseInt(value*100);
			}
		}
	}
</script>
<style>
		/* #ifndef APP-PLUS-NVUE */
		/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
		@import url("@/common/css/uni-formal.css");
		.uni-input {
			height: 50rpx;
			padding: 8rpx 12rpx;/*15rpx 25rpx改为8rpx 12rpx，暂时解决input显示不全问题 */
			line-height:50rpx;
			font-size:28rpx;
			background:#FFF;
			flex: 1;
		}
		/* H5 兼容 pc 所需 */
		/* #ifdef H5 */
		@media screen and (min-width: 768px) {
			body{
				overflow-y: scroll;
			}
		}
		
		 /* 顶栏通栏样式 */
		/* .uni-top-window {
		    left: 0;
		    right: 0;
		} */
		
		uni-page-body {
			background-color: #F5F5F5 !important;
			min-height: 100% !important;
			height: auto !important;
		}
		
		.uni-top-window uni-tabbar .uni-tabbar {
			background-color: #fff !important;
		}
		
		.uni-app--showleftwindow .hideOnPc {
			display: none !important;
		}
		/* #endif */
		
		/* 以下样式用于 hello uni-app 演示所需 */
		page {
		    background-color: #efeff4;
		    height: 100%;
		    font-size: 28rpx;
		    line-height: 1.8;
		}
		.fix-pc-padding {
			padding: 0 50px;
		}
		.uni-header-logo {
		    padding: 30rpx;
		    flex-direction: column;
		    justify-content: center;
		    align-items: center;
		    margin-top: 10rpx;
		}
		
		.uni-header-image {
		    width: 100px;
		    height: 100px;
		}
		
		.uni-hello-text {
		    color: #7A7E83;
		}
		
		.uni-hello-addfile {
		    text-align: center;
		    line-height: 300rpx;
		    background: #FFF;
		    padding: 50rpx;
		    margin-top: 10px;
		    font-size: 38rpx;
		    color: #808080;
		}
		.apff-screen-brightness-keep{
			display: flex;
			align-items: center;
		}
		.apff-screen-brightness-keep-text{
			flex: 4;
			order: 1;
			font-size: 18rpx;
			color: #cacaca;
			
		}
		.apff-screen-brightness-keep-switch{
			order: 2;
			flex: 1;
		}
		/* #endif*/
</style>
