export default {
	namespaced: true,
	state: {
		publishList:[],
		customization: [],
		searchNews: null,
		searching:false
	},
	mutations: {
		setPublishList(state, publishList){
			state.publishList = publishList
		},
		setCustomization(state,customization){
			state.customization = customization
		},
		addNews(state,json){
			state.publishList.forEach(value => {
				if (value.id === json["site_id"]){
					value.all_news = value.all_news.concat(json["more_news"])
				}
			})
		},
		setSearchNews(state, newsList){
			state.searchNews = newsList
		},
		changeSearchingStatus(state,status){
			state.searching = status
		}
	},
	actions: {

	},
	getters:{
		sortList:state=>{
			if (state.customization.length === 0){
				let items = []
				state.publishList.forEach(value => {
					items.push(value.name)
				})
				return items
			} else{
				return state.customization
			}

		},
		news:state=>{
			if (state.customization.length === 0) {
				return state.publishList
			}else {
				let temporaryList = []
				state.customization.forEach(value => {
					state.publishList.forEach(value1 => {
						if (value1.name === value){
							temporaryList.push(value1)
						}
					})
				})
				state.publishList = temporaryList
				return state.publishList
			}
		}
	}
}