import axios from '@/utils/request'

export default {
	get(keyword){
		return axios.get('keywordsanalysis',{params:{keyword:keyword}})
	},
	post(site_id){
		return axios.post('keywordsanalysis',{site_id:site_id})
	}
}