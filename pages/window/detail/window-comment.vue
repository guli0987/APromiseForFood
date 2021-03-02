<template>
	<view>
		<view class="window-comment">
			<view class="window-comment-text" v-for="(num,index) in data" :key="index">
				<view class="comment-avatar">
					<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"></image>
				</view>
				<view class="comment-mine">
					<view class="comment-nickname">昵称{{num}}yy</view>
					
					<view class="comment-time">2021-02-24</view>
				</view>
				<view class="comment-content">
					<view class="comment-rate"><uni-rate :readonly="true" :value="2" /></view>
					<view class="comment-text">真是太好吃了，我再也不过来了</view>
				</view>
			</view>
			<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: '下拉刷新 + 加载更多',
				data: [1,2,3,4,5,6,7,8,9,10],
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 0
			}
		},
		onLoad() {
			this.initData();
		},
		onUnload() {
			this.max = 0,
			this.data = [],
			this.loadMoreText = "加载更多",
			this.showLoadMore = false;
		},
		onReachBottom() {
			console.log("onReachBottom");
			if (this.max > 40) {
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			this.showLoadMore = true;
			setTimeout(() => {
				this.setListData();
			}, 300);
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
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
			setListData() {
				let data = [];
				this.max += 10;
				for (var i = this.max - 9; i < this.max + 1; i++) {
					data.push(i)
				}
				this.data = this.data.concat(data);
			}
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-PLUS-NVUE */
	/* page{
		background-color: #efeff4;
	} */
	.window-comment{
		background-color: #efeff4;
	}
	.window-comment-text {
		margin: 2rpx 0;
		width:100%;
		background-color: #fff;
		height: 180rpx;
		/* line-height: 120rpx;
		text-align: center;
		color: #555;
		border-radius: 8rpx; */
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		.comment-avatar{
			flex: 1;
			image {
				flex-shrink: 0;
				display: block;
				width: 120rpx;
				height: 120rpx;
				border-radius: 100rpx;
				margin: auto;
			}
		}
		.comment-mine{
			flex: 3;
			margin-left: 10rpx;
			/* display: flex;
			flex-direction: column; */
			.comment-nickname{
			}
			.comment-time{
				font-family: 'Times New Roman', Times, serif;
				font-size: 12rpx;
				margin-top: 16rpx;
			}
		}
		.comment-content{
			flex: 5;
			display: flex;
			flex-direction: column;
			.comment-rate{
				align-self: flex-end;
				margin-right: 10rpx;
			}
			.comment-text{
			}
		}
	}
	/* #endif */
</style>
