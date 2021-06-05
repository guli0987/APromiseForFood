【product/getProductStockInfo】：
{"code":100,
"msg":"处理成功",
"data":{
	"result":"{
		\"productId\":1,
		\"productMonthSellCount\":149,
		\"productStockCount\":20,
		\"productStockId\":1,
		\"productTotalSellCount\":2958}"}}


productInfoList:[{
					"category_id": "1", // 所属窗口
					"goods_sn": "20210225828", // 商品的唯一货号
					"name": "手抓饼 传统美食", // 商品名称
					"keywords": "饼,传统美食", // 商品关键字，为搜索引擎收录使用
					// 商品详细描述
					"goods_desc": "手抓饼是从葱抓饼演变而来，起源于中国台湾地区。2004年在台湾夜市被发现并于2005年正式从台湾引进至内地。新鲜出炉后的手抓饼，千层百叠，层如薄纸，用手抓之，面丝千连，其外层金黄酥脆，内层柔软白嫩，一股葱油与面筋的香味扑鼻而来，让每位食客来不及等待，抓起就吃。手抓饼至今一直风靡全国，可搭配鸡蛋、猪肉叉烧、牛肉饼、粮心香肠、藤椒鸡排、培根、方火腿、鸡柳、蔬菜等辅料，也可搭配酱爆汁、孜然香辣酱、番茄沙司、麻辣汁、甜辣酱、甜味沙拉酱、黑椒酱、排骨酱等酱料，香酥可口，老少皆宜。", 
					"goods_thumb": "https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg", // 商品缩略图，用于在列表或搜索结果中预览显示
					"goods_banner_imgs": "", // 商品详情页的banner图地址
					"goods_price": "9999", // 商品价格
					"remain_count": "999999", // 库存数量
					"month_sell_count": "640", // 月销量
					"total_sell_count": "28512", // 总销量
					"comment_count": "980021", // 累计评论数
					"is_real": true, // 是否实物
					"is_on_sale": true, // 是否上架销售
					"is_alone_sale": true, // 是否能单独销售；如果不能单独销售，则只能作为某商品的配件或者赠品销售
					"is_best": false, // 是否精品
					"is_new": true, // 是否新品
					"is_hot": false, // 是否热销
					"add_date": "2020-8-26 09:37:21", // 上架时间
					"last_modify_date": "2020-8-26 09:37:21", // 最后修改时间
					"seller_note": "", //商家备注，仅商家可见
					"shop_name": "京东商城网上自营专卖店",
					"tag": ["饼", "传统美食"],
					"goods_tip": "自营"
				}],

【product/getProductInfo】：
{"code":100,
"msg":"处理成功",
"data":{
	"result":
	"{
		\"productAddDate\":1620498048000,
		\"productAloneSale\":1,
		\"productBest\":1,
		\"productGoodsBannerImgs\":\"banner图\",
		\"productGoodsDesc\":\"这是一个好的产品\",
		\"productGoodsPrice\":67.7,
		\"productGoodsSn\":\"1231323\",
		\"productGoodsThumb\":\"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg\",
		\"productGoodsType\":\"食物\",
		\"productHot\":1,
		\"productId\":1,
		\"productKeywords\":\"面食\",
		\"productLastModifyDate\":1620498048000,
		\"productName\":\"红烧牛肉面\",
		\"productNew\":1,
		\"productOnSale\":1,
		\"productReal\":1,
		\"productSellerNote\":\"备注\",
		\"productShowId\":1,
		\"productTag\":\"面\"}"}}


本地服务器请求:
{"code":100,
"msg":"处理成功",
"data":
{
	"result":
		"[{\"productShopId\":1,\"productShowDesc\":\"好吃劲道\",\"productShowExtra\":\"还好\",\"productShowId\":1,\"productShowPrice\":10.0,\"productShowTitle\":\"牛肉面\"},{\"productShopId\":1,\"productShowDesc\":\"乌拉乌拉\",\"productShowExtra\":\"hahahahah\",\"productShowId\":3,\"productShowImg\":\"无图无真相\",\"productShowPrice\":67.9,\"productShowTitle\":\"鹅鹅鹅\"}]"}}

