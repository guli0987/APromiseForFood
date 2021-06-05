// #ifndef MP-WEIXIN
/* 非小程序端 */
export default {
	components: {
		/* shareToFriends */
	},
	mixins: [],
	data() {
		return {
			webviewToGithub:false,
			webviewToGithubURL:'',
			sysSettingsList:[
				{
					"title":"通知",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffnotice'
					},
					"link":"",
					"code":1
				},
				{
					"title":"网络",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffnetwork'
					},
					"link":"",
					"code":2
				},
				{
					"title":"亮度",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffbrightness'
					},
					"link":"",
					"code":3
				},
				{
					"title":"夜间模式",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffnightmode2'
					},
					"link":"",
					"code":4
				},
				{
					"title":"布局",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apfflayout'
					},
					"link":"",
					"code":5
				},
				{
					"title":"其它",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffother'
					},
					"link":"",
					"code":6,
					"children":[
						{
							"title":"缓存清理",
							"extraIcon": {
								color: '#000000',
								size: '16',
								type: 'apffcache'},
							"link":"",
							"code":60
						},
						{
							"title":"省流量模式",
							"extraIcon": {
								color: '#000000',
								size: '16',
								type: 'apffflow'},
							"link":"",
							"code":61
						}]
				},
				{
					"title":"去评价",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffevaluation'
					},
					"link":"",
					"code":7
				},
				{
					"title":"分享给好友",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffshare'
					},
					"link":"",
					"code":8
				},
				{
					"title":"开源许可",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffopensource'
					},
					"link":"",
					"code":9
				},
				{
					"title":"隐私协议",
					"extraIcon": {
						color: '#000000',
						size: '16',
						type: 'apffprivacy'
					},
					"link":"",
					"code":10
				}

			]
		}
	},
	computed: {
		
	},
	methods: {
		setNetWork(){
			this.navTo('/pages/sysset/network',{noCheckLogin:true});
		},
		setScreenBrightness(){
			this.navTo('/pages/sysset/screenBrightness',{noCheckLogin:true});
		},
		setOpenSourceLicense(){
			const url='https://github.com/guli0987/APromiseForFood';
			//const url='https://www.baidu.com';
			this.navTo('/pages/sysset/web-view?url='+url,{noCheckLogin:true});
		},
		setShareToFriends(){
			this.closeDrawer('drawer_showLeft');
			this.$refs.popupShareToFriends.open();
			
		},
		setToEvaluation(){//去评价
			// #ifdef APP-PLUS
			var appurl;  
			if (plus.os.name=="Android") {  
				appurl = "market://details?id=io.dcloud.HelloH5"; //由于hello uni-app没有上Android应用商店，所以此处打开了另一个示例应用  
			}else{  
				appurl = "itms-apps://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8";  
			}  
			if (typeof(marketPackageName)=="undefined") {  
				plus.runtime.openURL(appurl, function(res) {  
					console.log(res);  
				});  
			} else{//强制指定某个Android应用市场的包名，通过这个包名启动指定app  
				if (plus.os.name=="Android") {  
					plus.runtime.openURL(appurl, function(res) {  
						plus.nativeUI.alert("本机没有安装应用宝");  
					},marketPackageName);  
				} else{  
					plus.nativeUI.alert("仅Android手机才支持应用宝");  
				}  
			}  
			
			// #endif
		},
		sysSettingsClick(e){
			console.log("设置：e: " + JSON.stringify(e));
			/* uni.showToast({
				icon: 'none',
				title: "你点击了设置选项"
			}) */
			let code=e;
			switch(code){
				case 1:
					
					break;
				case 2://网络设置
					this.setNetWork();
					break;
				case 3:
					this.setScreenBrightness();
					break;
				case 4:
					
					break;
				case 5:
					
					break;
				case 6:
					
					break;
				case 7:
					this.setToEvaluation();
					break;
				case 8:
					this.setShareToFriends();
					break;
				case 9:
					this.setOpenSourceLicense();
					break;
				case 10:
					
					break;
				case 11:
					
					break;
				default:
					console.log("error:"+code);
					break;
			}
		}
	},
}
// #endif