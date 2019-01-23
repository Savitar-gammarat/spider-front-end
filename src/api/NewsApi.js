import axios from '@/utils/request'

export default {
	get(status, site_id, limit){
		axios.get('news',{
			params:{
				status:status,
				site_id:site_id,
				limit:limit
			}
		})
	},
	post(site_id, news_id){
		axios.post('news',{site_id:site_id,news_id:news_id})
	},
	patch(news_id, field_name_list) {
		axios.patch('news',{news_id:news_id, field_name_list:field_name_list})
	},
	put(news_id, title, link ,site_id){
		axios.put('news',{
			news_id:news_id,
			title:title,
			link:link,
			site_id:site_id
		})
	},
	delete(news_id){
		axios.delete('news', {data:{news_id}})
	}
}