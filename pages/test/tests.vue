<template>
	<view class="qiun-columns">

		<!-- <view class="qiun-padding">
			<view class="qiun-tip" @tap="changeData()">更新柱状图数据</view>
		</view> -->
		<!-- <view class="qiun-title-bar" style="background-color: #E5FDC3;">
			<view class="qiun-title-dot-light">柱状图</view>
		</view> -->
		<view class="qiun-charts" style="background-color: #E5FDC3;">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" style="background-color: #E5FDC3;" :width="cWidth*pixelRatio"
			 :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchIt($event,'canvasColumn')"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" style="background-color: #E5FDC3;" @touchstart="touchIt($event,'canvasColumn')"></canvas>
			<!--#endif-->
		</view>
		
	</view>
</template>
<script>
	import chartProduct from '../chart/product-chart.js'
	export default{
		components: {
			
		},
		mixins: [chartProduct],
		data() {
			return {
				};
			},
		methods:{
			
		}
			
	}
</script>
<style lang="scss">
	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}
	/* 通用样式 */
	.qiun-charts {
		/* width: 750rpx; */
		/* width:100%; */
		height: 500rpx;
		background-color: #FFFFFF;
	}
	
	.charts {
		/* width: 750rpx; */
		width:100%;
		height: 500rpx;
		background-color: #FFFFFF;
	}
	
	
	
</style>