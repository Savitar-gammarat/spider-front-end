<template>
	<div class="drawer md-elevation-5" :style="{width:drawerWidth, height: this.$common.ScreenHeight(64)}">
		<div class="drawer-list">
			<div v-for="i in icon_list" :key="i.id">
				<list-icon :showInfo="showInfo" :routes="i.routes">
					<template slot="icon">{{i.icon}}</template>
					<template slot="info">{{i.info}}</template>
				</list-icon>
			</div>
		</div>
	</div>
</template>

<script>
import ListIcon from "./toollist/list-icon";
export default {
	name: "toollist",
	components: {ListIcon},
	props:["showInfo"],
	data(){
		return{
			icon_list:[
				{id:0, icon: "settings", info: "网站概况", routes:'/'},
				{id:1, icon: "live_help", info: "新闻管理", routes:'/news-management'},
				{id:2, icon: "textsms", info: "站点管理", routes:'/sites-management'},
				{id:3, icon: "message", info: "领域管理", routes:'/fields-management'},
				{id:4, icon: "group", info: "用户管理", routes:'/user-management'},
				/*{id:5, icon: "show_chart", info: "数据管理", routes:'/'}*/
			]
		}
	},
	computed:{
		drawerWidth(){
			if (this.showInfo){
				return 180 + "px"
			}
			else{
				return 64 + "px"
			}
		}
	}
}
</script>

<style scoped>
.drawer{
	position: relative;
	width: 64px;
	transition: all .15s ease;
}
.drawer-list{
	position: absolute;
	padding: 8px;
	width: 180px;
}
</style>