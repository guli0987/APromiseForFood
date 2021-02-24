const newsData = [
        {
            "datetime": "40分钟前",
            "article_type": 0,
            "title": "uni-app行业峰会频频亮相，开发者反响热烈!",
            "source": "DCloud",
            "comment_count": 639
        },
        {
            "datetime": "一天前",
            "article_type": 1,
            "title": "DCloud完成B2轮融资，uni-app震撼发布!",
            "image_url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg",
            "source": "DCloud",
            "comment_count": 11395
        },
        {
            "datetime": "一天前",
            "article_type": 2,
            "title": "中国技术界小奇迹：HBuilder开发者突破200万",
            "image_url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b4cd3000-517d-11eb-a16f-5b3e54966275.jpg",
            "source": "DCloud",
            "comment_count": 11395
        },
        {
            "article_type": 3,
            "image_list": [{
                "url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b2e201d0-517d-11eb-8a36-ebb87efcf8c0.jpg",
                "width": 563,
                "height": 316
            }, {
                "url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b4cd3000-517d-11eb-a16f-5b3e54966275.jpg",
                "width": 641,
                "height": 360
            }, {
                "url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg",
                "width": 640,
                "height": 360
            }],
            "datetime": "5分钟前",
            "title": "uni-app 支持使用 npm 安装第三方包，生态更趋丰富",
            "source": "DCloud",
            "comment_count": 11
        },
        {
            "datetime": "2小时前",
            "article_type": 4,
            "title": "uni-app 支持原生小程序自定义组件，更开放、更自由",
            "image_url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b2e201d0-517d-11eb-8a36-ebb87efcf8c0.jpg",
            "source": "DCloud",
            "comment_count": 69
        }
    ]
/* 头部导航挑选城市 */
const pickerArray=[
					{label:"洛阳","children":[
						{label:"河南科技大学","children":[
							{label:"西苑第一食堂"},{label:"重庆饭店"},{label:"西苑北院食堂"},
							]},
						{label:"洛阳理工学院","children":[
							{label:"洛理第一食堂"},{label:"洛理第二食堂"},{label:"洛理第三食堂"}]},
						{label:"洛阳师范学院","children":[
							{label:"洛师第一食堂"},{label:"洛师第二食堂"},{label:"洛师第三食堂"}]},
											]
					},
					{label:"郑州","children":[
						{label:"郑州大学","children":[
							{label:"郑大第一食堂"},{label:"郑大第二食堂"},{label:"郑大第三食堂"},
							]},
						{label:"河南工业大学","children":[
							{label:"河工第一食堂"},{label:"河工第二食堂"},{label:"河工第三食堂"}]},
						{label:"中原科技学院","children":[
							{label:"中科第一食堂"},{label:"中科第二食堂"},{label:"中科第三食堂"}]},
											]
					},
					{label:"开封","children":[
						{label:"河南大学","children":[
							{label:"河大第一食堂"},{label:"河大第二食堂"},{label:"河大第三食堂"},
							]},
						{label:"开封大学","children":[
							{label:"开大第一食堂"},{label:"开大第二食堂"},{label:"开大第三食堂"}]},
						{label:"开封职业技术学院","children":[
							{label:"开职第一食堂"},{label:"开职第二食堂"},{label:"开职第三食堂"}]},
											]
					}
				]
