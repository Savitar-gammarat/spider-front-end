<template>
	<div>
		<div style="display: flex">
			<div ref="sites-news-chart" style="margin: auto;" :style="this.$common.chartBox(320,700)"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "site-news-chart",
	data(){
		return{
			option:{
				title : {
					text: '各站点新闻数量',
					subtext: '根据数据库领域新闻数量分析',
					x:'center'
				},
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					left: 'left',
					data: []
				},
				series : [
					{
						name: '新闻数量',
						type: 'pie',
						radius : '65%',
						center: ['50%', '60%'],
						data:[],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			}
		}
	},
	methods:{
		getChart(){
			this.$api.siteNewsAnalysisApi.get().then(response=>{
				this.$store.commit('setSiteAnalysis', response.data.SiteAnalysis)
				this.option.legend.data = this.$store.state.siteAnalysis.sites
				this.option.series[0].data = this.$store.state.siteAnalysis.data
				this.passData()
				let myChart = this.$echarts.init(this.$refs["sites-news-chart"])
				myChart.setOption(this.option)
			})
		},
		passData(){
			this.$emit('passData',this.option.legend.data)
		}
	},
	mounted(){
		this.getChart()
	}
}
</script>

<style scoped>

</style>