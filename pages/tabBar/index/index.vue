<template>
	<view>
		<!-- 头部导航 header-->
		<view class="header">
			<!-- 抽屉 drawer-->
			<uni-drawer ref="drawer_showLeft" mode="left" ><!-- mask="true" maskClick="true" -->
			    <view style="padding:30rpx;">
			        <view class="sys-set-title">系统设置</view>
					<view class="scroll-view">
						<scroll-view class="scroll-view-box" scroll-y="true">
							<view class="info-content" v-for="(sys_set,index_sys) in sysSettingsList" :key="index_sys">
								<uni-list>
									<uni-list-item :show-extra-icon="true" showArrow :extra-icon="sys_set.extraIcon" :title="sys_set.title" clickable @click="sysSettingsClick(sys_set.link)"/>
								</uni-list>	
							</view>
							<view class="close">
								<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="closeDrawer('drawer_showLeft')"><text class="word-btn-white">关闭抽屉</text></view>
							</view>
						</scroll-view>
					</view>
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
	<mescroll-body 
			ref="mescrollRef" 
			@init="mescrollInit" 
			@down="downCallback" 
			@up="loadHotWindowList" 
			:up="upOption"
			:down="downOption">
		<!-- 轮播图 swiper -->
		<view>
			<uni-swiper-dot @clickItem="swiperClickItem" :info="swiper_info" :current="swiper_current" :mode="swiper_mode" :dots-styles="swiper_dotsStyles" field="swiper_content">
				<swiper class="swiper-box" @change="swiperChange" :current="swiperDotIndex" :autoplay="true">
					<swiper-item v-for="(item_swiper, index_swiper) in swiper_info" :key="index_swiper" @click="swiperClick(item_swiper.link)">
						<view :class="item_swiper.colorClass" class="swiper-item">
							<image class="swiper-image" :src="item_swiper.url" mode="aspectFill" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<!-- 选项卡 tag -->
		<view>
			<view class="tag-section">
				<view class="tag-item" v-for="item_tag in tag_DataList" :key="item_tag.id" @tap="tagGoList(value)">
					<image class="tag-icon" :src="item_tag.icon"></image>
					<text>{{ item_tag.type }}</text>
				</view>
			</view>
		</view>
		<!-- 通告栏 notice -->
		<view>
			<uni-notice-bar :show-icon="true" :scrollable="true" :single="true" v-if="true" @click="noticeClick" :text="notice_text" /> 
		</view>
		<!-- 热门推荐 hot -->
		
		<!-- 窗口列表 window -->
		<view>
			<product-list ref="productList" :list="windowList"></product-list>
			<!-- 上拉加载更多 -->
		</view>
	</mescroll-body>
	</view>
</template>

<script>
	import indexMiXin from './index.js'
	import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue';
	import productList from '../../product/product-list.vue';
	export default {
		components: {
			mpvuePicker,
			productList
		},
		mixins: [indexMiXin],
		data() {
			return {
				sysSettingsList:[
					{
						"title":"浏览播放",
						"extraIcon": {
							color: '#000000',
							size: '20',
							type: 'eye'
						},
						"link":""
					},
					{
						"title":"网络设置",
						"extraIcon": {
							color: '#000000',
							size: '20',
							type: 'spinner-cycle'
						},
						"link":""
					},
					{
						"title":"通知管理",
						"extraIcon": {
							color: '#000000',
							size: '20',
							type: 'chatbubble'
						},
						"link":""
					},
					{
						"title":"应用布局",
						"extraIcon": {
							color: '#000000',
							size: '20',
							type: 'map'
						},
						"link":""
					},
					{
						"title":"夜间模式",
						"extraIcon": {
							color: '#000000',
							size: '20',
							type: 'starhalf'
						},
						"link":""
					},
					{
						"title":"省流量模式",
						"extraIcon": {
							color: '#000000',
							size: '20',
							type: 'flag'
						},
						"link":""
					},
					{
						"title":"清除缓存",
						"extraIcon": {
							color: '#000000',
							size: '20',
							type: 'trash'
						},
						"link":""
					},
					{
						"title":"分享",
						"extraIcon": {
							color: '#000000',
							size: '20',
							type: 'redo'
						},
						"link":""
					},
					{
						"title":"去评价",
						"extraIcon": {
							color: '#000000',
							size: '20',
							type: 'hand-thumbsup'
						},
						"link":""
					},
					{
						"title":"开源许可",
						"extraIcon": {
							color: '#000000',
							size: '20',
							type: 'paperclip'
						},
						"link":""
					},
					{
						"title":"隐私协议",
						"extraIcon": {
							color: '#000000',
							size: '20',
							type: 'eye-slash-filled'
						},
						"link":""
					}
				],
				
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
			/* setTimeout(()=>{
				//this.navTo('/pages/address/list')
			}, 1000) */
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
				//app-plus 配置编译到 App 平台时的特定样式，部分常用配置 H5 平台也支持。
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
			// 关闭窗口
			closeDrawer(e) {
				this.$refs[e].close()
			},
			sysSettingsClick(e){
				uni.showToast({
					icon: 'none',
					title: "你点击了设置选项"
				})
			}
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
	
	
	/* drawer布局 */
	.word-btn-white {
		font-size: 16px;
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
		height: 40px;
		margin: 15px;
		background-color: #007AFF;
	}
	
	.word-btn--hover {
		background-color: #4ca2ff;
	}
	.sys-set-title{
		 font-family:Arial, Helvetica, sans-serif;
		 font-size: large;
		 position: absolute;	 
	}
	.scroll-view {
		/* #ifndef APP-NVUE */
		width: 100%;
		height: 100%;
		/* #endif */
		flex: 1;
	}
	
	.scroll-view-box {
		margin-top: 60px;
		flex: 1;
		position: absolute;
		/* position: relative; */
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	
	.info-content {
		padding: 5px 15px;
	}
	
	.close {
		padding: 15px;
	}
	
</style>
