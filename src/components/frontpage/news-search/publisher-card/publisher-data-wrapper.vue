<template>
	<div class="publisher-data-wrapper">
		<div class="publisher-data">
			<!--传值后进行数据遍历-->
			<div class="publisher-link" v-for="i in dataList" :key="i.id">
				<div class="md-layout">
					<div class="md-layout-item md-size-11">
						<span class="text">{{i.datetime | lastTime}}</span>
					</div>
					<div class="md-layout-item md-size-80">
						<a :href="i.link" class="link" v-text="i.title"></a>
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
	props:["dataList"],
	filters:{
		lastTime:function (value) {
			if (!value) return ''
			let date1 = new Date(value.replace(/\-/g, "/"))
			let date2 = new Date()
			let date3 = Math.abs(date1.getTime() - date2.getTime())
			let days = Math.floor(date3/(23*3600*1000))
			let leave1= date3 % (24*3600*1000)
			let hours= Math.floor(leave1/(3600*1000))
			if (hours === 0 && days === 0){
				return 'New'
			}
			if (days === 0){
				return hours + 'H'
			}
			return days + 'D'
		}
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