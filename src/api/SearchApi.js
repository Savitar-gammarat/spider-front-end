import axios from '@/utils/request'

export default {
	get(){
		return axios.get('search')
	},
	post(search_message){
		return axios.post('search',{search_message:search_message})
	}
}