【本地请求测试request_ssm返回】:[
	null,
	{
		"data":{
			"code":100,
			"msg":"处理成功",
			"data":{
				"result":[
					{"cityId":1,"cityName":"洛阳","cityCode":null},
					{"cityId":2,"cityName":"郑州","cityCode":null},
					{"cityId":3,"cityName":"开封","cityCode":null},
					],
				},
			},
			"statusCode":200,
			"header":{"content-type":"application/json;charset=UTF-8"},
			"errMsg":"request:ok"
		},
	]
【success】:{
	"data":{
		"code":100,
		"msg":"处理成功",
		"data":{
			"result":[
				{"cityId":1,"cityName":"洛阳","cityCode":null},
				{"cityId":2,"cityName":"郑州","cityCode":null},
				{"cityId":3,"cityName":"开封","cityCode":null},
				],
			},
		},
		"statusCode":200,
		"header":{"content-type":"application/json;charset=UTF-8"},
		"errMsg":"request:ok"
	}

记录注册返回结果:
{
	"success":true,
	"header":{"x-fc-invocation-service-version":"LATEST","x-serverless-runtime-version":"1.1.1","date":"Tue, 02 Mar 2021 13:10:34 GMT","x-serverless-cold-boot":"true","x-fc-invocation-duration":"549","x-fc-code-checksum":"11920753897763040351","access-control-expose-headers":"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version","content-disposition":"attachment","x-serverless-request-id":"ac1412a01614690633221658475","content-length":"860","x-fc-request-id":"e06c8ba6-7e51-490f-8a78-77d1646bcc20","x-fc-max-memory-usage":"38.51","content-type":"application/json"},
	"result":{
		"code":0,
		"msg":"注册成功",
		"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDNlMzk0YTZhM2VjODAwMDFiYWMyYjYiLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiYjRiZTQzOWZmMmY2ZjI2NDFmZTcxNGQ3ODY4NTRlMzUiLCJpYXQiOjE2MTQ2OTA2MzQsImV4cCI6MTYxNDY5NzgzNH0.7VpdDyaXar-VCZhud10EY9YrvOHhhDOL-cCiti_iMG0",
		"tokenExpired":1614697834425,
		"uid":"603e394a6a3ec80001bac2b6",
		"type":"register",
		"userInfo":{
			"mobile":"18436097288",
			"mobile_confirmed":1,
			"register_ip":"183.208.52.11",
			"register_date":1614690634337,
			"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDNlMzk0YTZhM2VjODAwMDFiYWMyYjYiLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiYjRiZTQzOWZmMmY2ZjI2NDFmZTcxNGQ3ODY4NTRlMzUiLCJpYXQiOjE2MTQ2OTA2MzQsImV4cCI6MTYxNDY5NzgzNH0.7VpdDyaXar-VCZhud10EY9YrvOHhhDOL-cCiti_iMG0"
		},
		"message":"注册成功",
		"mobile":"18436097288",
	},
	"requestId":"ac1412a01614690633221658475",
}

记录登录返回结果:{
	"success":true,
	"header":{"x-fc-code-checksum":"11920753897763040351","access-control-expose-headers":"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version","x-fc-invocation-service-version":"LATEST","content-disposition":"attachment","x-serverless-request-id":"ac140a3a1614690908232537075","x-serverless-runtime-version":"1.1.1","content-length":"1227","date":"Tue, 02 Mar 2021 13:15:08 GMT","x-fc-request-id":"22f0dae5-94ec-443a-9615-0dfb110b9fb6","x-fc-invocation-duration":"203","x-fc-max-memory-usage":"39.36","content-type":"application/json"},
	"result":{
		"code":0,
		"msg":"登录成功",
		"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDNlMzk0YTZhM2VjODAwMDFiYWMyYjYiLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiYjRiZTQzOWZmMmY2ZjI2NDFmZTcxNGQ3ODY4NTRlMzUiLCJpYXQiOjE2MTQ2OTA5MDgsImV4cCI6MTYxNDY5ODEwOH0.BcAdmf1kOvXCKv1ACuRJ_bXSnEk4kALSEXdeyzgCBFk",
		"uid":"603e394a6a3ec80001bac2b6",
		"type":"login",
		"userInfo":{
			"_id":"603e394a6a3ec80001bac2b6",
			"mobile":"18436097288",
			"mobile_confirmed":1,
			"register_ip":"183.208.52.11",
			"register_date":1614690634337,
			"token":["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDNlMzk0YTZhM2VjODAwMDFiYWMyYjYiLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiYjRiZTQzOWZmMmY2ZjI2NDFmZTcxNGQ3ODY4NTRlMzUiLCJpYXQiOjE2MTQ2OTA2MzQsImV4cCI6MTYxNDY5NzgzNH0.7VpdDyaXar-VCZhud10EY9YrvOHhhDOL-cCiti_iMG0","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDNlMzk0YTZhM2VjODAwMDFiYWMyYjYiLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiYjRiZTQzOWZmMmY2ZjI2NDFmZTcxNGQ3ODY4NTRlMzUiLCJpYXQiOjE2MTQ2OTA5MDgsImV4cCI6MTYxNDY5ODEwOH0.BcAdmf1kOvXCKv1ACuRJ_bXSnEk4kALSEXdeyzgCBFk"],
			"last_login_date":1614690908774,
			"last_login_ip":"183.208.52.11",
		},
		"tokenExpired":1614698108774,
		"message":"登录成功",
		"mobile":"18436097288",
		},
		"requestId":"ac140a3a1614690908232537075",
	}

