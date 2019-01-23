import axios from '@/utils/request'

export default {
	get(){
		axios.get('counter')
	},
	patch(field_id, field_name){
		axios.patch('counter',{field_id:field_id,field_name:field_name})
	},
	put(field_name){
		axios.put('field',{field_name:field_name})
	},
	delete(field_id){
		axios.delete('field',{data:{field_id:field_id}})
	}
}