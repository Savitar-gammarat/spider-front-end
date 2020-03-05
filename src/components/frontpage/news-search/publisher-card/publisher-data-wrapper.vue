<template>
	<div class="publisher-data-wrapper">
		<div class="publisher-data" @scroll="lazyLoading">
			<!--传值后进行数据遍历-->
			<div class="publisher-link" v-for="i in dataList" :key="i.id">
				<div class="md-layout">
					<div class="md-layout-item md-size-11">
						<span class="text">{{i.datetime | lastTime}}</span>
					</div>
					<div class="md-layout-item md-size-80">
						<a :href="i.link" class="link" v-text="i.title" target="_blank"></a>
					</div>
					<div class="md-layout-item md-size-5"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "publisher-data-wrapper",
	props:["dataList",'id'],
	data(){
		return{
			datetime:null
		}
	},
	methods:{
		lazyLoading(){
			let datetime1 = new Date().getTime()
			let interval = datetime1 - this.datetime
			if (interval >= 2000){
				let news_id = this.dataList[this.dataList.length-1].id
				let site_id = this.id
				this.$api.newsApi.post(site_id,news_id).then(response=>{
					this.$store.commit('consumer/addNews',{site_id:site_id,more_news:response.data.more_news})
				})

			}
			this.datetime = new Date().getTime()
		},
	}
}
</script>

<style scoped>
.publisher-data-wrapper{
	bottom: 0;
	left: 0;
	right: 0;
	position: absolute;
	overflow: hidden;
	top: 50px;
}
.publisher-data{
	transform: translateZ(0);
	overflow-y: scroll;
	overflow-x: hidden;
	position: absolute;
	height: 100%;
	top: 10px;
	left: 0;
	right: -18px;
	padding: 10px 5px 8px 5px;
}
.publisher-link{
}
.text{
	font-size: 14px;
	color: #777;
	padding-left: 7px;
}
.link{
	cursor: pointer;
	color: #0060a0;
	text-decoration: none;
	border-bottom: 1px solid rgba(0,96,160,0.15);
}
</style>