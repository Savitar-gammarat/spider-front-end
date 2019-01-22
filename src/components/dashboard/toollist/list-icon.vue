<template>
	<div style="height: 30px; display: flex;margin: 10px 0">
		<md-button class="md-icon-button" @click="router_go">
			<i class="material-icons">
				<slot name="icon"></slot>
			</i>
		</md-button>
		<md-button v-if="showInfo" @click="router_go" style="font-size: 16px;height: 25px;">
			<slot name="info"></slot>
		</md-button>
	</div>
</template>

<script>
export default {
	name: "list-icon",
	props:["showInfo", "routes"],
	methods:{
		router_go(){
			this.$router.push({path:this.routes})
		}
	}
}
</script>

<style scoped>
.material-icons{
	line-height: 30px;
}
</style>