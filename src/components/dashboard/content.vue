<template>
	<div :style="{width: changeWidth, left: changeLeft}" class="content">
		<!--此组件不写内容-->
		<router-view :fieldList="fieldList"></router-view>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: "Content",
	props:["showInfo"],
	data(){
		return{
			fieldList:[],
		}
	},
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
	},
	methods:{
		getFields(){
			axios.get('field').then(response=>{
				this.fieldList = response.data.fields_list
			})
		}
	},
	mounted() {
		this.getFields()
	}
}
</script>

<style scoped>
.content{
	position: absolute;
	top: 64px;
}
</style>