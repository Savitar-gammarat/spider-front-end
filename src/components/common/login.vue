<template>
	<md-dialog :md-active.sync="showDialog" style="border-radius: 5px">
		<md-progress-bar md-mode="indeterminate" style="height: 4px" v-if="progressing"></md-progress-bar>
		<!--login-->
		<md-card v-if="login" style="padding: 5px;">
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
							<label for="name">请输入用户名 </label>
							<md-input name="name" id="name" v-model.trim="$v.loginform.name.$model" />
						</md-field>
						<div style="position: relative">
							<span class="md-error" v-if="!$v.loginform.name.required && $v.loginform.name.$anyDirty">您必须输入用户名</span>
						</div>
					</div>

					<div class="md-layout-item md-size-5" style="position: relative">
						<i class="material-icons" style="position: absolute;top: 25px;">lock</i>
					</div>
					<div class="md-layout-item md-size-90">
						<md-field>
							<label>请输入密码</label>
							<md-input v-model.trim="$v.loginform.password.$model" type="password" @keypress="wrongPassword = false"></md-input>
						</md-field>
						<div style="position: relative">
							<span class="md-error" v-if="!$v.loginform.password.required && $v.loginform.password.$anyDirty">您必须输入密码</span>
							<span class="md-error2" v-if="wrongPassword && $v.loginform.password.$anyDirty">账号或密码错误</span>
						</div>
					</div>
				</div>
			</md-card-content>

			<md-card-actions>
				<md-button class="md-primary" @click="login = false">注册</md-button>
				<md-button class="md-primary" @click="login_bigdingding">登录</md-button>
			</md-card-actions>

		</md-card>
		<!--register-->
		<transition name="slide-fade" mode="out-in">
			<md-card v-if="!login" style="padding: 5px;">
			<md-card-header>
				<div class="md-headline">注册</div>
			</md-card-header>
			<!--email-->
			<md-card-content v-if="step" style="width: 450px">
				<div class="md-layout md-gutter">
					<div class="md-layout-item md-size-5" style="position: relative">
						<i class="material-icons" style="position: absolute;top: 25px;">email</i>
					</div>
					<div class="md-layout-item md-size-90">
						<md-field>
							<label for="email">Email</label>
							<md-input type="email" name="email" id="email" v-model.trim="$v.registerform.email.$model"/>
						</md-field>
						<div style="position: relative">
							<span class="md-error" v-if="!$v.registerform.email.required && $v.registerform.email.$anyDirty">您必须输入正确的邮箱</span>
						</div>
					</div>
				</div>
			</md-card-content>
			<!--username and password-->
			<transition name="slide-fade" mode="out-in">
				<md-card-content v-if="!step" style="width: 450px">
					<div class="md-layout md-gutter">
						<div class="md-layout-item md-size-5" style="position: relative">
							<i class="material-icons" style="position: absolute;top: 25px;">person</i>
						</div>
						<div class="md-layout-item md-size-90">
							<md-field>
								<label>请输入用户名 </label>
								<md-input v-model.trim="$v.registerform.username.$model" />
							</md-field>
							<div style="position: relative">
								<span class="md-error" v-if="!$v.registerform.username.required && $v.registerform.username.$anyDirty">您必须输入用户名</span>
							</div>
						</div>
						
						<div class="md-layout-item md-size-5" style="position: relative">
							<i class="material-icons" style="position: absolute;top: 25px;">lock</i>
						</div>
						<div class="md-layout-item md-size-90">
							<md-field>
								<label>请输入密码</label>
								<md-input v-model.trim="$v.registerform.password.$model" type="password"></md-input>
							</md-field>
							<div style="position: relative">
								<span class="md-error" v-if="!$v.registerform.password.required && $v.registerform.password.$anyDirty">您必须输入密码</span>
							</div>
						</div>
						<div class="md-layout-item md-size-5" style="position: relative">
							<i class="material-icons" style="position: absolute;top: 25px;">lock</i>
						</div>
						<div class="md-layout-item md-size-90">
							<md-field>
								<label>请输入密码</label>
								<md-input v-model.trim="$v.registerform.passwordAgain.$model" type="password"></md-input>
							</md-field>
							<div style="position: relative">
								<span class="md-error2" v-if="!$v.registerform.passwordAgain.sameAsPassword && $v.registerform.passwordAgain.$anyDirty">两次输入的密码不一致</span>
							</div>
						</div>
					</div>
				</md-card-content>
			</transition>

			<md-card-actions>
				<md-button class="md-primary" @click="showDialog = false">取消</md-button>
				<md-button class="md-primary" v-if="step" @click="nextStep">下一步</md-button>
				<md-button class="md-primary" v-if="!step" @click="register">立即注册</md-button>
			</md-card-actions>
		</md-card>
		</transition>
	</md-dialog>

</template>

<script>
import axios from 'axios'
import { required, email ,sameAs } from 'vuelidate/lib/validators'
export default {
	name: "login",
	data(){
		return{
			loginform:{
				name:null,
				password:null
			},
			registerform:{
				email:null,
				username:null,
				password:null,
				passwordAgain:null
			},
			showDialog : false,
			wrongPassword:false,
			progressing:false,
			login:true,
			step:true
		}
	},
	validations:{
		loginform:{
			name:{required},
			password:{required}
		},
		registerform: {
			email:{required, email},
			username:{required},
			password:{required},
			passwordAgain:{sameAsPassword: sameAs('password')}
		}
	},
	methods:{
		login_bigdingding(){
			this.progressing = true
			setTimeout(()=>{
				if (!this.$v.loginform.$invalid) {
					axios.post('auth',{	"username":this.loginform.name, "password":this.loginform.password})
						.then(response=>{
							this.$store.commit('user/setUserInfo',response.data)
							sessionStorage.setItem("token", response.data.token)
							sessionStorage.setItem("last_login", response.data.user.last_login)
							sessionStorage.setItem("username", response.data.user.username)
							this.$router.push({path:'/'})
							this.showDialog = false
							this.$api.counterApi.post()
						})
						.catch(error=>{
							this.wrongPassword = true
						})
				}else {
					this.$v.loginform.$touch()
				}
				this.progressing = false
			},1000)
		},
		register(){
			this.progressing = true
			setTimeout(()=>{
				if (!this.$v.registerform.$invalid) {
					this.$api.userApi.post(this.registerform.username, this.registerform.email, this.registerform.password)
						.then(response=>{
							this.$store.commit('user/setUserInfo',response.data)
							sessionStorage.setItem("token", response.data.token)
							sessionStorage.setItem("last_login", response.data.user.last_login)
							sessionStorage.setItem("username", response.data.user.username)
							this.$router.push({path:'/dashboard'})
							this.showDialog = false
						})
				}else {
					this.$v.loginform.$touch()
				}
				this.progressing = false
			},1000)
		},
		ifShowDialog(){
			this.showDialog = !this.showDialog
			this.login = true
			this.step = true
		},
		nextStep(){
			if (!this.$v.registerform.email.$invalid) {
				this.step = false
			}else {
				this.$v.registerform.email.$touch()
			}
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
.slide-fade-enter-active {
	transition: all .3s ease;
}
.slide-fade-leave-active {
	transition: all .3s ease;
}
.slide-fade-enter {
	transform: translateX(10px);
	opacity: 0;
}
.slide-fade-leave-to{
	transform: translateX(-10px);
	opacity: 0;
}
</style>