<template>
	<view>
		<!-- 头部导航 header-->
		<view class="header">
			<!-- 抽屉 drawer-->
			<uni-drawer ref="drawer_showLeft" mode="left" ><!-- mask="true" maskClick="true" -->
			    <view style="padding:30rpx;">
			        <view class="uni-title">抽屉式导航</view>
			    </view>
			</uni-drawer>
			<!-- 三级联动 picker-->
			<mpvue-picker
				:themeColor="picker_themeColor"
				ref="picker_locationPicker"
				:mode="picker_mode"
				:deepLength="picker_deepLength"
				:pickerValueDefault="pickerValueDefault"
				@onConfirm="picker_onConfirm"
				@onCancel="picker_onCancel"
				:pickerValueArray="pickerValueArray"
			></mpvue-picker>
		</view>
		<!-- 上拉加载下拉刷新 -->
	<!-- <mescroll-body 
			ref="mescrollRef" 
			@init="mescrollInit" 
			@down="downCallback" 
			@up="loadHotList" 
			:down="downOption" 
			:up="upOption"> -->
		<!-- 轮播图 swiper-->
		<view>
			<uni-swiper-dot @clickItem="swiperClickItem" :info="swiper_info" :current="swiper_current" :mode="swiper_mode" :dots-styles="swiper_dotsStyles" field="swiper_content">
				<swiper class="swiper-box" @change="swiperChange" :current="swiperDotIndex" :autoplay="true">
					<swiper-item v-for="(item, index) in swiper_info" :key="index" @click="swiperClick(item.link)">
						<view :class="item.colorClass" class="swiper-item">
							<image class="swiper-image" :src="item.url" mode="aspectFill" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<!-- 选项卡 tag-->
		<view>
			<view class="tag-section">
				<view class="tag-item" v-for="item in tag_DataList" :key="item.id" @tap="tagGoList(value)">
					<image class="tag-icon" :src="item.icon"></image>
					<text>{{ item.type }}</text>
				</view>
			</view>
		</view>
		<!-- 通告栏 notice-->
		<view>
			<uni-notice-bar :show-icon="true" :scrollable="true" :single="true" v-if="true" @click="noticeClick" :text="notice_text" /> 
		</view>
		<!-- 热门推荐 hot-->
		
		<!-- 窗口列表 window-->
		<view>
			<product-list ref="productList" :list="windowList"></product-list><!--  -->
			<!-- 上拉加载更多 -->
			<!-- <uni-load-more :status="window_status" @clickLoadMore="loadWindowList"></uni-load-more> -->
		</view>
	<!-- </mescroll-body> -->
	</view>
</template>