const pickerArrayF=[
					{label:"洛阳","children":[
						{label:"高校","children":[
							{label:"河南科技大学","children":[
								{label:"西苑第一食堂"},{label:"重庆饭店"},{label:"西苑北院食堂"},
								]},
							{label:"洛阳理工学院","children":[
								{label:"洛理第一食堂"},{label:"洛理第二食堂"},{label:"洛理第三食堂"}]},
							{label:"洛阳师范学院","children":[
								{label:"洛师第一食堂"},{label:"洛师第二食堂"},{label:"洛师第三食堂"}]},
						]},
						{label:"小城","children":[
							{label:"涧西区","children":[
								{label:"1"},{label:"1"},{label:"1"},
								]},
							{label:"洛龙区","children":[
								{label:"2"},{label:"2"},{label:"2"}]},
							{label:"老城区","children":[
								{label:"3"},{label:"3"},{label:"3"}]},
						]},
					]},
					{label:"郑州","children":[
						{label:"高校","children":[
							{label:"郑州大学","children":[
								{label:"郑大第一食堂"},{label:"郑大第二食堂"},{label:"郑大第三食堂"},
								]},
							{label:"河南工业大学","children":[
								{label:"河工第一食堂"},{label:"河工第二食堂"},{label:"河工第三食堂"}]},
							{label:"中原科技学院","children":[
								{label:"中科第一食堂"},{label:"中科第二食堂"},{label:"中科第三食堂"}]},
						]},
						{label:"小城","children":[
							{label:"涧西区","children":[
								{label:"4"},{label:"4"},{label:"4"},
								]},
							{label:"洛龙区","children":[
								{label:"5"},{label:"5"},{label:"5"}]},
							{label:"老城区","children":[
								{label:"6"},{label:"6"},{label:"6"}]},
						]},
					]},
					{label:"开封","children":[
						{label:"高校","children":[
							{label:"河南大学","children":[
								{label:"河大第一食堂"},{label:"河大第二食堂"},{label:"河大第三食堂"},
								]},
							{label:"开封大学","children":[
								{label:"开大第一食堂"},{label:"开大第二食堂"},{label:"开大第三食堂"}]},
							{label:"开封职业技术学院","children":[
								{label:"开职第一食堂"},{label:"开职第二食堂"},{label:"开职第三食堂"}]},
						]},
						{label:"小城","children":[
							{label:"涧西区","children":[
								{label:"7"},{label:"7"},{label:"7"},
								]},
							{label:"洛龙区","children":[
								{label:"8"},{label:"8"},{label:"8"}]},
							{label:"老城区","children":[
								{label:"9"},{label:"9"},{label:"9"}]},
						]},
					]}
				]
/* 轮播图 */
const swiperInfo=[{
					colorClass: 'uni-bg-red',
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
					content: '内容 A'
				}, {
					colorClass: 'uni-bg-green',
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
					content: '内容 B'
				}, {
					colorClass: 'uni-bg-blue',
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
					content: '内容 C'
				}]
/* 轮播图属性 */
const swiperDotStyle= [{
				 		backgroundColor: 'rgba(0, 0, 0, .3)',
				 		border: '1px rgba(0, 0, 0, .3) solid',
				 		color: '#fff',
				 		selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
				 		selectedBorder: '1px rgba(0, 0, 0, .9) solid'
				 	},
				 	{
				 		backgroundColor: 'rgba(255, 90, 95,0.3)',
				 		border: '1px rgba(255, 90, 95,0.3) solid',
				 		color: '#fff',
				 		selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
				 		selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
				 	},
				 	{
				 		backgroundColor: 'rgba(83, 200, 249,0.3)',
				 		border: '1px rgba(83, 200, 249,0.3) solid',
				 		color: '#fff',
				 		selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
				 		selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
				 	}
				 ]
/* 选项卡 */
const tagDataList = [
				 	{
				 		type: '食物',
				 		id: 1,
				 		icon: '/static/tag-food.png'
				 	},
				 	{
				 		type: '饮料',
				 		id: 2,
				 		icon: '/static/tag-drink.png'
				 	},
				 	{
				 		type: '水果',
				 		id: 3,
				 		icon: '/static/tag-fruit.png'
				 	},
				 	{
				 		type: '卡券',
				 		id: 4,
				 		icon: '/static/tag-gift.png'
				 	}/* ,
					{
						type: '汽车',
						id: 5,
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png'
					},
					{
						type: '运动',
						id: 6,
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png'
					},
					{
						type: '动物',
						id: 7,
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png'
					},
					{
						type: '风景',
						id: 8,
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png'
					} */
				 ]