token校验结果：{
	"success":true,
	"header":{"x-fc-invocation-service-version":"LATEST","x-serverless-runtime-version":"1.1.1","date":"Tue, 02 Mar 2021 14:33:49 GMT","x-serverless-cold-boot":"true","x-fc-invocation-duration":"147","x-fc-code-checksum":"11920753897763040351","access-control-expose-headers":"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version","content-disposition":"attachment","x-serverless-request-id":"ac14173a1614695628079774374","content-length":"917","x-fc-request-id":"fbfc9905-a641-470e-b1e3-574eaf56869b","x-fc-max-memory-usage":"35.64","content-type":"application/json"},
	"result":{
		"code":0,
		"msg":"token校验通过",
		"uid":"603e394a6a3ec80001bac2b6",
		"role":[],
		"permission":[],
		"userInfo":{
			"_id":"603e394a6a3ec80001bac2b6",
			"mobile":"18436097288",
			"mobile_confirmed":1,
			"register_ip":"183.208.52.11",
			"register_date":1614690634337,
			"token":["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDNlMzk0YTZhM2VjODAwMDFiYWMyYjYiLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiYjRiZTQzOWZmMmY2ZjI2NDFmZTcxNGQ3ODY4NTRlMzUiLCJpYXQiOjE2MTQ2OTA2MzQsImV4cCI6MTYxNDY5NzgzNH0.7VpdDyaXar-VCZhud10EY9YrvOHhhDOL-cCiti_iMG0","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDNlMzk0YTZhM2VjODAwMDFiYWMyYjYiLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiYjRiZTQzOWZmMmY2ZjI2NDFmZTcxNGQ3ODY4NTRlMzUiLCJpYXQiOjE2MTQ2OTA5MDgsImV4cCI6MTYxNDY5ODEwOH0.BcAdmf1kOvXCKv1ACuRJ_bXSnEk4kALSEXdeyzgCBFk"],
			"last_login_date":1614690908774,
			"last_login_ip":"183.208.52.11",
		},
		"message":"token校验通过",
	},
	"requestId":"ac14173a1614695628079774374",
}














云函数回调：{
	"success":true,"header":{"x-fc-invocation-service-version":"LATEST","x-serverless-runtime-version":"1.1.1","date":"Fri, 05 Feb 2021 09:06:38 GMT","x-serverless-cold-boot":"true","x-fc-invocation-duration":"25","x-fc-code-checksum":"11920753897763040351","access-control-expose-headers":"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version","content-disposition":"attachment","x-serverless-request-id":"ac140e311612515996850785074","content-length":"16","x-fc-request-id":"90f76a31-b4c4-4a6e-81e5-a6f84a3d1d97","x-fc-max-memory-usage":"35.78","content-type":"application/json"},
	"result":null,"requestId":"ac140e311612515996850785074",
	}
