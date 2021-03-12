import Vue from 'vue'
import App from './App'
import Json from './Json' //测试虚拟数据
import store from './store' //引入vuex
// 注册全局组件
import {request_ssm} from 'common/js/request_ssm.js'
import {request} from 'common/js/request.js'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import {
	msg,
	prePage,
	throttle
} from '@/common/js/util'

//
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

Vue.prototype.$api = {json};
import mixin from './common/mixin/mixin'
Vue.mixin(mixin) 

Vue.prototype.$request_ssm=request_ssm;
Vue.prototype.$request=request;
Vue.prototype.$util = {
	msg,
	prePage,
	throttle
}
Vue.prototype.$store = store;//把vuex定义成全局组件
Vue.component('mescroll-body', MescrollBody)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	//挂载,把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
	store
})
app.$mount()
