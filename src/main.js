import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'material-design-icons/iconfont/material-icons.css'
import common from './utils/common'
import axios from './utils/request'
Vue.prototype.$common = common
Vue.config.productionTip = false
Vue.use(VueMaterial)
new Vue({
	router,
	store,
	axios,
	render: h => h(App)
}).$mount('#app')
