<template>
		<view class="tabs">
		    <scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
		        <view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
		            <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
		        </view>
		    </scroll-view>
			<view class="line-h"></view><!-- 分割线 -->
			<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="ontabchange">
			    <swiper-item class="swiper-item" v-for="(tab,index1) in newsList" :key="index1">
					<!-- #ifndef APP-NVUE -->
					<scroll-view class="scroll-v list" enableBackToTop="true" scroll-y="true" @scrolltolower="loadMore(index1)">
						<view v-for="(newsitem,index2) in tab.data" :key="newsitem.id">
							<!-- {{newsitem.datetime}} -->
							<media-item :options="newsitem" @close="close(index1,index2)" @click="goDetail(newsitem)"></media-item>
						</view>
						<view class="loading-more" v-if="tab.isLoading || tab.data.length > 4">
							<text class="loading-more-text">{{tab.loadingText}}</text>
						</view>
					</scroll-view>
					 <!-- #endif -->
			    </swiper-item>
			</swiper>
		</view>
</template>

<script>
	import mediaItem from './news-item.nvue';
	// 缓存每页最多
	const MAX_CACHE_DATA = 100;
	// 缓存页签数量
	const MAX_CACHE_PAGE = 3;
export default {
	components: {
	    mediaItem
	},
	data() {
		return {
			newsData:[],
			newsList: [],
			cacheTab: [],
			tabIndex: 0,
			tabBars: [{
			    name: '推荐',
			    id: 'tuijian'
			}, {
			    name: '当前',
			    id: 'dangqian'
			}, {
			    name: '同城',
			    id: 'tongcheng'
			}, {
			    name: '闲聊',
			    id: 'xianliao'
			}, {
			    name: '灌水',
			    id: 'guanshui'
			}, {
			    name: '反馈',
			    id: 'fankui'
			}, {
			    name: '投诉',
			    id: 'tousu'
			}, {
			    name: '杂谈',
			    id: 'zatan'
			}, {
			    name: '美食',
			    id: 'meishi'
			}, {
			    name: '分享',
			    id: 'fenxiang'
			}],
			scrollInto: "",
			showTips: false,
			navigateFlag: false,
			pulling: false,
			refreshIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="
		};
	},
	/* mounted() {
	    let info = uni.createSelectorQuery().in(this).select('.swiper-box').boundingClientRect()
	    info.exec(res => {
	        this.scrollHeight = res[0].height
	        console.log(this.scrollHeight)
	    })
	}, */
	onLoad() {
		this.loadList();
	    setTimeout(()=>{
	      this.tabBars.forEach((tabBar) => {
	          this.newsList.push({
	              data: [],
	              isLoading: false,
	              refreshText: "",
	              loadingText: '加载更多...'
	          });
			  //alert(tabBar.name+"-"+this.newsList);
	      });
	      this.getList(0);
	    },500);//350太快
	},
	methods: {
		async loadList(){
			let newsData = await this.$api.json('newsData');
			this.newsData=newsData;
			//alert(JSON.stringify(newsData));
		},
	    getList(index) {//加载列表文章
	        let activeTab = this.newsList[index];
	        let list = [];
	        for (let i = 1; i <= 100; i++) {
				let ranIndex=Math.floor(Math.random() * 5);
	            let item = Object.assign({}, this.newsData[ranIndex]);
	            item.id = this.newGuid();
	            list.push(item);
				//alert(list[i-1].datetime);
	        }
			//alert(JSON.stringify(list));
	        activeTab.data = activeTab.data.concat(list);
			//alert(activeTab.data.length);//10
	    },
	    goDetail(e) {//点击进入详情
	        if (this.navigateFlag) {
	            return;
	        }
	        this.navigateFlag = true;
	        uni.navigateTo({
	            url: './detail/detail?title=' + e.title
	        });
	        setTimeout(() => {
	            this.navigateFlag = false;
	        }, 200)
	    },
	    close(index1, index2) {//删除信息
	        uni.showModal({
	            content: '是否删除本条信息？',
	            success: (res) => {
	                if (res.confirm) {
	                    this.newsList[index1].data.splice(index2, 1);
	                }
	            }
	        })
	    },
	    loadMore(e) {//加载更多
	        setTimeout(() => {
	            this.getList(this.tabIndex);
	        }, 500)
	    },
	    ontabtap(e) {
	        let index = e.target.dataset.current || e.currentTarget.dataset.current;
	        this.switchTab(index);
	    },
	    ontabchange(e) {
	        let index = e.target.current || e.detail.current;
	        this.switchTab(index);
	    },
	    switchTab(index) {
	        if (this.newsList[index].data.length === 0) {
	            this.getList(index);
	        }
	
	        if (this.tabIndex === index) {
	            return;
	        }
	
	        // 缓存 tabId
	        if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {
	            let isExist = this.cacheTab.indexOf(this.tabIndex);
	            if (isExist < 0) {
	                this.cacheTab.push(this.tabIndex);
	                //console.log("cache index:: " + this.tabIndex);
	            }
	        }
	
	        this.tabIndex = index;
	        this.scrollInto = this.tabBars[index].id;
	
	        // 释放 tabId
	        if (this.cacheTab.length > MAX_CACHE_PAGE) {
	            let cacheIndex = this.cacheTab[0];
	            this.clearTabData(cacheIndex);
	            this.cacheTab.splice(0, 1);
	            //console.log("remove cache index:: " + cacheIndex);
	        }
	    },
	    clearTabData(e) {
	        this.newsList[e].data.length = 0;
	        this.newsList[e].loadingText = "加载更多...";
	    },
	    refreshData() {},
	    onrefresh(e) {
	        var tab = this.newsList[this.tabIndex];
	        if (!tab.refreshFlag) {
	            return;
	        }
	        tab.refreshing = true;
	        tab.refreshText = "正在刷新...";
	
	        setTimeout(() => {
	            this.refreshData();
	            this.pulling = true;
	            tab.refreshing = false;
				tab.refreshFlag = false;
	            tab.refreshText = "已刷新";
	            setTimeout(() => { // TODO fix ios和Android 动画时间相反问题
	                this.pulling = false;
	            }, 500);
	        }, 2000);
	    },
	    onpullingdown(e) {
	        var tab = this.newsList[this.tabIndex];
	        if (tab.refreshing || this.pulling) {
	            return;
	        }
	        if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
	            tab.refreshFlag = true;
	            tab.refreshText = "释放立即刷新";
	        } else {
	            tab.refreshFlag = false;
	            tab.refreshText = "下拉可以刷新";
	        }
	    },
	    newGuid() {
	        let s4 = function() {
	            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
	        }
	        return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
	    }
	},
	/**
	 * 当 searchInput 配置 disabled 为 true 时触发
	 */
	onNavigationBarSearchInputClicked(e) {
		console.log('事件执行了')
		uni.navigateTo({
			url: '/pages/tabBar/square/detail/history'
		});
	},
	/**
	 *  点击导航栏 buttons 时触发
	 */
	onNavigationBarButtonTap() {
		uni.showModal({
			title: '提示',
			content: '用户点击了功能按钮，这里仅做展示。',
			success: res => {
				if (res.confirm) {
					console.log('用户点击了确定');
				}
			}
		});
	}
};
</script>

