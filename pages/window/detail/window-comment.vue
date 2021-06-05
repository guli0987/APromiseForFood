<template>
	<view>
		<view class="window-comment">
			<view class="window-comment-text" v-for="(com,index) in data" :key="index">
				<view class="comment-avatar">
					<image :src="com.avatar"></image>
				</view>
				<view class="comment-mine">
					<view class="comment-nickname">{{com.nickname}}</view>
					
					<view class="comment-time">{{com.date}}</view>
				</view>
				<view class="comment-content">
					<view class="comment-rate"><uni-rate :readonly="true" :value="com.star" /></view>
					<view class="comment-text">{{com.comment}}</view>
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
				data: [
					{
						avatar:"https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/h1.jpeg",
						nickname:"你好",
						date:"2021-02-24",
						star:4,
						comment:"还不错"
					},
					{
						avatar:"https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/h2.jpeg",
						nickname:"Hey",
						date:"2021-02-25",
						star:3,
						comment:"一般吧，有待加强"
					},
					{
						avatar:"https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/h3.jpeg",
						nickname:"和谐社会",
						date:"2021-02-25",
						star:2,
						comment:"服务态度真差"
					},
					{
						avatar:"https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/h4.jpeg",
						nickname:"一眼望去全是水",
						date:"2021-03-02",
						star:5,
						comment:"满分，这家店特别好吃"
					},
					{
						avatar:"https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/h5.jpeg",
						nickname:"lod美好",
						date:"2021-03-03",
						star:4,
						comment:"可以可以还可以"
					},
					{
						avatar:"https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/h6.jpeg",
						nickname:"胡同学",
						date:"2021-03-10",
						star:4,
						comment:"不做评价"
					},
					{
						avatar:"https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/h7.jpeg",
						nickname:"还是算了",
						date:"2021-03-11",
						star:3,
						comment:"还行"
					},
					{
						avatar:"https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/h8.jpeg",
						nickname:"hi",
						date:"2021-03-20",
						star:4,
						comment:"可以吧"
					},
					{
						avatar:"https://public-1301701929.cos.ap-shanghai.myqcloud.com/test/h9.jpeg",
						nickname:"Fire",
						date:"2021-03-24",
						star:1,
						comment:"一头火，太差了也"
					}
				],
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
