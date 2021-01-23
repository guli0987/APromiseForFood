import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		forceLogin:false,//是否需要强制登录
		hasLogin:false,//已经登录
		userName:"",
		userId:"",
		userInfo: {},
		token:"",
		pointId:""
	},
	getters: {},
	mutations:{
		login(state,user){
			state.userName=user.username || '';
			state.hasLogin = true;
			state.userId = user.id || '';
			state.token = user.token || '';
			state.pointId = user.pointId || '';
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
		    state.pointId = '';
			/* uni.removeStorage({
			    key: 'userInfo'  
			}) */
		}
	},
	actions:{}
})


export default store