const productList = [
	{
		id:1,
		icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
		title:"窗口号1",
		subTitle:"口味",
		extra:"宣传语",
		imgA:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		imgB:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		imgC:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		content:"布告"
	},
	{
		id:2,
		icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
		title:"窗口号2",
		subTitle:"口味",
		extra:"宣传语",
		imgA:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		imgB:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		imgC:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		content:"布告"
	},
	{
		id:3,
		icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
		title:"窗口号3",
		subTitle:"口味",
		extra:"宣传语",
		imgA:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		imgB:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		imgC:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png",
		content:"布告"
	}
	
]
/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'Leo yo',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
		src: "/static/temp/banner3.jpg",
		background: "rgb(203, 87, 60)",
	},
	{
		src: "/static/temp/banner2.jpg",
		background: "rgb(205, 215, 218)",
	},
	{
		src: "/static/temp/banner4.jpg",
		background: "rgb(183, 73, 69)",
	}
]
/* 商品列表 */
const goodsList = [{
		image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
		image2: "http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",
		image3: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",
		title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
		price: 179,
		sales: 61,
	},
	{
		image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",
		image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg",
		image3: "http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg",
		title: "潘歌针织连衣裙",
		price: 78,
		sales: 16,
	},
	{
		image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg",
		image2: "http://m.360buyimg.com/n12/jfs/t247/42/1078640382/162559/3628a0b/53f5ad09N0dd79894.jpg%21q70.jpg",
		image3: "http://ikids.61kids.com.cn/upload/2018-12-29/1546070626796114.jpg",
		title: "巧谷2019春夏季新品新款女装",
		price: 108.8,
		sales: 5,
	}, {
		image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg",
		image2: "http://images.jaadee.com/images/201702/goods_img/30150_d85aed83521.jpg",
		image3: "http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg",
		title: "私萱连衣裙",
		price: 265,
		sales: 88,
	}, {
		image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
		image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
		image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
		title: "娇诗茹 ulzzang原宿风学生潮韩版春夏短",
		price: 422,
		sales: 137,
	}, {
		image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
		image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
		image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
		title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
		price: 179,
		sales: 95,
	},
]

/* 购物车 */
const cartList = [{
		id: 1,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553005139&di=3368549edf9eee769a9bcb3fbbed2504&imgtype=jpg&er=1&src=http%3A%2F%2Fimg002.hc360.cn%2Fy3%2FM01%2F5F%2FDB%2FwKhQh1T7iceEGRdWAAAAADQvqk8733.jpg',
		attr_val: '春装款 L',
		stock: 15,
		title: 'OVBE 长袖风衣',
		price: 278.00,
		number: 1
	},
	{
		id: 3,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 3,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		number: 5
	},
	{
		id: 4,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		number: 1
	},
	{
		id: 5,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		number: 1
	},
	{
		id: 6,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		number: 1
	},
	{
		id: 7,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		number: 10
	},
	{
		id: 8,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 15,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		number: 1
	},
	{
		id: 9,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		number: 1
	},
	{
		id: 10,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		number: 1
	},
	{
		id: 11,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		number: 1
	},
	{
		id: 12,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		number: 10
	},
	{
		id: 13,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
		attr_val: '春装款/m',
		stock: 15,
		title: '女装2019春秋新款',
		price: 420.00,
		number: 1
	}
];
//详情展示页面
const detailData = {
	title: '纯种金毛幼犬活体有血统证书',
	title2: '拆家小能手 你值得拥有',
	favorite: true,
	imgList: [{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
		},
		{
			src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
		},
	],
	episodeList: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	],
	guessList: [{
			src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg',
			title: '猫眼指甲油',
			title2: '独树一帜的免照灯猫眼指甲'
		},
		{
			src: 'http://m.china-7.net/uploads/14778449362891.jpg',
			title: '创意屋',
			title2: '创意屋形上下双层高低床'
		},
		{
			src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg',
			title: 'MissCandy 指甲油',
			title2: '十分适合喜欢素净的妹纸，尽显淡雅的气质'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2108933440,2194129200&fm=214&gp=0.jpg	',
			title: 'RMK 2017星空海蓝唇釉',
			title2: '唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。'
		}
	],
	evaList: [{
			src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '楼上说的好有道理。'
		}
	]
}
const shareList = [{
		type: 1,
		icon: '/static/temp/share_wechat.png',
		text: '微信好友'
	},
	{
		type: 2,
		icon: '/static/temp/share_moment.png',
		text: '朋友圈'
	},
	{
		type: 3,
		icon: '/static/temp/share_qq.png',
		text: 'QQ好友'
	},
	{
		type: 4,
		icon: '/static/temp/share_qqzone.png',
		text: 'QQ空间'
	}
]
const lazyLoadList = [{
		src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
	},
	{
		src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
	},
	{
		src: 'http://img5.imgtn.bdimg.com/it/u=2904900134,438461613&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img1.imgtn.bdimg.com/it/u=1690475408,2565370337&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.99114.com/group1/M00/7F/99/wKgGS1kVrPGAe5LmAAU2KrJmb3Q923_600_600.jpg'
	},
	{
		src: 'http://img4.imgtn.bdimg.com/it/u=261047209,372231813&fm=26&gp=0.jpg'
	},
	{
		src: 'http://i2.17173cdn.com/i7mz64/YWxqaGBf/tu17173com/20150107/eMyVMObjlbcvDEv.jpg'
	},
	{
		src: 'http://img008.hc360.cn/m4/M02/E7/87/wKhQ6FSrfU6EfUoyAAAAAITAfyc280.jpg'
	},
	{
		src: 'http://pic1.win4000.com/wallpaper/d/5991569950166.jpg'
	},
	{
		src: 'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b0208f9fe945e60d9f2d3572cc85e.jpg'
	},
	{
		src: 'http://pic41.nipic.com/20140429/18169759_125841756000_2.jpg'
	},
	{
		src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg'
	},
	{
		src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg'
	},
	{
		src: 'http://b-ssl.duitang.com/uploads/item/201410/02/20141002111638_tXAzU.jpeg'
	},
	{
		src: 'http://img2.ph.126.net/C4JW6f57QWSB21-8jh2UGQ==/1762596304262286698.jpg'
	},
	{
		src: 'http://att.bbs.duowan.com/forum/201405/17/190257nzcvkkdg6w2e8226.jpg'
	},
	{
		src: 'http://attach.bbs.miui.com/forum/201504/10/223644v3intigyvva0vgym.jpg'
	},
	{
		src: 'http://pic1.win4000.com/mobile/3/57888a298d61d.jpg'
	},
]

