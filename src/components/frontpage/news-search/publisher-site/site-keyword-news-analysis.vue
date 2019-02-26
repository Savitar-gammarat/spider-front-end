<template>
	<div>
		<div class="md-layout">
			<div class="md-layout-item" style="position: relative">
				<div style="position: absolute">
					<span>起始日期</span>
				</div>
				<md-datepicker id="start" v-model="start_time" />
			</div>
			<div class="md-layout-item" style="margin-left: 20px;position: relative">
				<div style="position: absolute">
					<span>结束日期</span>
				</div>
				<md-datepicker id="end" v-model="end_time" />
			</div>
			<div class="md-layout-item" style="margin-left: 20px;position: relative">
				<md-button class="md-dense md-raised md-primary" style="position: absolute;top: 10px;" @click="analysis">查询</md-button>
			</div>
		</div>
		<div style="display: flex;width: 100%;height: 650px" id="box">
			<div ref="site-keyword-news-analysis" style="margin: auto;"></div>
		</div>
		<div style="width: 100%" v-if="show">
			<div style="position: relative;">
				<div class="loading">
					<div style="margin: auto">
						<md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
					</div>
				</div>
				<div style="display: flex">
					<div style="margin: auto">
						<span class="md-title">因数据量较大，约需等待1分钟,可先浏览该站点其他信息</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "site-keyword-news-analysis",
	data(){
		return{
			option:{
				title : {
					text: '各站点近期新闻领域趋势分析',
					subtext: '新闻数量以网站所展现新闻为基准',
				},
				legend: {
					orient: 'vertical',
					right: 'right'
				},
				tooltip: {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					}
				},
				dataset: {
					source:[]
				},
				xAxis: [
					{type: 'category', gridIndex: 0},
					{type: 'category', gridIndex: 1}
				],
				yAxis: [
					{gridIndex: 0},
					{gridIndex: 1}
				],
				grid: [
					{bottom: '55%',right:'20%',left:'5%'},
					{top: '55%',right:'20%',left:'5%'}
				],
				series: []
			},
			start_time:new Date().setDate(new Date().getDate()-7),
			end_time: new Date()
		}
	},
	methods:{
		analysis(){
			let route = this.$route.path.split("/")
			route = route[route.length-1]
			this.$api.keywordsAnalysisApi.post(route,this.$options.filters.dateformat(this.start_time), this.$options.filters.dateformat(this.end_time)).then(response=>{
				let myChart = this.$echarts.init(this.$refs["site-keyword-news-analysis"])
				myChart.clear();
				// this.option.dataset.source = []
				this.option.dataset.source = response.data.source
				// this.option.series = []
				this.option.series = response.data.series
				this.option.title.text = response.data.site_name + "近期高频关键词"
				myChart.setOption(this.option)
				sessionStorage.setItem(`${this.$route.path}&keywords`, JSON.stringify({option:this.option}))
			})
		}
	},
	computed:{
		show(){
			return this.option.dataset.source.length === 0;
		},
	},
	mounted(){
		let h = document.getElementById("box").offsetHeight + "px"
		let w = document.getElementById("box").offsetWidth + "px"
		this.$refs["site-keyword-news-analysis"].style.height = h
		this.$refs["site-keyword-news-analysis"].style.width = w
		let route = this.$route.path.split("/")
		route = route[route.length-1]
		let localOptions = JSON.parse(sessionStorage.getItem(`${this.$route.path}&keywords`))
		if (localOptions) {
			this.option = localOptions.option
			let myChart = this.$echarts.init(this.$refs["site-keyword-news-analysis"])
			myChart.setOption(this.option)
		}else {
			this.$api.keywordsAnalysisApi.post(route,this.start_time, this.end_time).then(response=>{
				this.option.dataset.source = response.data.source
				this.option.series = response.data.series
				this.option.title.text = response.data.site_name + "近期高频关键词"
				let myChart = this.$echarts.init(this.$refs["site-keyword-news-analysis"])
				myChart.setOption(this.option)
				sessionStorage.setItem(`${this.$route.path}&keywords`, JSON.stringify({option:this.option}))
			})
		}
	}
}
</script>

<style scoped>
.loading{
	position: absolute;
	display: flex;
	top: -400px;
	left: 47%;
}
</style>