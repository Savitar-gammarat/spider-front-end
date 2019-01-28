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
export default {
	name: "admin",
	components: {Chart, TaskCard, InfomationCard, UserCard}
}
</script>

<style scoped>

</style>
