export default {
	namespaced: true,
	state: {
		news:[],
		newsLength:null,
		loginAnalysis:null,
		fieldAnalysis:null,
		siteAnalysis:null
	},
	mutations: {
		setNews(state, news){
			state.news = news
		},
		setNewsLength(state, length){
			state.newsLength = length
		},
		setLoginAnalysis(state, analysis){
			state.loginAnalysis = analysis
		},
		setFieldAnalysis(state, analysis){
			state.fieldAnalysis = analysis
		},
		setSiteAnalysis(state, analysis){
			state.siteAnalysis = analysis
		}
	},
	actions: {
		timeoutSetNews(context, news){
			setTimeout(()=>{context.commit('setNews',news)},1000)
		},
	}
}