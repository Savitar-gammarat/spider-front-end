<template>
	<md-dialog :md-active.sync="showDialog" style="border-radius: 5px">
		<md-card style="padding: 5px">
			<md-card-header>
				<div class="md-headline">登录</div>
			</md-card-header>

			<md-card-content style="width: 450px">
				<div class="md-layout md-gutter">
					<div class="md-layout-item md-size-5" style="position: relative">
						<i class="material-icons" style="position: absolute;top: 25px;">person</i>
					</div>
					<div class="md-layout-item md-size-90">
						<md-field>
							<label for="username">请输入用户名 </label>
							<md-input name="username" id="username" v-model.trim="$v.form.name.$model" />
						</md-field>
						<div style="position: relative">
							<span class="md-error" v-if="!$v.form.name.required && $v.form.name.$anyDirty">您必须输入用户名</span>
						</div>
					</div>

					<div class="md-layout-item md-size-5" style="position: relative">
						<i class="material-icons" style="position: absolute;top: 25px;">lock</i>
					</div>
					<div class="md-layout-item md-size-90">
						<md-field>
							<label>请输入密码</label>
							<md-input v-model.trim="$v.form.password.$model" type="password" @keypress="wrongPassword = false"></md-input>
						</md-field>
						<div style="position: relative">
							<span class="md-error" v-if="!$v.form.password.required && $v.form.password.$anyDirty">您必须输入密码</span>
							<span class="md-error2" v-if="wrongPassword && $v.form.password.$anyDirty">账号或密码错误</span>
						</div>
					</div>
				</div>
			</md-card-content>

			<md-card-actions>
					<md-button class="md-primary" @click="showDialog = false">取消</md-button>
					<md-button class="md-primary" @click="login_bigdingding">登录</md-button>
			</md-card-actions>

		</md-card>
	</md-dialog>
</template>

<script>
import axios from 'axios'
import { required } from 'vuelidate/lib/validators'
export default {
	name: "login",
	data(){
		return{
			form:{
				name:null,
				password:null
			},
			showDialog : false,
			wrongPassword:false
		}
	},
	validations:{
		form:{
			name:{required},
			password:{required}
		}
	},
	methods:{
		login_bigdingding(){
			if (!this.$v.$invalid) {
				axios.post('auth',{	"username":this.form.name, "password":this.form.password})
					.then(response=>{
						this.$store.commit('setUserInfo',response.data)
						sessionStorage.setItem("token", response.data.token)
						sessionStorage.setItem("last_login", response.data.user.last_login)
						sessionStorage.setItem("username", response.data.user.username)
						this.$router.push({path:'/'})
						this.showDialog = false
						this.$api.counterApi.post()
						axios.get('news',{params:{date:1}}).then(response=>{
							this.$store.commit('setNews',response.data.publishList)
							this.$store.commit('setNewsLength',response.data.length)
						})
					})
					.catch(error=>{
						this.wrongPassword = true
					})
			}else {
				this.$v.$touch()
			}
		},
		ifShowDialog(){
			this.showDialog = !this.showDialog
		}
	},
	computed:{

	}
}
</script>

<style scoped>
.md-error{
	position: absolute;
	top: -20px;
	color: red;
}
.md-error2{
	position: absolute;
	top: 0;
	color: red;
}
</style>