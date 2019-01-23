import axios from '@/utils/request'

export default {
	post(username, password){
		axios.post('auth',{username:username, password:password})
	}
}