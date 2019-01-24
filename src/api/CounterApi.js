import axios from '@/utils/request'

export default {
	get(){
		return axios.get('counter')
	},
	post(){
		return axios.post('counter')
	}
}