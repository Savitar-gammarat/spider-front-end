import axios from '@/utils/request'

export default {
	get(){
		axios.get('counter')
	},
	post(){
		axios.post('counter')
	}
}