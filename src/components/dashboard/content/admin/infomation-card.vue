<template>
	<md-card class="card" md-with-hover>
		<div class="title">网站基本信息</div>
		<div class="md-layout md-gutter">
			<div class="md-layout-item md-size-33">
				<information-tag>
					<template slot="number">{{ifgetCounts}}</template>
					<template slot="title">网站访问量</template>
				</information-tag>
			</div>
			<div class="md-layout-item md-size-33">
				<information-tag>
					<template slot="number">{{ifgetUserCounts}}</template>
					<template slot="title">网站用户数</template>
				</information-tag>
			</div>
			<div class="md-layout-item md-size-33">
				<information-tag>
					<template slot="number">0</template>
					<template slot="title">内容暂定</template>
				</information-tag>
			</div>
		</div>
	</md-card>
</template>

<script>
import InformationTag from "@/components/dashboard/content/admin/information-tag";
export default {
	name: "infomation-card",
	components: {InformationTag},
	data(){
		return{
			counts:0,
			userCounts:0
		}
	},
	methods:{
		getCounts(){
			this.$api.counterApi.get().then(response=>{
				this.counts = response.data.counts
			})
		},
		getUserCounts(){
			this.$api.userApi.get().then(response=>{
				this.userCounts = response.data.counts
			})
		}
	},
	computed:{
		ifgetCounts(){
			if (this.$store.state.userInfo){
				this.getCounts()
				return this.counts
			} else if(sessionStorage.token){
				this.getCounts()
				return this.counts
			} else {
				return 0
			}
		},
		ifgetUserCounts(){
			if (this.$store.state.userInfo){
				this.getUserCounts()
				return this.userCounts
			} else if(sessionStorage.token){
				this.getUserCounts()
				return this.userCounts
			} else {
				return 0
			}
		}
	}
}
</script>

<style scoped>
.card {
	margin: 20px;
	padding: 20px;
	height: 230px;
	vertical-align: top;
	transition: all .3s ease;
}
.title{
	font-size: 18px;
	letter-spacing: .01em;
	line-height: 20px;
	margin-bottom: 20px;
}

</style>