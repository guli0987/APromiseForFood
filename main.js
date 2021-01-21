import Vue from 'vue'
import App from './App'
import Json from './Json' //测试虚拟数据
import {request} from 'common/js/request.js'
Vue.config.productionTip = false

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

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
