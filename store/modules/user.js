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
		getUserAllInfo(state){
			return {
				forceLogin:state.forceLogin,
				hasLogin:state.hasLogin,
				userName:state.userName,
				userId:state.userId,
				userInfo:state.userInfo
			};
		}
    },
    mutations: {
		//更新state数据
		//你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）,在这里为param 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
		setStateAttr(state, param){
			if(param instanceof Array){
				for(let item of param){
					state[item.key] = item.val;
				}
			}else{
				state[param.key] = param.val;
			}
		},
		login(state,user,id){
			state.userName=user.mobile || '';
			state.hasLogin = true;
			state.userId = user._id || id;
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
		//更新用户信息
		async getUserInfo({state, commit}){
			/* const res = await request('user', 'get', {}, {
				checkAuthInvalid: false
			});
			if(res.status === 1){
				const userInfo = res.data;
				commit('setStateAttr', {
					key: 'userInfo',
					val: userInfo
				})
			}
			console.log(res); */
		}
    }
}