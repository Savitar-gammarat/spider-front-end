<template>
	<md-toolbar>
		<md-button class="md-icon-button" @click.native="showList">
			<md-icon>menu</md-icon>
		</md-button>
		<span class="md-title">管理控制台</span>

		<div class="md-toolbar-section-end">
			<md-button class="md-icon-button">
				<md-icon>notifications</md-icon>
			</md-button>
			<md-button class="md-icon-button">
				<md-icon>person</md-icon>
			</md-button>
			<span>您好！bigdingding</span>
		</div>
	</md-toolbar>
</template>

<script>
export default {
	name: "toolbar",
	data(){
		return{
			showInfo:false
		}
	},
	methods:{
		showList(){
			console.log("click")
			this.showInfo = !this.showInfo
			this.$emit('childEvent',this.showInfo)
		}
	}
}
</script>

<style scoped>

</style>