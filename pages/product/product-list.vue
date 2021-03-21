<template>
	<view>
		<view class="window-body">
			<view v-for="(item,index) in productLists" :key="index">
				<uni-card class="uni-card" :isShadow="false" :title="item.title" :subTitle="item.subTitle" mode="title" :thumbnail="item.icon" :extra="item.extra" note="true" @click="clickCard(item.id)">
					<view>
						<!-- 图片可以滑动 -->
						<view class="window-image-box">	
							<scroll-view  scroll-x="true" class="r-scroll" scroll-left="0" @scroll="scrollChange">
								<view class="window-image-scroll">
									<image 
										class="scroll-image"
										v-for="(img, key_img) in item.imgs"
										:key="key_img"
										:src="img.url" 
										mode="aspectFill"
										@click.stop="clickPreviewImg(key_img,img.url,item.imgs)"
									>
									<!-- 改为点击放大图片 -->
									</image>
								</view>
							</scroll-view>
						</view>
						<view class="content-box" v-if="false">
							<!-- <text class="content-box-text" v-for="(img, key) in item.imgs">
								url信息:{{img.url}}
								</text> -->
						</view>
					</view>
					<template slot="footer">
						<view class="footer-box">
							<view @click.stop="footerClick('喜欢')"><view class="footer-box__item"><!-- 喜欢 --><uni-icons type="heart" size="18" color=""></uni-icons></view></view>
							<view @click.stop="footerClick('评论')"><view class="footer-box__item"><!-- 评论 --><uni-icons type="chat" size="18" color=""></uni-icons></view></view>
							<view @click.stop="footerClick('分享')"><view class="footer-box__item"><!-- 分享 --><uni-icons type="redo" size="18" color=""></uni-icons></view></view>
						</view>
					</template>
				</uni-card>
			</view>
		</view>
	</view>
</template>

<script>
	/* 拓展:窗口图片可滑动 */
	export default {
		components: {},
		data() {
			return {
				previewImgList:[],
				loadType: 'add',//标记加载还是刷新数据
				productLists: [],
				testList:[{
							id:1,
							icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
							title:"新",
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
			/* list2: {
				type: Array,
				default:()=>{
					return []
				}
			} */
		},
		watch: {
			/* list(val,oldValue){//val=newVal
				if(this.loadType === 'add'){
					//alert("this.loadType === 'add'");
					//this.productLists = this.productLists.concat(val.slice(this.productLists.length));
					//this.productLists=this.productLists.concat(this.testList);
					//this.productLists=this.productLists.concat(val);
					//alert(val.slice(this.productLists.length));
					this.productLists=val;
				}else{
					//alert("this.loadType === 'refresh'");
					this.productLists = val;
				}
			} */
		},
		methods: {
			clickPreviewImg(index,currentURL,imgList){
				//navTo('/pages/product/detail?id='+item.id,{noCheckLogin:true})
				//console.log("点击预览图片"+JSON.stringify(imgList));
				this.previewImgList=[];
				imgList.forEach((item,index)=>{
					//console.log(item.url);
					this.previewImgList.push(item.url);
				})
				uni.previewImage({
					//当 urls 中有重复的图片链接时：传链接，预览结果始终显示该链接在 urls 中第一次出现的位置;传索引值，在微信/百度/字节跳动小程序平台，会过滤掉传入的 urls 中该索引值之前与其对应图片链接重复的值。其它平台会保留原始的 urls 不会做去重处理。
					current:index,//index currentURL current 为当前显示图片的链接/索引值，不填或填写的值无效则为 urls 的第一张
					urls:this.previewImgList,
					longPressActions: {
					                itemList: ['发送给朋友', '保存图片', '收藏'],
					                success: function(data) {
					                    console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
					                },
					                fail: function(err) {
					                    console.log(err.errMsg);
					                }
					            }
				})
			},
			clickCard(windowid) {
				//@click="navTo('/pages/product/detail?id=' + item._id)"
				/* uni.showToast({
					title: '点击卡片',
					icon: 'none'
				}) */
				this.navTo('/pages/window/window-checklist?windowid='+windowid,{noCheckLogin:true});//设置为不检查登录
			},
			footerClick(types) {
				uni.showToast({
					title: types,
					icon: 'none'
				})
			},
			scrollChange(e) {
				console.log(e)
			}
		}
	}
</script>

<style scoped lang="scss">
	.window-body{
		.uni-card{
			overflow: visible;//解决滚动条不能自动隐藏问题，因与uni-card插件的overflow:hidden属性冲突
		.window-image-box {
			.r-scroll{
				white-space: nowrap;
				width: 100%;
				.window-image-scroll{
					.scroll-image{
						flex-shrink: 0;
						width: 200rpx;
						height: 160rpx;
						margin-right: 16rpx;
					}
				}
				//隐藏滚动条
				/* ::-webkit-scrollbar{
					display: none;
					width: 0 !important;
					height: 0 !important;
					-webkit-appearance: none;
					background: transparent;
					color: transparent;
				} */
				/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
				   /* ::-webkit-scrollbar
				    {
				        width: 12rpx!important;
				        height: 1rpx!important;
				        background-color: #F5F5F5;
				    } */
				      
				    /*定义滚动条轨道 内阴影+圆角*/
				    /* ::-webkit-scrollbar-track
				    {
				        // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
				        border-radius: 10px;
				        background-color: #fff;
				    } */
				      
				    /*定义滑块 内阴影+圆角*/
				   /* ::-webkit-scrollbar-thumb
				    {
				        border-radius: 10rpx;
				        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
				        background-color: #d3d3d3;
				    } */
			}
				
		}
		
		.footer-box {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			justify-content: space-between;
			flex-direction: row;
		}
		
		.footer-box__item {
			align-items: center;
			padding: 2px 0;
			font-size: 12px;
			color: #666;
		}
	}
		
	}
	
</style>
