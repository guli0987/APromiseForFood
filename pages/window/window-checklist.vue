<template>
	<view>
		<view class="position-test">
			<view class="uni-padding-wrap uni-common-mt">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor" @clickItem="onClickItem" />
			</view>
		</view>
		<view class="content">
			<view class="content-cuisine" v-if="current === 0">
				<window-list ref="windowList"></window-list>
			</view>
			<view class="content-other" v-if="current === 1">
				<text class="content-text">
					选项卡2的内容
				</text>
			</view>
			<view class="" v-if="current === 2">
				<window-comment ref="windowComment"></window-comment>
			</view>
		</view>
		<!-- <uni-section title="Style" type="line"></uni-section>
		<view class="example-body">
			<radio-group class="uni-list " @change="styleChange">
				<view v-for="(item, index) in styles" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<text class="uni-list-item__content-title">{{ item.text }}</text>
						</view>
						<view class="uni-list-item__extra">
							<radio :value="item.value" :checked="item.checked" />
						</view>
					</view>
				</view>
			</radio-group>
		</view>
		<uni-section title="Color" type="line"></uni-section>
		<view class="example-body">
			<radio-group class="uni-list" @change="colorChange">
				<view v-for="(item, index) in colors" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<view :style="{ backgroundColor: item }" class="color-tag" />
						</view>
						<view class="uni-list-item__extra">
							<radio :value="item" :checked="index === colorIndex" />
						</view>
					</view>
				</view>
			</radio-group>
		</view> -->
		
	</view>
</template>

<script>
	import windowList from './detail/window-list.vue';
	import windowComment from './detail/window-comment.vue';
	export default {
		components: {
			windowList,
			windowComment
		},
		data() {
			return {
				items: ['菜系', '推荐', '评价'],//菜系可设置推荐
				styles: [{
						value: 'button',
						text: '按钮',
						checked: true
					},
					{
						value: 'text',
						text: '文字'
					}
				],
				colors: ['#007aff', '#4cd964', '#dd524d'],
				current: 0,
				colorIndex: 0,
				activeColor: '#4cd964',
				styleType: 'button',
				
				data: [],
				loadMoreText: "加载中...",
				showLoadMore: false,
			}
		},
		onLoad() {
			this.initData();
		},
		methods: {
			initData(){
				setTimeout(() => {
					this.max = 0;
					this.data = [];
					let data = [];
					this.max += 20;
					for (var i = this.max - 19; i < this.max + 1; i++) {
						data.push(i)
					}
					this.data = this.data.concat(data);
					uni.stopPullDownRefresh();
				}, 300);
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			styleChange(e) {
				if (this.styleType !== e.detail.value) {
					this.styleType = e.detail.value
				}
			},
			colorChange(e) {
				if (this.styleType !== e.detail.value) {
					console.log(e.detail.value);
					this.activeColor = e.detail.value
				}
			}
		}
	}
</script>

<style lang='scss'>
	@charset "UTF-8";

	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url("~@/static/uni.ttf") format("truetype");
	}

	/* #endif */
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example {
		padding: 0 15px 15px;
	}

	.example-info {
		padding: 15px;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 15px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}

	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0;
	}
	
	.uni-common-mt {
		margin-top: 30px;
	}
	/* .uni-common-mt {
		margin-top: 30px;
	}

	.uni-padding-wrap {
		padding: 0px 30px;
	} */
	.position-test{
		position: sticky;
		/* position: fixed; */
		top: 0px;
		left: 0;
		right: 0;
		z-index: 9999;
	}
	.content {
		/* margin-top: 10px; */
		
		width: 100%;
		height: 100%;
		
		
		&-cuisine {
			margin-top: 20rpx;
			display: flex;
			flex-direction: column;
		}
		&-other {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			justify-content: center;
			align-items: center;
			height: 150px;
			text-align: center;
			.content-text {
				font-size: 18px;
				color: #333;
			}
		}
	}

	


	

	.color-tag {
		width: 25px;
		height: 25px;
	}

	.uni-list {
		flex: 1;
	}

	.uni-list-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		background-color: #FFFFFF;
	}

	.uni-list-item__container {
		padding: 12px 15px;
		width: 100%;
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #e5e5e5;
	}

	.uni-list-item__content-title {
		font-size: 16px;
	}
	
</style>