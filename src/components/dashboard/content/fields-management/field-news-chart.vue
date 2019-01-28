<template>
	<div>
		<div style="display: flex">
			<div ref="fields-news-chart" style="margin: auto;" :style="this.$common.chartBox(320,700)"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "field-news-chart",
	data(){
		return{
			option:{
				title : {
					text: '各领域新闻数量',
					subtext: '根据您对新闻所分类的领域统计',
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
						name: '访问来源',
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
			this.$api.fieldNewsAnalysisApi.get().then(response=>{
				this.$store.commit('setFieldAnalysis', response.data.fieldAnalysis)
				this.option.legend.data = this.$store.state.fieldAnalysis.fields
				this.option.series[0].data = this.$store.state.fieldAnalysis.data
				this.passData()
				let myChart = this.$echarts.init(this.$refs["fields-news-chart"])
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