<style>
	/* #ifndef APP-PLUS */
	page {
	    width: 100%;
	    min-height: 100%;
	    display: flex;
	}
	
	/* #endif */
	
	.tabs {
	    flex: 1;
	    flex-direction: column;
		/* display: flex; */
	    overflow: hidden;
	    background-color: #ffffff;
	    /* #ifdef MP-ALIPAY || MP-BAIDU */
	    height: 100vh;
	    /* #endif */
	}
	
	.scroll-h {
	    width: 750rpx;
		/* #ifdef H5 */
		width:100%;
		/* #endif */
		height: 80rpx;
	    flex-direction: row;
	    /* #ifndef APP-PLUS */
	    white-space: nowrap;
	    /* #endif */
	    /* flex-wrap: nowrap; */
	    /* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
	}
	
	.line-h {
	    height: 1rpx;
	    background-color: #cccccc;
	}
	
	.uni-tab-item {
	    /* #ifndef APP-PLUS */
	    display: inline-block;
	    /* #endif */
	    flex-wrap: nowrap;
	    padding-left: 34rpx;
	    padding-right: 34rpx;
	}
	
	.uni-tab-item-title {
	    color: #555;
	    font-size: 30rpx;
	    height: 80rpx;
	    line-height: 80rpx;
	    flex-wrap: nowrap;
	    /* #ifndef APP-PLUS */
	    white-space: nowrap;
	    /* #endif */
	}
	
	.uni-tab-item-title-active {
	    color: #007AFF;
	}
	
	.swiper-box {
	    flex: 1;
	}
	
	.swiper-item {
	    flex: 1;
	    flex-direction: row;
	}
	
	.scroll-v {
	    flex: 1;
	    /* #ifndef MP-ALIPAY */
	    flex-direction: column;
	    /* #endif */
	    width: 750rpx;
		width:100%;
	}
	
	.update-tips {
	    position: absolute;
	    left: 0;
	    top: 41px;
	    right: 0;
	    padding-top: 5px;
	    padding-bottom: 5px;
	    background-color: #FDDD9B;
	    align-items: center;
	    justify-content: center;
	    text-align: center;
	}
	
	.update-tips-text {
	    font-size: 14px;
	    color: #ffffff;
	}
	
	.refresh {
	    width: 750rpx;
		width:100%;
	    height: 64px;
	    justify-content: center;
	}
	
	.refresh-view {
	    flex-direction: row;
	    flex-wrap: nowrap;
	    align-items: center;
	    justify-content: center;
	}
	
	.refresh-icon {
		width: 30px;
		height: 30px;
		transition-duration: .5s;
		transition-property: transform;
		transform: rotate(0deg);
		transform-origin: 15px 15px;
	}
	
	.refresh-icon-active {
		transform: rotate(180deg);
	}
	
	.loading-icon {
		width: 20px;
		height: 20px;
		margin-right: 5px;
		color: #999999;
	}
	
	.loading-text {
	    margin-left: 2px;
	    font-size: 16px;
	    color: #999999;
	}
	
	.loading-more {
	    align-items: center;
	    justify-content: center;
	    padding-top: 10px;
	    padding-bottom: 10px;
	    text-align: center;
	}
	
	.loading-more-text {
	    font-size: 28rpx;
	    color: #999;
	}
	
</style>
