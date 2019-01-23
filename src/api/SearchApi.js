import axios from '@/utils/request'

export default {
	get(){
		axios.get('search')
	},
	post(search_message){
		axios.post('search',{search_message:search_message})
	}
}