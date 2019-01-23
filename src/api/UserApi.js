import axios from '@/utils/request'

export default {
	post(username, email, password){
		axios.post('user',{
			username:username,
			password:password,
			email:email
		})
	},
	patch(username, password){
		axios.patch('user', {username:username,password:password})
	},
	put(username, customization){
		axios.put('user',{username:username,customization:customization})
	},
	delete(username){
		axios.delete('user',{data:{username:username}})
	}
}