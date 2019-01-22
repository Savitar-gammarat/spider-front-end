<template>
	<div :style="{width: changeWidth, left: changeLeft}" class="content">
		<!--此组件不写内容-->
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "Content",
	props:["showInfo"],
	computed:{
		changeWidth(){
			if (this.showInfo){
				return document.body.clientWidth - 180 + "px"
			}else {
				return document.body.clientWidth - 64 + "px"
			}
		},
		changeLeft(){
			if (this.showInfo){
				return 180 + "px"
			}else {
				return 64 + "px"
			}
		}
	}
}
</script>

<style scoped>
.content{
	position: absolute;
	top: 64px;
}
</style>