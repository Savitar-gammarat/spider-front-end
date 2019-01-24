import axios from '@/utils/request'

export default {
	post(username, password){
		return axios.post('auth',{username:username, password:password})
	}
}