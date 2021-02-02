export default {
    state: {
        forceLogin:true,//是否需要强制登录
        hasLogin:false,//已经登录
        userName:"",
        userId:"",
        userInfo: {
			
		},
        token:""
    },
    getters: {

    },
    mutations: {
		login(state,user){
			state.userName=user.username || '';
			state.hasLogin = true;
			state.userId = user.id || '';
			state.token = user.token || '';
			/* uni.setStorage({//缓存用户登陆状态 App.vue中也可运用
			    key: 'userInfo',  
			    data: provider  
			}) */
		},
		logout(user){
			state.userName = "";
		    state.hasLogin = false;
		    state.userId = '';
		    state.token = '';
			/* uni.removeStorage({
			    key: 'userInfo'  
			}) */
		}
    },
    actions: { 

    }
}