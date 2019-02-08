<template>
	<div>
		<div style="display: flex;width: 100%;height: 650px" id="box">
			<div ref="site-field-news-analysis" style="margin: auto;"></div>
		</div>
		<div style="width: 100%" v-if="show">
			<div style="position: relative;">
				<div class="loading">
					<div style="margin: auto">
						<md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "site-field-news-analysis",
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
					showContent: false
				},
				dataset: {
					source: []
				},
				xAxis: {type: 'category'},
				yAxis: {gridIndex: 0},
				grid: {top: '55%',left:'5%'},
				series: []
			}
		}
	},
	computed:{
		show(){
			return this.option.dataset.source.length === 0;
		}
	},
	mounted(){
		let h = document.getElementById("box").offsetHeight + "px"
		let w = document.getElementById("box").offsetWidth + "px"
		this.$refs["site-field-news-analysis"].style.height = h
		this.$refs["site-field-news-analysis"].style.width = w
		let route = this.$route.path.split("/")
		route = route[route.length-1]
		let localOptions = JSON.parse(sessionStorage.getItem(this.$route.path))
		if (localOptions) {
			this.option = localOptions.option
			let myChart = this.$echarts.init(this.$refs["site-field-news-analysis"])
			myChart.setOption(this.option)
			myChart.on('updateAxisPointer', function (event) {
				let xAxisInfo = event.axesInfo[0];
				if (xAxisInfo) {
					let dimension = xAxisInfo.value + 1;
					myChart.setOption({
						series: {
							id: 'pie',
							label: {
								formatter: '{b}: {@[' + dimension + ']} ({d}%)'
							},
							encode: {
								value: dimension,
								tooltip: dimension
							}
						}
					});
				}
			});
		}else {
			this.$api.fieldNewsAnalysisApi.post(route).then(response=>{
				this.option.dataset.source = response.data.source
				this.option.series = response.data.series
				this.option.title.text = response.data.site_name + "近期新闻领域趋势分析"
				let myChart = this.$echarts.init(this.$refs["site-field-news-analysis"])
				myChart.setOption(this.option)
				myChart.on('updateAxisPointer', function (event) {
					let xAxisInfo = event.axesInfo[0];
					if (xAxisInfo) {
						let dimension = xAxisInfo.value + 1;
						myChart.setOption({
							series: {
								id: 'pie',
								label: {
									formatter: '{b}: {@[' + dimension + ']} ({d}%)'
								},
								encode: {
									value: dimension,
									tooltip: dimension
								}
							}
						});
					}
				});
				sessionStorage.setItem(this.$route.path, JSON.stringify({option:this.option}))
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