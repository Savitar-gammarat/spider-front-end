<template>
	<div class="copy-right">
		<span v-text="copyRight"></span>
	</div>
</template>

<script>
export default {
	name: "buttom-bar",
	data(){
		return{
			copyRight:"Copyright © 2019 Group Savitar-gammarat. All rights reserved."
		}
	}
}
</script>

<style scoped>
.copy-right{
	margin: 60px auto 40px auto;
	text-align: center;
}
</style>