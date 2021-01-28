import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/modules/user'
import moduleA from '@/store/modules/cart'
import moduleB from '@/store/modules/products'

Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		
	},
	getters:{
		
	},
	mutations:{
		
	},
	actions:{
		
	},
	modules:{
		user,
		moduleA,
		moduleB
	}
})
export default store