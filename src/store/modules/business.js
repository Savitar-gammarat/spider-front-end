export default {
	namespaced: true,
	state: {
		news:[],
		newsLength:null,
		loginAnalysis:null,
		fieldAnalysis:null,
		siteAnalysis:null,
		preNews:null
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
		},
		setPreNews(state, length){
			state.preNews = length
		}
	},
	actions: {
		timeoutSetNews(context, news){
			setTimeout(()=>{context.commit('setNews',news)},1000)
		},
	}
}