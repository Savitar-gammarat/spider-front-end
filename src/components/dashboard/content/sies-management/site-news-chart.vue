<template>
	<div>
		<div style="display: flex">
			<div ref="sites-news-chart" style="margin: auto;" :style="this.$common.chartBox(320,700)"></div>
		</div>
	</div>
</template>

<script>
import {mapState} from "vuex"
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
				this.$store.commit('business/setSiteAnalysis', response.data.SiteAnalysis)
				this.option.legend.data = this.y
				this.option.series[0].data = this.x
				this.passData()
				let myChart = this.$echarts.init(this.$refs["sites-news-chart"])
				myChart.setOption(this.option)
			})
		},
		passData(){
			this.$emit('passData',this.option.legend.data)
		}
	},
	computed:mapState({
		y:state=>state.business.siteAnalysis.sites,
		x:state=>state.business.siteAnalysis.data
	}),
	mounted(){
		this.getChart()
	}
}
</script>

<style scoped>

</style>