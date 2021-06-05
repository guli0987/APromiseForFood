import MinRouter from './MinRouter.js';
//配置路由
const router=new MinRouter({
	router:[
		/* 首页 */
		//轮播图
		{
			name:'indexSwiper',
			path:'pages/swiper/swiper',
			check:false
		},
		//选项卡
		{
			name:'indexTag',
			path:'pages/tag/tag',
			check:false
		},
		//通告栏
		{
			name:'indexNotice',
			path:'pages/notice/notice',
			check:false
		},
		//店铺列表
		{
			name:'indexCheckList',
			path:'/pages/window/window-checklist',
			check:false
		},
	]
	
})
export default router
