import axios from '@/utils/request'

export default {
	get(){
		return axios.get('fieldanalysis')
	},
	post(site_id){
		return axios.post('fieldanalysis',{site_id:site_id})
	}
}