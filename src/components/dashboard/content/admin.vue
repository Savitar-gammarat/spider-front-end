<template>
	<div class="md-layout">
		<div class="md-layout-item md-size-25">
			<user-card></user-card>
		</div>
		<div class="md-layout-item md-size-50">
			<infomation-card></infomation-card>
		</div>
	</div>
</template>

<script>
import UserCard from "@/components/dashboard/content/admin/user-card";
import InfomationCard from "@/components/dashboard/content/admin/infomation-card";
export default {
	name: "admin",
	components: {InfomationCard, UserCard}
}
</script>

<style scoped>

</style>
