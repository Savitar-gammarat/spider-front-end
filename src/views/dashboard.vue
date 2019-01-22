<template>
	<div style="position: relative">
		<toolbar @childEvent="changeInfo"></toolbar>
		<toollist :showInfo="showInfo"></toollist>
		<Content :showInfo="showInfo"></Content>
	</div>
</template>

<script>
import Toolbar from "@/components/dashboard/toolbar";
import Toollist from "@/components/dashboard/toollist";
import Content from "@/components/dashboard/content";
export default {
	name: "dashboard",
	components: {Content, Toollist, Toolbar},
	data(){
		return{
			showInfo:false
		}
	},
	methods:{
		changeInfo(data){
			this.showInfo = data
		}
	}
}
</script>

<style scoped>

</style>