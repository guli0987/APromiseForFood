import Vue from 'vue'
import App from './App'
import Json from './Json' //测试虚拟数据
import store from './store' //引入vuex
// 注册全局组件
import {request} from 'common/js/request.js'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"


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
Vue.prototype.$request=request;
Vue.prototype.$store = store;//把vuex定义成全局组件
Vue.component('mescroll-body', MescrollBody)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	//挂载
	store
})
app.$mount()