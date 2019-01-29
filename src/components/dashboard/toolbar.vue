<template>
	<div>
		<md-toolbar>
			<md-button class="md-icon-button" @click.native="showList">
				<md-icon>menu</md-icon>
			</md-button>
			<span class="md-title">管理控制台</span>

			<div class="md-toolbar-section-end">
				<md-button class="md-icon-button">
					<md-icon>notifications</md-icon>
				</md-button>
				<md-button class="md-icon-button" @click="toLogin">
					<md-icon>person</md-icon>
				</md-button>
				<span v-if="ifLogin">您好！{{this.username}}</span>
			</div>
		</md-toolbar>

		<div>
			<login ref="loginComponent"></login>
		</div>
	</div>

</template>

<script>
import {mapState} from 'vuex'
import Login from "@/components/login";
export default {
	name: "toolbar",
	components: {Login},
	data(){
		return{
			showInfo:false,
			showDialog:false,
			form:{
				name:null,
				password:null
			}
		}
	},
	methods:{
		// show the slide bar
		showList(){
			this.showInfo = !this.showInfo
			this.$emit('childEvent',this.showInfo)
		},
		toLogin(){
			this.$refs.loginComponent.ifShowDialog()
		}
	},
	computed:mapState({
		ifLogin(){
			if (this.$store.state.userInfo){
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
		userInfo:state=>state.userInfo
	})
}
</script>

<style scoped>

</style>