userinfo.vue:149 {
	"avatar":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-e9cb8f70-7a6a-4e75-afbe-d75f1e4b3edb/0663f1d2-6692-416d-8d9f-41e37d5478a3.jpg",
	"nickname":"小丑",
	"gender":1,
	"mobile":"18436097288",
	"comment":"helloWorld"}
	-【反馈】-{"success":true,"header":{"x-fc-invocation-service-version":"LATEST","x-serverless-runtime-version":"1.1.1","date":"Fri, 05 Feb 2021 09:06:38 GMT","x-serverless-cold-boot":"true","x-fc-invocation-duration":"25","x-fc-code-checksum":"11920753897763040351","access-control-expose-headers":"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version","content-disposition":"attachment","x-serverless-request-id":"ac140e311612515996850785074","content-length":"16","x-fc-request-id":"90f76a31-b4c4-4a6e-81e5-a6f84a3d1d97","x-fc-max-memory-usage":"35.78","content-type":"application/json"},"result":null,"requestId":"ac140e311612515996850785074"}


【反馈】{
	"success":true,
	"header":{"x-fc-invocation-service-version":"LATEST","x-serverless-runtime-version":"1.1.1","date":"Fri, 05 Feb 2021 09:02:11 GMT","x-serverless-cold-boot":"true","x-fc-invocation-duration":"22","x-fc-code-checksum":"11920753897763040351","access-control-expose-headers":"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version","content-disposition":"attachment","x-serverless-request-id":"ac1408a41612515730922500475","content-length":"16","x-fc-request-id":"c7e2d034-ea41-4877-acb7-6aff52f26393","x-fc-max-memory-usage":"35.59","content-type":"application/json"},
	"result":null,"requestId":"ac1408a41612515730922500475",
	}

云函数回调：{
	"success":true,
	"header":{"x-fc-invocation-service-version":"LATEST","x-serverless-runtime-version":"1.1.1","date":"Tue, 02 Feb 2021 04:40:54 GMT","x-serverless-cold-boot":"true","x-fc-invocation-duration":"1221","x-fc-code-checksum":"11920753897763040351","access-control-expose-headers":"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version","content-disposition":"attachment","x-serverless-request-id":"ac1412331612240852016678175","content-length":"230","x-fc-request-id":"1c2ef387-2f93-407c-b017-6b5bfaf8f7e5","x-fc-max-memory-usage":"37.71","content-type":"application/json"},
	"result":{
		"code":50301,
		"msg":"验证码发送失败, errCode: 4001 | errMsg: 短信发送失败：apiKey 不存在",
		"message":"验证码发送失败, errCode: 4001 | errMsg: 短信发送失败：apiKey 不存在",
		},
	"requestId":"ac1412331612240852016678175",
	}
{
	"code": 0,
	"email": undefined,
	"mobile": "18436097288"
}
云函数回调：{
	"success":true,
	"header":{"x-fc-invocation-service-version":"LATEST","x-serverless-runtime-version":"1.1.1","date":"Tue, 02 Feb 2021 06:07:17 GMT","x-serverless-cold-boot":"true","x-fc-invocation-duration":"653","x-fc-code-checksum":"11920753897763040351","access-control-expose-headers":"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version","content-disposition":"attachment","x-serverless-request-id":"ac1412331612246036092132174","content-length":"59","x-fc-request-id":"9d7b5232-1006-4edd-8adf-e18f5917bb5b","x-fc-max-memory-usage":"37.73","content-type":"application/json"},
	"result":{"code":0,"mobile":"18436097288"},
	"requestId":"ac1412331612246036092132174",
	},
	
	
	
