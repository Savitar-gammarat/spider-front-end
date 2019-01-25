import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'material-design-icons/iconfont/material-icons.css'
import Vuelidate from 'vuelidate'
import common from './utils/common'
import axios from './utils/request'
import api from './apiList'
Vue.prototype.$common = common
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(Vuelidate)
new Vue({
	router,
	store,
	axios,
	render: h => h(App)
}).$mount('#app')
