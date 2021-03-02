<!-- 调用应用生命周期函数、配置全局样式、配置全局的存储globalData -->
<script>
	/* 应用生命周期仅可在App.vue中监听，在其它页面监听无效。 */
	export default {
		onLaunch: function() {
			console.log('App Launch,app启动 当uni-app 初始化完成时触发（全局只触发一次）')
		},
		onShow: function() {
			console.log('App Show,app展现在前台 当 uni-app 启动，或从后台进入前台显示')
		},
		onHide: function() {
			console.log('App Hide，app不再展现在前台 当 uni-app 从前台进入后台')
		},
		onError:function(){
			console.log('当 uni-app 报错时触发')
		},
		onUniNViewMessage:function(){
			console.log('对 nvue 页面发送的数据进行监听，可参考 nvue 向 vue 通讯')
		},
		onUnhandledRejection:function(){
			console.log('对未处理的 Promise 拒绝事件监听函数（2.8.1+）')
		},
		onPageNotFound:function(){
			console.log('页面不存在监听函数')
		},
		onThemeChange:function(){
			console.log('	监听系统主题变化')
		},
		/* 全局变量,js中操作globalData的方式如下： getApp().globalData.text = 'test' */
		// globalData: {  
		//             text: 'text'  
		//         }
	}
</script>

<style>
	/*每个页面公共css */
	
	/* @import url("./common/css/uni.css"); */
	/* 注意如果工程下同时有vue和nvue文件，全局样式的所有css会应用于所有文件，而nvue支持的css有限，编译器会在控制台报警，提示某些css无法在nvue中支持。此时需要把nvue不支持的css写在单独的条件编译里 */
	 /* #ifndef APP-PLUS-NVUE */
	    @import './common/css/common.css';
	    @import url("./common/css/icon.css");
	 /* #endif*/
</style>
