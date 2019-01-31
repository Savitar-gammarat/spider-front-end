<template>
	<div class="md-layout">
		<div class="md-layout-item md-size-25">
			<user-card></user-card>
		</div>
		<div class="md-layout-item md-size-50">
			<infomation-card></infomation-card>
		</div>
		<div class="md-layout-item md-size-25">
			<task-card></task-card>
		</div>
		<div>
			<chart></chart>
		</div>
	</div>
</template>

<script>
import UserCard from "@/components/dashboard/content/admin/user-card";
import InfomationCard from "@/components/dashboard/content/admin/infomation-card";
import TaskCard from "@/components/dashboard/content/admin/task-card";
import Chart from "@/components/dashboard/content/admin/login-chart";
import axios from 'axios'
export default {
	name: "admin",
	components: {Chart, TaskCard, InfomationCard, UserCard},
	mounted(){
		axios.get('news',{params:{date:1}}).then(response=>{
			this.$store.commit('business/setNews',response.data.publishList)
			this.$store.commit('business/setNewsLength',response.data.length)
		})
	}
}
</script>

<style scoped>

</style>
