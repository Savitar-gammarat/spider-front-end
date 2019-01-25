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
				<span v-if="ifLogin">您好！bigdingding</span>
			</div>
		</md-toolbar>

		<div>
			<login ref="loginComponent"></login>
		</div>
	</div>

</template>

<script>
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
	computed:{
		ifLogin(){
			if (this.$store.state.userInfo){
				return true
			} else return !!sessionStorage.token;
		}
	}
}
</script>

<style scoped>

</style>