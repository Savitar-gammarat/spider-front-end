export default {
	namespaced: true,
	state: {
		publishList:[],
		customization: []
	},
	mutations: {
		setPublishList(state, publishList){
			state.publishList = publishList
		},
		setCustomization(state,customization){
			state.customization = customization
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