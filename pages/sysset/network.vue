<template>
	<view>
		<page-head :title="networkType"></page-head>
		<view class="uni-common-mt">
			<view class="uni-list">
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">设备型号</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.model"></input>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">客户端平台</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.platform"></input>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">操作系统版本</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.system"></input>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">语言</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.language"></input>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">版本</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.version"></input>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">屏幕宽度</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.screenWidth"></input>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">屏幕高度</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.screenHeight"></input>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">可使用窗口高度</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.windowHeight"></input>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">可使用窗口的顶部位置</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.windowTop"></input>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">可使用窗口的底部位置</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.windowBottom"></input>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">状态栏的高度</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.statusBarHeight"></input>
					</view>
				</view>
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">DPI</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.pixelRatio"></input>
					</view>
				</view>
				<!-- #ifdef MP -->
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-pd">
						<view class="uni-label" style="width:180px;">基础库版本</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" :disabled="true" placeholder="获取中.." :value="systemInfo.SDKVersion"></input>
					</view>
				</view>
				<!-- #endif -->
			</view>
			<view class="uni-padding-wrap" v-if="false">
				<view class="uni-btn-v">
					<button type="primary" @tap="getSystemInfo">获取设备系统信息</button>
				</view>
			</view>
			<view class="uni-padding-wrap" v-if="false">
				<view class="uni-btn-v">
					<button type="primary" @tap="getNetworkType">获取设备系统信息</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'getSystemInfo',
				systemInfo: {},
				networkType: '加载中..',
				loadText:'获取中..'
			}
		},
		onUnload:function(){
			this.networkType = '';
			this.systemInfo = {};
		},
		onReady(){
			this.getNetworkType();
			this.getSystemInfo();
		},
		methods: {
			getNetworkType: function () {
				uni.getNetworkType({
					success: (res) => {
						console.log(res)
						this.networkType = res.subtype || res.networkType
					},
			        fail: () => {
			            uni.showModal({
			            	content:'加载失败！',
			                showCancel:false
			            })
			        }
				})
			},
			getSystemInfo: function () {
				uni.getSystemInfo({
					success: (res) => {
						this.systemInfo = res
					},
					fail: () => {
						uni.showModal({
							content:'获取失败！',
						    showCancel:false
						})
					}
				})
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
		/* #endif*/
</style>
