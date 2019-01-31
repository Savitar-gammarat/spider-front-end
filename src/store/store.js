import Vue from 'vue'
import Vuex from 'vuex'
import consumer from './modules/consumer'
import user from './modules/user'
import business from './modules/business'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		user,
		business,
		consumer
	}
})
