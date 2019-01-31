export default {
	namespaced: true,
	state: {
		userInfo:null,
	},
	mutations: {
		setUserInfo(state, userInfo){
			state.userInfo = userInfo
		},
	},
	actions: {

	}
}