{
"success":true,
"header":{"x-fc-invocation-service-version":"LATEST","x-serverless-runtime-version":"1.1.1","date":"Tue, 02 Feb 2021 07:04:20 GMT","x-serverless-cold-boot":"true","x-fc-invocation-duration":"333","x-fc-code-checksum":"11920753897763040351","access-control-expose-headers":"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version","content-disposition":"attachment","x-serverless-request-id":"ac140f501612249458953245375","content-length":"861","x-fc-request-id":"a87cdab1-97d7-4a3d-8204-0782ebe109ab","x-fc-max-memory-usage":"38.15","content-type":"application/json"},
"result":{
	"code":0,
	"msg":"注册成功",
	"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDE4Zjk3NGY4MGMwNTAwMDFiZGQ0ZGQiLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiMGI5MmYyNTE3ZWQ2MTI2ZWU5ZTFkNDFiNzg3MzFjOWEiLCJpYXQiOjE2MTIyNDk0NjAsImV4cCI6MTYxMjI1NjY2MH0.GeeWRb7pfO-5aVF5fVszqGSI7dQpV1-Fq58btdhOdM0",
	"tokenExpired":1612256660238,
	"uid":"6018f974f80c050001bdd4dd",
	"type":"register",
"userInfo":{
	"mobile":"18436097288",
	"mobile_confirmed":1,
	"register_ip":"183.208.53.133",
	"register_date":1612249460186,
	"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDE4Zjk3NGY4MGMwNTAwMDFiZGQ0ZGQiLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiMGI5MmYyNTE3ZWQ2MTI2ZWU5ZTFkNDFiNzg3MzFjOWEiLCJpYXQiOjE2MTIyNDk0NjAsImV4cCI6MTYxMjI1NjY2MH0.GeeWRb7pfO-5aVF5fVszqGSI7dQpV1-Fq58btdhOdM0"
	},
"message":"注册成功",
"mobile":"18436097288",
},
"requestId":"ac140f501612249458953245375"}

云函数回调：{
	"success":true,
	"header":{"x-fc-invocation-service-version":"LATEST","x-serverless-runtime-version":"1.1.1","date":"Tue, 02 Feb 2021 08:54:51 GMT","x-serverless-cold-boot":"true","x-fc-invocation-duration":"322","x-fc-code-checksum":"11920753897763040351","access-control-expose-headers":"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version","content-disposition":"attachment","x-serverless-request-id":"ac1407431612256089961374075","content-length":"1500","x-fc-request-id":"c6e5aefa-f798-4bd5-8c61-d09afef63834","x-fc-max-memory-usage":"37.81","content-type":"application/json"},
	"result":{
		"code":0,"msg":"登录成功",
		"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDE5MTEzZjhhYzRmYjAwMDFmNTViZTciLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiMGI5MmYyNTE3ZWQ2MTI2ZWU5ZTFkNDFiNzg3MzFjOWEiLCJpYXQiOjE2MTIyNTYwOTEsImV4cCI6MTYxMjI2MzI5MX0.S7PU7rKCUHjRVZyRpwzGCpTckD5iRiZo5WiLDK-j8pk",
		"uid":"6019113f8ac4fb0001f55be7",
		"type":"login",
	"userInfo":{
		"_id":"6019113f8ac4fb0001f55be7",
		"mobile":"18436097288",
		"mobile_confirmed":1,
		"register_ip":"183.208.53.133",
		"register_date":1612255551746,
		"token":["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDE5MTEzZjhhYzRmYjAwMDFmNTViZTciLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiMGI5MmYyNTE3ZWQ2MTI2ZWU5ZTFkNDFiNzg3MzFjOWEiLCJpYXQiOjE2MTIyNTU1NTEsImV4cCI6MTYxMjI2Mjc1MX0.qot33SGzY_YmWPJKMj5dqVBU9cjPu3FTfarFtj41-Sc","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDE5MTEzZjhhYzRmYjAwMDFmNTViZTciLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiMGI5MmYyNTE3ZWQ2MTI2ZWU5ZTFkNDFiNzg3MzFjOWEiLCJpYXQiOjE2MTIyNTU4NzQsImV4cCI6MTYxMjI2MzA3NH0.bBT0J-N7L8f6WjA4vKPx-O3rLSBqzM9A_0LAY1oRVG0","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDE5MTEzZjhhYzRmYjAwMDFmNTViZTciLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiMGI5MmYyNTE3ZWQ2MTI2ZWU5ZTFkNDFiNzg3MzFjOWEiLCJpYXQiOjE2MTIyNTYwOTEsImV4cCI6MTYxMjI2MzI5MX0.S7PU7rKCUHjRVZyRpwzGCpTckD5iRiZo5WiLDK-j8pk"],
		"last_login_date":1612256091142,
		"last_login_ip":"183.208.53.133",
	},
	"tokenExpired":1612263291142,"message":"登录成功","mobile":"18436097288"},"requestId":"ac1407431612256089961374075"}
	
