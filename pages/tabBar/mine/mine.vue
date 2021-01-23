<template>
	<view></view>
</template>
<script>
	//导入mapState方法
	import {
	    mapState 
	} from 'vuex';  
	export default{
		computed: {
			...mapState(['forceLogin','hasLogin','userName']),//对全局变量进行监控
		},
		data(){
			return{
				
			}
		},
		onLoad(){
				if(!this.hasLogin){
					uni.showModal({
						title:"登录提醒",
						content:"您还未登录，需要登录后才能正常使用",
						showCancel:!this.forceLogin,
						success: (res) => {
							if(res.confirm){
								if(this.forceLogin){
									uni.reLaunch({
										url:"../../public/login"
									});
								}else{
									uni.navigateTo({
										url:"../../public/login"
									});
								}
							}
						}
					});
				}
		},
	}
</script>
<style></style>