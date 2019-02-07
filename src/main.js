import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import echarts from 'echarts'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'material-design-icons/iconfont/material-icons.css'
import Vuelidate from 'vuelidate'
import common from './utils/common'
import axios from './utils/request'
import api from './apiList'
Vue.prototype.$echarts = echarts
Vue.prototype.$common = common
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(Vuelidate)

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})
//全局过滤器文件
import * as custom from './utils/filter'
Object.keys(custom).forEach(key => {
	Vue.filter(key, custom[key])
})

new Vue({
	router,
	store,
	axios,
	render: h => h(App)
}).$mount('#app')