login-reg.vue:137 {
	"code":0,
	"msg":"登录成功",
	"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDE5MTEzZjhhYzRmYjAwMDFmNTViZTciLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiMGI5MmYyNTE3ZWQ2MTI2ZWU5ZTFkNDFiNzg3MzFjOWEiLCJpYXQiOjE2MTIyNTYwOTEsImV4cCI6MTYxMjI2MzI5MX0.S7PU7rKCUHjRVZyRpwzGCpTckD5iRiZo5WiLDK-j8pk","uid":"6019113f8ac4fb0001f55be7","type":"login","userInfo":{"_id":"6019113f8ac4fb0001f55be7",
	"mobile":"18436097288",
	"mobile_confirmed":1,
	"register_ip":"183.208.53.133",
	"register_date":1612255551746,
	"token":["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDE5MTEzZjhhYzRmYjAwMDFmNTViZTciLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiMGI5MmYyNTE3ZWQ2MTI2ZWU5ZTFkNDFiNzg3MzFjOWEiLCJpYXQiOjE2MTIyNTU1NTEsImV4cCI6MTYxMjI2Mjc1MX0.qot33SGzY_YmWPJKMj5dqVBU9cjPu3FTfarFtj41-Sc","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDE5MTEzZjhhYzRmYjAwMDFmNTViZTciLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiMGI5MmYyNTE3ZWQ2MTI2ZWU5ZTFkNDFiNzg3MzFjOWEiLCJpYXQiOjE2MTIyNTU4NzQsImV4cCI6MTYxMjI2MzA3NH0.bBT0J-N7L8f6WjA4vKPx-O3rLSBqzM9A_0LAY1oRVG0","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDE5MTEzZjhhYzRmYjAwMDFmNTViZTciLCJyb2xlIjpbXSwicGVybWlzc2lvbiI6W10sImNsaWVudElkIjoiMGI5MmYyNTE3ZWQ2MTI2ZWU5ZTFkNDFiNzg3MzFjOWEiLCJpYXQiOjE2MTIyNTYwOTEsImV4cCI6MTYxMjI2MzI5MX0.S7PU7rKCUHjRVZyRpwzGCpTckD5iRiZo5WiLDK-j8pk"],"last_login_date":1612256091142,"last_login_ip":"183.208.53.133"},"tokenExpired":1612263291142,"message":"登录成功","mobile":"18436097288"}
	
	picker
	{
		"detail":{
			"value":[
				{"text":"一年级","value":"1-0"},
				{"text":"1.2班","value":"1-2","parent_value":"1-0"},
				],
			},
		}
		
token校验结果：{
	"success":true,
	"header":{"x-fc-invocation-service-version":"LATEST","x-serverless-runtime-version":"1.1.1","date":"Tue, 16 Mar 2021 17:16:33 GMT","x-serverless-cold-boot":"true","x-fc-invocation-duration":"63","x-fc-code-checksum":"11920753897763040351","access-control-expose-headers":"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version","content-disposition":"attachment","x-serverless-request-id":"ac140a3e1615914992085492574","content-length":"224","x-fc-request-id":"e054a747-57a7-4e7d-a30d-32dd8cc77d2c","x-fc-max-memory-usage":"35.30","content-type":"application/json"},
	"result":{
		"code":30203,
		"msg":"token已过期，请重新登录",
		"err":{
			"name":"TokenExpiredError",
			"message":"jwt expired",
			"expiredAt":"2021-03-02T17:31:54.000Z"
		},
		"message":"token已过期，请重新登录"
		},
		"requestId":"ac140a3e1615914992085492574"
	}
	
curPageData:[
	{
		"areaCode":210304,
		"areaId":413,
		"areaName":"立山区",
		"productShopList":[],
	},
],

currentDataList:[
	{
		"areaCode":1046401,
		"productShopAvatar":"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
		"productShopExtra":"你好",
		"productShopHot":0,
		"productShopId":1,
		"productShopImg":"[
			{\"url\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png\"},
			{\"url\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png\"},
			{\"url\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png\"}, 
			{\"url\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png\"},
			{\"url\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png\"},
			{\"url\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png\"},
			{\"url\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png\"}, 
			{\"url\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png\"}, 
			{\"url\": \"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png\"}
			]",
		"productShopName":"410店铺"},
		]
		