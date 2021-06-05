import Vue from 'vue'//引入Vue库
import App from './App'//引入App.vue
import Json from './Json' //测试虚拟数据
import store from './store' //引入vuex

// 注册全局组件
import {request_ssm} from 'common/js/request_ssm.js'
import {request} from 'common/js/request.js'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import {msg,prePage,throttle} from '@/common/js/util'
//import MinRouter from 'common/router/MinRouter.js';//路由管理
//import minRouter from 'common/router/router.js'//引入router文件

//本地数据模拟
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}
Vue.prototype.$api = {json};

//混入
import mixin from './common/mixin/mixin'
Vue.mixin(mixin) 

//服务器数据
Vue.prototype.$request_ssm=request_ssm;
Vue.prototype.$request=request;
Vue.prototype.$util = {
	msg,
	prePage,
	throttle
}
Vue.prototype.$store = store;//把vuex定义成全局组件
Vue.component('mescroll-body', MescrollBody)//全局注册mescroll-body组件，每个页面将可以直接使用该组件
//Vue.use(MinRouter)//

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({//创建Vue实例
    ...App,
	//挂载,把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
	store,
	//minRouter
})
app.$mount()//挂载Vue实例
/*
提示：
使用Vue.use引用插件，
使用Vue.prototype添加全局变量，
使用Vue.component注册全局组件。
无法使用vue-router，路由须在pages.json中进行配置。

*/
