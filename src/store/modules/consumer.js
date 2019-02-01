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
			let temporaryList = []
			state.customization.forEach(value => {
				state.publishList.forEach(value1 => {
					if (value1.name === value){
						temporaryList.push(value1)
					}
				})
			})
			state.publishList = temporaryList
		}
	},
	actions: {

	},
	getters:{
		sortList:state=>{
			let items = []
			state.publishList.forEach(value => {
				items.push(value.name)
			})
			return items
		}
	}
}