const orderList = [{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
			},
			{
				image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
			}
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 9,
		goodsList: [{
			title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
			price: 179.5,
			image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
			number: 1,
			attr: '珊瑚粉 M'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2120460599/O1CN01LBPS4C1GINkwsOTXS_!!2120460599.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/i2/1069876356/TB2ocTQG4WYBuNjy1zkXXXGGpXa_!!1069876356.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2120460599/O1CN01YsmgwZ1GINkv38rkn_!!2120460599.jpg_430x430q90.jpg',
			},
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
			title: '回力女鞋高帮帆布鞋女学生韩版鞋子女2019潮鞋女鞋新款春季板鞋女',
			price: 69,
			image: 'https://img.alicdn.com/imgextra/i3/2128794607/TB2gzzoc41YBuNjy1zcXXbNcXXa_!!2128794607.jpg_430x430q90.jpg',
			number: 1,
			attr: '白色-高帮 39'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3358098495/O1CN01dhYyid2Ccl5MWLDok_!!3358098495.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/3358098495/O1CN01AWsnFA2Ccl5OzvqsL_!!3358098495.jpg_430x430q90.jpg',
			},
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: 'https://img.alicdn.com/imgextra/i4/3470687433/O1CN0124mMQOSERr18L1h_!!3470687433.jpg_430x430q90.jpg',
			},
			{
				image: 'https://img.alicdn.com/imgextra/i3/2888462616/O1CN01ERra5J1VCAbZaKI5n_!!0-item_pic.jpg_430x430q90.jpg',
			},
			{
				image: 'https://gd3.alicdn.com/imgextra/i3/819381730/O1CN01YV4mXj1OeNhQIhQlh_!!819381730.jpg_400x400.jpg',
			},
		]
	}

]
const cateList = [{
		id: 1,
		name: '手机数码'
	},
	{
		id: 2,
		name: '礼品鲜花'
	},
	{
		id: 3,
		name: '男装女装'
	},
	{
		id: 4,
		name: '母婴用品'
	},
	{
		id: 5,
		pid: 1,
		name: '手机通讯'
	},
	{
		id: 6,
		pid: 1,
		name: '运营商'
	},
	{
		id: 8,
		pid: 5,
		name: '全面屏手机',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 9,
		pid: 5,
		name: '游戏手机',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 10,
		pid: 5,
		name: '老人机',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 11,
		pid: 5,
		name: '拍照手机',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 12,
		pid: 5,
		name: '女性手机',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 14,
		pid: 6,
		name: '合约机',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 15,
		pid: 6,
		name: '选好卡',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 16,
		pid: 6,
		name: '办套餐',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 17,
		pid: 2,
		name: '礼品',
	},
	{
		id: 18,
		pid: 2,
		name: '鲜花',
	},
	{
		id: 19,
		pid: 17,
		name: '公益摆件',
		picture: '/static/temp/cate7.jpg'
	},
	{
		id: 20,
		pid: 17,
		name: '创意礼品',
		picture: '/static/temp/cate8.jpg'
	},
	{
		id: 21,
		pid: 18,
		name: '鲜花',
		picture: '/static/temp/cate9.jpg'
	},
	{
		id: 22,
		pid: 18,
		name: '每周一花',
		picture: '/static/temp/cate10.jpg'
	},
	{
		id: 23,
		pid: 18,
		name: '卡通花束',
		picture: '/static/temp/cate11.jpg'
	},
	{
		id: 24,
		pid: 18,
		name: '永生花',
		picture: '/static/temp/cate12.jpg'
	},
	{
		id: 25,
		pid: 3,
		name: '男装'
	},
	{
		id: 26,
		pid: 3,
		name: '女装'
	},
	{
		id: 27,
		pid: 25,
		name: '男士T恤',
		picture: '/static/temp/cate13.jpg'
	},
	{
		id: 28,
		pid: 25,
		name: '男士外套',
		picture: '/static/temp/cate14.jpg'
	},
	{
		id: 29,
		pid: 26,
		name: '裙装',
		picture: '/static/temp/cate15.jpg'
	},
	{
		id: 30,
		pid: 26,
		name: 'T恤',
		picture: '/static/temp/cate16.jpg'
	},
	{
		id: 31,
		pid: 26,
		name: '上装',
		picture: '/static/temp/cate15.jpg'
	},
	{
		id: 32,
		pid: 26,
		name: '下装',
		picture: '/static/temp/cate16.jpg'
	},
	{
		id: 33,
		pid: 4,
		name: '奶粉',
	},
	{
		id: 34,
		pid: 4,
		name: '营养辅食',
	},
	{
		id: 35,
		pid: 4,
		name: '童装',
	},
	{
		id: 39,
		pid: 4,
		name: '喂养用品',
	},
	{
		id: 36,
		pid: 33,
		name: '有机奶粉',
		picture: '/static/temp/cate17.jpg'
	},
	{
		id: 37,
		pid: 34,
		name: '果泥/果汁',
		picture: '/static/temp/cate18.jpg'
	},
	{
		id: 39,
		pid: 34,
		name: '面条/粥',
		picture: '/static/temp/cate20.jpg'
	},
	{
		id: 42,
		pid: 35,
		name: '婴童衣橱',
		picture: '/static/temp/cate19.jpg'
	},
	{
		id: 43,
		pid: 39,
		name: '吸奶器',
		picture: '/static/temp/cate21.jpg'
	},
	{
		id: 44,
		pid: 39,
		name: '儿童餐具',
		picture: '/static/temp/cate22.jpg'
	},
	{
		id: 45,
		pid: 39,
		name: '牙胶安抚',
		picture: '/static/temp/cate23.jpg'
	},
	{
		id: 46,
		pid: 39,
		name: '围兜',
		picture: '/static/temp/cate24.jpg'
	},
]
const charts ={
	"chartData": {
	  "categories": ["2013", "2014", "2015", "2016", "2017", "2018"],
	  "series": [{
		"name": "类别一",
		"data": [35, 36, 31, 33, 13, 34]
	  }, {
		"name": "类别二",
		"data": [18, 27, 21, 24, 6, 28]
	  }, {
		"name": "类别三",
		"data": [18, 27, 21, 24, 6, 28]
	  }]
	},
	"Column": {
		"categories": ["2月19日", "2月20日", "2月21日", "2月22日", "2月23日", "2月24日"],
		"series": [{
			"name": "差评",
			"data": [15, {
				"value": 20,
				"color": "#f04864"
			}, 45, 37, 43, 34]
		}, {
			"name": "好评",
			"data": [30, {
				"value": 40,
				"color": "#facc14"
			}, 25, 14, 34, 18]
		}]
	},
	"ColumnB": {
		"categories": ["2013", "2014", "2015", "2016", "2017", "2018"],
		"series": [{
			"name": "新成交量3",
			"data": [35, 36, 31, 33, 13, 34]
		}, {
			"name": "新成交量4",
			"data": [18, 27, 21, 24, 6, 28]
		}]
	},
	"ColumnMeter": {
		"categories": ["2013", "2014", "2015", "2016", "2017", "2018"],
		"series": [{
			"name": "目标值",
			"data": [35, 36, 31, 33, 13, 34],
			"color": "#2fc25b"
		}, {
			"name": "完成量",
			"data": [18, 27, 21, 24, 6, 28],
			"color": "#1890ff"
		}]
	},
		//堆叠柱状图
	"ColumnStack": {
		"categories": ["2013", "2014", "2015", "2016", "2017", "2018"],
		"series": [{
			"name": "新成交量3",
			"data": [35, 36, 31, 33, 13, 34]
		}, {
			"name": "新成交量4",
			"data": [18, 27, 21, 24, 6, 28]
		}, {
			"name": "新成交量4",
			"data": [18, 27, 21, 24, 6, 28]
		}]
	},
	"Mix": {
		"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
		"series": [{
			"name": "曲面",
			"data": [70, 50, 85, 130, 64, 88],
			"type": "area",
			"style": "curve"
		}, {
			"name": "柱1",
			"data": [40, 30, 55, 110, 24, 58],
			"type": "column"
		}, {
			"name": "柱2",
			"data": [50, 20, 75, 60, 34, 38],
			"type": "column"
		}, {
			"name": "曲线",
			"data": [70, 50, 85, 130, 64, 88],
			"type": "line",
			"style": "curve",
			"color": "#1890ff"
		}, {
			"name": "折线",
			"data": [120, 140, 105, 170, 95, 160],
			"type": "line",
			"color": "#2fc25b"
		}, {
			"name": "点",
			"data": [100, 80, 125, 150, 112, 132],
			"type": "point",
			"color": "#f04864"
		}]
	},
	"LineA": {
		"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
		"series": [{
			"name": "成交量A",
			"data": [35, 8, 25, 37, 4, 20]
		}, {
			"name": "成交量B",
			"data": [70, 40, 65, 100, 44, 68]
		}, {
			"name": "成交量C",
			"data": [100, 80, 95, 150, 112, 132]
		}]
	},
	"LineB": {
		"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
		"series": [{
			"name": "成交量A",
			"data": [35, 20, 25, 37, 4, 20]
		}, {
			"name": "成交量B",
			"data": [70, 40, 65, 100, 44, 68]
		}, {
			"name": "成交量C",
			"data": [100, 80, 95, 150, 112, 132]
		}]
	},
	"Area": {
		"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
		"series": [{
			"name": "成交量A",
			"data": [100, 80, 95, 150, 112, 132],
			"color": "#facc14"
		}, {
			"name": "成交量B",
			"data": [70, 40, 65, 100, 44, 68],
			"color": "#2fc25b"
		}, {
			"name": "成交量C",
			"data": [35, 20, 25, 37, 4, 20],
			"color": "#1890ff"
		}]
	},
	"Pie": {
		"series": [{
			"name": "一班",
			"data": 50
		}, {
			"name": "二班",
			"data": 30
		}, {
			"name": "三班",
			"data": 20
		}, {
			"name": "四班",
			"data": 18
		}, {
			"name": "五班",
			"data": 8
		}]
	},
	"Ring": {
		"series": [{
			"name": "一班",
			"data": 50
		}, {
			"name": "二班",
			"data": 30
		}, {
			"name": "三班",
			"data": 20
		}, {
			"name": "四班",
			"data": 18
		}, {
			"name": "五班",
			"data": 8
		}]
	},
	"Radar": {
		"categories": ["维度1", "维度2", "维度3", "维度4", "维度5", "维度6"],
		"series": [{
			"name": "成交量1",
			"data": [90, 110, 165, 195, 187, 172]
		}, {
			"name": "成交量2",
			"data": [190, 210, 105, 35, 27, 102]
		}]
	},
	"Arcbar1": {
		"series": [{
			"name": "正确率",
			"data": 0.29,
			"color": "#2fc25b"
		}]
	},
	"Arcbar2": {
		"series": [{
			"name": "错误率",
			"data": 0.65,
			"color": "#f04864"
		}]
	},
	"Arcbar3": {
		"series": [{
			"name": "完成率",
			"data": 0.85,
			"color": "#1890ff"
		}]
	},
	"Gauge": {
		"categories": [{
			"value": 0.2,
			"color": "#1890ff"
		}, {
			"value": 0.8,
			"color": "#2fc25b"
		}, {
			"value": 1,
			"color": "#f04864"
		}],
		"series": [{
			"name": "完成率",
			"data": 0.66
		}]
	},
	"Candle": {
		"categories": ["2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30", "2013/1/31", "2013/2/1", "2013/2/4",
			"2013/2/5", "2013/2/6", "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", "2013/2/21", "2013/2/22",
			"2013/2/25", "2013/2/26", "2013/2/27", "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", "2013/3/7",
			"2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19",
			"2013/3/20",
			"2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2",
			"2013/4/3", "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", "2013/4/15", "2013/4/16", "2013/4/17",
			"2013/4/18", "2013/4/19", "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", "2013/5/2", "2013/5/3",
			"2013/5/6", "2013/5/7", "2013/5/8", "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", "2013/5/16",
			"2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28",
			"2013/5/29",
			"2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", "2013/6/6", "2013/6/7", "2013/6/13"
		],
		"series": [{
			"name": "上证指数",
			"data": [
				[2320.26, 2302.6, 2287.3, 2362.94],
				[2300, 2291.3, 2288.26, 2308.38],
				[2295.35, 2346.5, 2295.35, 2346.92],
				[2347.22, 2358.98, 2337.35, 2363.8],
				[2360.75, 2382.48, 2347.89, 2383.76],
				[2383.43, 2385.42, 2371.23, 2391.82],
				[2377.41, 2419.02, 2369.57, 2421.15],
				[2425.92, 2428.15, 2417.58, 2440.38],
				[2411, 2433.13, 2403.3, 2437.42],
				[2432.68, 2434.48, 2427.7, 2441.73],
				[2430.69, 2418.53, 2394.22, 2433.89],
				[2416.62, 2432.4, 2414.4, 2443.03],
				[2441.91, 2421.56, 2415.43, 2444.8],
				[2420.26, 2382.91, 2373.53, 2427.07],
				[2383.49, 2397.18, 2370.61, 2397.94],
				[2378.82, 2325.95, 2309.17, 2378.82],
				[2322.94, 2314.16, 2308.76, 2330.88],
				[2320.62, 2325.82, 2315.01, 2338.78],
				[2313.74, 2293.34, 2289.89, 2340.71],
				[2297.77, 2313.22, 2292.03, 2324.63],
				[2322.32, 2365.59, 2308.92, 2366.16],
				[2364.54, 2359.51, 2330.86, 2369.65],
				[2332.08, 2273.4, 2259.25, 2333.54],
				[2274.81, 2326.31, 2270.1, 2328.14],
				[2333.61, 2347.18, 2321.6, 2351.44],
				[2340.44, 2324.29, 2304.27, 2352.02],
				[2326.42, 2318.61, 2314.59, 2333.67],
				[2314.68, 2310.59, 2296.58, 2320.96],
				[2309.16, 2286.6, 2264.83, 2333.29],
				[2282.17, 2263.97, 2253.25, 2286.33],
				[2255.77, 2270.28, 2253.31, 2276.22],
				[2269.31, 2278.4, 2250, 2312.08],
				[2267.29, 2240.02, 2239.21, 2276.05],
				[2244.26, 2257.43, 2232.02, 2261.31],
				[2257.74, 2317.37, 2257.42, 2317.86],
				[2318.21, 2324.24, 2311.6, 2330.81],
				[2321.4, 2328.28, 2314.97, 2332],
				[2334.74, 2326.72, 2319.91, 2344.89],
				[2318.58, 2297.67, 2281.12, 2319.99],
				[2299.38, 2301.26, 2289, 2323.48],
				[2273.55, 2236.3, 2232.91, 2273.55],
				[2238.49, 2236.62, 2228.81, 2246.87],
				[2229.46, 2234.4, 2227.31, 2243.95],
				[2234.9, 2227.74, 2220.44, 2253.42],
				[2232.69, 2225.29, 2217.25, 2241.34],
				[2196.24, 2211.59, 2180.67, 2212.59],
				[2215.47, 2225.77, 2215.47, 2234.73],
				[2224.93, 2226.13, 2212.56, 2233.04],
				[2236.98, 2219.55, 2217.26, 2242.48],
				[2218.09, 2206.78, 2204.44, 2226.26],
				[2199.91, 2181.94, 2177.39, 2204.99],
				[2169.63, 2194.85, 2165.78, 2196.43],
				[2195.03, 2193.8, 2178.47, 2197.51],
				[2181.82, 2197.6, 2175.44, 2206.03],
				[2201.12, 2244.64, 2200.58, 2250.11],
				[2236.4, 2242.17, 2232.26, 2245.12],
				[2242.62, 2184.54, 2182.81, 2242.62],
				[2187.35, 2218.32, 2184.11, 2226.12],
				[2213.19, 2199.31, 2191.85, 2224.63],
				[2203.89, 2177.91, 2173.86, 2210.58],
				[2170.78, 2174.12, 2161.14, 2179.65],
				[2179.05, 2205.5, 2179.05, 2222.81],
				[2212.5, 2231.17, 2212.5, 2236.07],
				[2227.86, 2235.57, 2219.44, 2240.26],
				[2242.39, 2246.3, 2235.42, 2255.21],
				[2246.96, 2232.97, 2221.38, 2247.86],
				[2228.82, 2246.83, 2225.81, 2247.67],
				[2247.68, 2241.92, 2231.36, 2250.85],
				[2238.9, 2217.01, 2205.87, 2239.93],
				[2217.09, 2224.8, 2213.58, 2225.19],
				[2221.34, 2251.81, 2210.77, 2252.87],
				[2249.81, 2282.87, 2248.41, 2288.09],
				[2286.33, 2299.99, 2281.9, 2309.39],
				[2297.11, 2305.11, 2290.12, 2305.3],
				[2303.75, 2302.4, 2292.43, 2314.18],
				[2293.81, 2275.67, 2274.1, 2304.95],
				[2281.45, 2288.53, 2270.25, 2292.59],
				[2286.66, 2293.08, 2283.94, 2301.7],
				[2293.4, 2321.32, 2281.47, 2322.1],
				[2323.54, 2324.02, 2321.17, 2334.33],
				[2316.25, 2317.75, 2310.49, 2325.72],
				[2320.74, 2300.59, 2299.37, 2325.53],
				[2300.21, 2299.25, 2294.11, 2313.43],
				[2297.1, 2272.42, 2264.76, 2297.1],
				[2270.71, 2270.93, 2260.87, 2276.86],
				[2264.43, 2242.11, 2240.07, 2266.69],
				[2242.26, 2210.9, 2205.07, 2250.63],
				[2190.1, 2148.35, 2126.22, 2190.1]
			]
		}]
	},
	"tips": ""
}
export default {
	pickerArray,
	pickerArrayF,
	swiperInfo,
	tagDataList,
	productList,
	newsData,
	charts,
	
	carouselList,
	cartList,
	detailData,
	lazyLoadList,
	userInfo,
	shareList,
	goodsList,
	orderList,
	cateList
}
