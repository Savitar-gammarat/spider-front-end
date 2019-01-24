<template>
	<md-card md-with-hover>
		<md-card-header class="card-header">
			<md-card-media class="md-medium">
				<img src="http://www.itsyuekao.com/img/avator.cf8a477e.jpg" alt="Avatar" style="border-radius: 50%">
			</md-card-media>

			<md-card-header-text style="display: flex">
				<div class="md-layout" style="margin: auto">
					<div class="md-layout-item md-size-100" style="text-align: center">
						<div class="md-headline">{{username}}</div>
					</div>
					<div class="md-layout-item md-size-100" style="text-align: center">
						<div class="md-subhead">超级管理员</div>
					</div>
				</div>
			</md-card-header-text>
		</md-card-header>

		<hr>

		<md-card-content>
			<div class="md-layout">
				<div class="md-layout-item md-size-50">
					<div class="md-subhead">上次登录时间：</div>
				</div>
				<div class="md-layout-item md-size-50" style="text-align: right">
					<div class="md-subhead">{{loginTime}}</div>
				</div>
				<div class="md-layout-item md-size-50">
					<div class="md-subhead">上次登录地点：</div>
				</div>
				<div class="md-layout-item md-size-50" style="text-align: right">
					<div class="md-subhead">上海</div>
				</div>
			</div>
		</md-card-content>

	</md-card>
</template>

<script>
export default {
	name: "user-card",
	computed:{
		loginTime(){
			return sessionStorage.last_login
		},
		username(){
			return sessionStorage.username
		}
	}
}
</script>

<style scoped>
.md-card {
	margin: 20px;
	vertical-align: top;
	transition: all .3s ease;
}
hr{
	margin: 0 15px;
}
</style>