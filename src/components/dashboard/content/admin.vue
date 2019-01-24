<template>
	<md-card class="md-primary" md-theme="green-card">
		<md-card-header>
			<md-card-header-text>
				<div class="md-title">欢迎回来 Bigdingding : )</div>
				<div class="md-subhead">您的身份是：超级管理员</div>
				<div class="md-subhead">上次登录时间：{{loginTime}}</div>
			</md-card-header-text>

			<md-card-media>
				<img src="http://www.itsyuekao.com/img/avator.cf8a477e.jpg" alt="Avatar">
			</md-card-media>
			
		</md-card-header>
	</md-card>
</template>

<script>
export default {
	name: "admin",
	computed:{
		loginTime(){
			return sessionStorage.last_login
		}
	}
}
</script>

<style scoped>
.md-card {
	width: 460px;
	height: 150px;
	margin: 20px;
	float: left;
	vertical-align: top;
	transition: all .3s ease;
}
</style>
