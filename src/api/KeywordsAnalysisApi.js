import axios from '@/utils/request'

export default {
	get(){
		return axios.get('keywordsanalysis')
	},
	post(site_id){
		return axios.post('keywordsanalysis',{site_id:site_id})
	}
}