<script>
	import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue';
	import productList from '../../product/product-list.vue';
	export default {
		components: {
			mpvuePicker,
			productList
		},
		data() {
			return {
				//头部导航
				pickerValueArray:[],
				picker_themeColor: '#007AFF',
				picker_mode: 'multiLinkageSelector',
				picker_deepLength: 3,
				pickerValueDefault: [0,0,0],
				//index: 0,
				//轮播图
				 swiper_info: [],
				 swiper_dotStyle: [],
				 swiper_modeIndex: -1,
				 swiper_styleIndex: -1,
				 swiper_current: 0,
				 swiper_mode: 'round',
				 swiper_dotsStyles: {},
				 swiperDotIndex: 0,
				 //选项卡
				 tag_DataList: [],
				 //通告栏
				 notice_text:"欢迎来到食约APP~",
				 //窗口列表
				 windowList:[]
			}
		},
		onLoad() {
			//加载头部导航
			this.loadNavList();
			//加载选项卡
			this.loadTagList();
			//加载地点选择器
			this.loadPickerList();
			//加载通告栏
			this.loadNotice();
		},
		methods: {
			//异步加载方法
			async loadNavList(){
				let swiper_info = await this.$request('swiper','getSwiper',{});
				this.swiper_info = swiper_info.data;
			},
			async loadPickerList(){
				let pickerValueArray = await this.$request('picker','getPicker',{});
				this.pickerValueArray = pickerValueArray.data;
			},
			async loadTagList(){
				let tag_DataList = await this.$request('tag','getTag',{});
				this.tag_DataList = tag_DataList.data;
			},
			async loadNotice(){
				let notice_text = await this.$request('notice','getNotice',{});
				//alert(JSON.stringify(notice_text.data[0].text))
				this.notice_text=notice_text.data[0].text;
			},
			//头部导航方法
			picker_showLocationPicker() {
				this.mode = 'multiLinkageSelector';//selector，multiLinkageSelector，multiSelector
				this.deepLength = 3;
				this.pickerValueDefault = [0,0,0];
				this.$refs.picker_locationPicker.show();
			},
			picker_onChange(e) {
			      console.log(e);
			    },
			picker_onCancel(e) {
			      console.log(e);
			    },
			picker_onConfirm(e) {
			      console.log(e);
				  //alert(e.label);
				  this.picker_setStyle(0, e.label);
			    },
			picker_setStyle(index, text) {
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				if (text.length > 3) {
					//text = text.substr(0, 3) + '...';
					text = text.split("-")[text.split("-").length-1];
				}
				// #ifdef APP-PLUS
				let currentWebview = page.$getAppWebview();
				let titleNView = currentWebview.getStyle().titleNView;
				// 添加文字过长截取为3个字符，请根据自己业务需求更改
				//alert(titleNView.buttons[0].text);
				titleNView.buttons[1].text = text;//第二个按钮,index=1
				currentWebview.setStyle({
					titleNView: titleNView
				});
				// #endif
				// #ifdef H5
				// h5 临时方案
				document.getElementsByClassName('uni-btn-icon')[2].innerText = text;//原来index为1，实际是第二个按钮
				// #endif
			},
			//轮播图方法
			swiperChange(e) {
			    this.swiper_current = e.detail.current;
				//console.log(e.detail.current);
			        },
			swiperClickItem(e) {
				this.swiperDotIndex = e;
				/* this.swiperDotIndex = e;
				alert(this.swiperDotIndex); */
				console.log("test:"+this.swiperDotIndex);
			},
			swiperClick(e){
				alert("跳转地址"+e);
			},
			//通告栏
			noticeClick(e){
				alert("跳转地址");
			},
			//选项卡
			tagGoList(value) {
				alert("跳转地址");
				/* uni.navigateTo({
					//url:'../list/list?type=' + value.type + '&id=' + value.id
				}) */
			},
			//上拉加载更多
			/* loadWindowList(e) {
				uni.showToast({
					icon: 'none',
					title: "当前状态：" + e.detail.status
				})
			} */
		},
		//头部按钮方法
		onNavigationBarButtonTap(e) {
			//alert(e.index);
			if(e.index == 0){//第一个按钮-抽屉式导航
				if (this.drawer_showLeft) {
					this.$refs.drawer_showLeft.close()
				} else {
					this.$refs.drawer_showLeft.open()
				} 
			}else if(e.index == 1){//第二个按钮-地点选择器
				this.picker_showLocationPicker();
				//alert("test");
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px; 
		font-size: 14px;
		line-height: 24px;
	}
	/* 轮播图 */
	.swiper-box {
		height: 200px;
	}
	
	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #999;
		color: #fff;
	}
	
	.swiper-image {
		width: 750rpx;
	}
	
	.uni-bg-red {
		background-color: #ff5a5f;
	}
	
	.uni-bg-green {
		background-color: #09bb07;
	}
	
	.uni-bg-blue {
		background-color: #007aff;
	}
	/* 选项卡 */
	.tag-section {
		display: flex;
		align-items: center;
		flex-wrap:wrap;
		padding: 10rpx 16rpx; 
		background: #fff;
		}
	.tag-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 25%;/* 宽20%代表一行五个 */
			padding: 20rpx 0;
			font-size: 24rpx;
			color: #333;
		}
	.tag-icon {
			width: 84rpx;
			height: 84rpx;
			margin-bottom: 14rpx;
			border-radius: 50%;
		}
	/* 热门推荐 */

	
	
</style>
