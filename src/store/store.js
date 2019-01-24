import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userInfo:null,
		news:[]
	},
	mutations: {
		setUserInfo(state, userInfo){
			state.userInfo = userInfo
		},
		setNews(state, news){
			state.news = news
		}
	},
	actions: {

	},
	getters:{
		countNews:state => {
			return state.news.length
		}
	}
})
