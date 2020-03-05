import axios from '@/utils/request'

export default {
	get(seg){
		return axios.get('search',{params:{seg:seg}})
	},
	post(search_message){
		return axios.post('search',{search_message:search_message})
	},
	put(id) {
		return axios.put('search',{news_id:id})
	}
}