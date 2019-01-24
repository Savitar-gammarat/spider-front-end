<template>
	<div class="md-layout">
		<div class="md-layout-item md-size-25">
			<user-card></user-card>
		</div>
	</div>
</template>

<script>
import UserCard from "@/components/dashboard/content/admin/user-card";
export default {
	name: "admin",
	components: {UserCard}
}
</script>

<style scoped>

</style>
