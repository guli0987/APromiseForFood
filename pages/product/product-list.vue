<template>
	<view>
		<!-- <view v-for="(item, index) in renderList" :key="index" class="list-item row b-b"> -->
		<view class="window-body">
			<view v-for="item in productList">
				<uni-card :isShadow="true" :title="item.title" :subTitle="item.subTitle" mode="title" :thumbnail="item.icon" :extra="item.extra" note="true" @click="clickCard">
					<view>
						<view class="window-image-box">
							<image class="window-image" mode="aspectFill" :src="item.imgA" />
							<image class="window-image" mode="aspectFill" :src="item.imgB" />
							<image class="window-image" mode="aspectFill" :src="item.imgC" />
						</view>
						<view class="content-box">
							<text class="content-box-text">
								{{item.content}}
								</text>
						</view>
					</view>
					<template slot="footer">
						<view class="footer-box">
							
						</view>
					</template>
				</uni-card>
				</view>
			<!-- @click="navTo('/pages/product/detail?id=' + item._id)" -->
			</view>
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				loadType: 'add',//标记加载还是刷新数据
				productList: [{
		id:1,
		icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
		title:"窗口号1",
		subTitle:"口味",
		extra:"宣传语",
		imgA:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		imgB:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		imgC:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		content:"布告"
	}]
			}
		},
		props:{
			list: {
				type: Array,
				default:()=>{
					return []
				}
			}
		},
		watch: {
			list(val,oldValue){
				if(this.loadType === 'add'){
					alert("test")
					//this.productList = this.productList.concat(val.slice(this.productList.length));
				}else{
					this.productList = val;
				}
			}
		},
		methods: {
			clickCard() {
				uni.showToast({
					title: '点击卡片',
					icon: 'none'
				})
			}
		}
	}
</script>

<style>
	.window-image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: row;/* column为列 */
		align-items: center;
		flex-wrap:wrap;
		/* #endif */
		height: 180rpx;
		/* overflow: hidden; */
		/* padding: 10rpx 16rpx; */
		
	}
	
	.window-image {
		/* #ifndef APP-NVUE */
		width: 30%;
		height: 100%;
		/* #endif */
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 10rpx;
		
	}
</style>
