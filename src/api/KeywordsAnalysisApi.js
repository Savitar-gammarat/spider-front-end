import axios from '@/utils/request'

export default {
	get(keyword){
		return axios.get('keywordsanalysis',{params:{keyword:keyword}})
	},
	post(site_id, start_time, end_time){
		return axios.post('keywordsanalysis',{site_id:site_id, start_time:start_time, end_time:end_time})
	}
}