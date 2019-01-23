import axios from '@/utils/request'

export default {
	getSites(){
		return axios.get('site')
	}
}

