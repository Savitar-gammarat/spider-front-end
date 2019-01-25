import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userInfo:null,
		news:[],
		newsLength:null
	},
	mutations: {
		setUserInfo(state, userInfo){
			state.userInfo = userInfo
		},
		setNews(state, news){
			state.news = news
		},
		setNewsLength(state, length){
			state.newsLength = length
		}
	},
	actions: {
		timeoutSetNews(context, news){
			setTimeout(()=>{context.commit('setNews',news)},1000)
		},
	},
	getters:{
		// countNews:state => {
		// 	return state.news.length
		// }
	}
})
