<template>
	<div>
		<!--可参照Vue Material中Drawer-->
		<md-toolbar class="navigation md-transparent">
			<h3 class="md-title" style="flex: 1">
				<logo></logo>聚以析
			</h3>
			<span v-if="ifLogin">您好！{{this.username}}</span>
			<md-menu md-direction="bottom-end" :mdCloseOnClick="closeOnClick" :mdCloseOnSelect="closeOnSelect">
				<md-icon md-menu-trigger style="cursor: pointer" class="md-size-2x">view_headline</md-icon>

				<md-menu-content>
					<md-menu-item v-if="bigdingding" @click="goDashboard">
						<md-icon>settings</md-icon>
						<span>控制台</span>
					</md-menu-item>
					<md-menu-item @click="toLogin" v-if="!ifLogin">
						<md-icon>accessibility</md-icon>
						<span>用户登录</span>
					</md-menu-item>
					<md-menu-item v-if="ifLogin">
						<md-icon>accessibility</md-icon>
						<span v-if="ifLogin">退出登录</span>
					</md-menu-item>
					<md-menu-item>
						<md-icon>translate</md-icon>
						<span>数据分析</span>
					</md-menu-item>
					<md-menu-item>
						<md-icon>fiber_new</md-icon>
						<span>查看新闻</span>
					</md-menu-item>
				</md-menu-content>
			</md-menu>
		</md-toolbar>
		<login ref="loginComponent"></login>
	</div>
</template>

<script>
import Logo from "@/components/common/logo";
import Login from "@/components/common/login";
import {mapState} from 'vuex'
export default {
	name: "navigation",
	components: {Login, Logo},
	data(){
		return{
			closeOnClick: false,
			closeOnSelect: true
		}
	},
	methods:{
		toLogin(){
			this.$refs.loginComponent.ifShowDialog()
		},
		goDashboard(){
			this.$router.push({path:'/dashboard/admin'})
		}
	},
	computed:mapState({
		ifLogin(){
			if (this.userInfo){
				return true
			} else return !!sessionStorage.token;
		},
		username(){
			if (sessionStorage.username) {
				return sessionStorage.username
			}else if(this.userInfo){
				return this.userInfo.user.username
			}else {
				return "您尚未登录"
			}
		},
		userInfo:state=>state.user.userInfo,
		bigdingding(){
			if (sessionStorage.username === "bigdingding"){
				return true
			} else return !!(this.userInfo && sessionStorage.username === "bigdingding");
		}
	}),
	created(){
	
	}
}
</script>

<style scoped>
.navigation{
	height: 150px;
	box-shadow: none;
}
.toggle :hover{
	background-color: #eee;
}
</style>