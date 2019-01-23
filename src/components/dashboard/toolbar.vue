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
				<md-button class="md-icon-button" @click="showDialog = true">
					<md-icon>person</md-icon>
				</md-button>
				<span v-if="ifLogin">您好！bigdingding</span>
			</div>
		</md-toolbar>
		
		<div>
			<md-dialog :md-active.sync="showDialog">
				<div class="md-layout md-gutter" style="margin: 20px;">
					<div class="md-layout-item md-size-100">
						<md-field >
							<label for="first-name">First Name</label>
							<md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.name" />
						
						</md-field>
					</div>
					
					<div class="md-layout-item md-size-100">
						<md-field>
							<label for="last-name">Last Name</label>
							<md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.password" />

						</md-field>
					</div>
				</div>
				
				<md-dialog-actions>
					<md-button class="md-primary" @click="showDialog = false">取消</md-button>
					<md-button class="md-primary" @click="login_bigdingding">登录</md-button>
				</md-dialog-actions>
			</md-dialog>
		</div>
	</div>
	
</template>

<script>
import axios from 'axios'
export default {
	name: "toolbar",
	data(){
		return{
			showInfo:false,
			showDialog:false,
			form:{
				name:null,
				password:null
			},
			tokenTest:false
		}
	},
	methods:{
		showList(){
			this.showInfo = !this.showInfo
			this.$emit('childEvent',this.showInfo)
		},
		login_bigdingding(){
			this.showDialog = false
			axios.post('auth',{	"username":this.form.name, "password":this.form.password})
				.then(response=>{
					this.tokenTest = true
					sessionStorage.setItem("token", response.data.token)
				})
				.catch(error=>{
					alert("fuck")
				})
		}
	},
	computed:{
		ifLogin(){
			if (this.tokenTest){
				return true
			} else if(sessionStorage.token){
				return true
			}else {
				return false
			}
		}
	}
}
</script>

<style scoped>

</style>