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
			state.userName=user.mobile || '';
			state.hasLogin = true;
			state.userId = user.id || '';
			state.userInfo = user;
			//state.token = user.token || '';
			/* uni.setStorage({//缓存用户登陆状态 App.vue中也可运用
			    key: 'userInfo',  
			    data: provider  
			}) */
		},
		logout(state,user){
			state.userName = "";
		    state.hasLogin = false;
		    state.userId = '';
		    state.token = '';
			/* uni.removeStorage({
			    key: 'userInfo'  
			}) */
		},
		//更新token
		setToken(state, data){
			const {token, tokenExpired} = data;
			state.token = token;
			uni.setStorageSync('uni_id_token', token);
			uni.setStorageSync('uni_id_token_expired', tokenExpired);
			
			/* this.dispatch('getUserInfo'); //更新用户信息
			this.dispatch('getCartCount');//更新购物车数量
			uni.$emit('refreshCart');//刷新购物车
			this.dispatch('getOrderCount'); //更新订单数量 */
		}
    },
    actions: { 
		
    }
}