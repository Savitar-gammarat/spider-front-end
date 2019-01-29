import axios from '@/utils/request'

export default {
	post(username, email, password){
		return axios.post('user',{
			username:username,
			password:password,
			email:email
		})
	},
	patch(username, password){
		return axios.patch('user', {username:username,password:password})
	},
	put(username, customization){
		return axios.put('user',{username:username,customization:customization})
	},
	delete(username){
		return axios.delete('user',{data:{username:username}})
	},
	get(){
		return axios.get('user')
	}
}