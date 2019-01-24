import axios from '@/utils/request'

export default {
	get(){
		return axios.get('site')
	}
}

