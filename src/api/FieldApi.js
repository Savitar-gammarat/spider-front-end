import axios from '@/utils/request'

export default {
	get(){
		return axios.get('field')
	},
	patch(field_id, field_name){
		return axios.patch('field',{field_id:field_id,field_name:field_name})
	},
	put(field_name){
		return axios.put('field',{field_name:field_name})
	},
	delete(field_id){
		return axios.delete('field',{data:{field_id:field_id}})
	}
}