<template>
	<div style="display: flex" :style="this.$common.chartBox(350,70)" v-if="ifGet">
		<div ref="admin-chart" :style="this.$common.chartBox(450,170)" style="margin: auto"></div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: "chart",
	data(){
		return{
			option:{
				tooltip: {
					// 提示框组件设置
					trigger: 'axis',
					position: function (pt) {
						return [pt[0], '10%'];
					}
				},
				title: {
					left: 'center',
					text: '网站访问量统计',
				},
				// toolbox: {
				// 	// 工具栏设置
				// 	feature: {
				// 		dataZoom: {
				// 			yAxisIndex: 'none'
				// 		},
				// 		restore: {},
				// 		saveAsImage: {}
				// 	}
				// },
				xAxis: {
					type: 'category',
					boundaryGap: false,
					// data: ['1969/10/4','1968/10/5','1968/10/6','1968/10/7','1968/10/8','1968/10/9','1968/10/10','1968/10/11','1968/10/12']
					data: []
				},
				yAxis: {
					type: 'value',
					boundaryGap: [0, '100%']
				},
				// 区域缩放
				// dataZoom: [{
				// 	type: 'inside',
				// 	start: 0,
				// 	end: 10
				// }, {
				// 	start: 0,
				// 	end: 10,
				// 	handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
				// 	handleSize: '80%',
				// 	handleStyle: {
				// 		color: '#fff',
				// 		shadowBlur: 3,
				// 		shadowColor: 'rgba(0, 0, 0, 0.6)',
				// 		shadowOffsetX: 2,
				// 		shadowOffsetY: 2
				// 	}
				// }],
				series: [
					{
						name:'网站访问量',
						type:'line',
						smooth:true,
						symbol: 'none',
						sampling: 'average',
						itemStyle: {
							color: 'rgb(255, 70, 131)'
						},
						areaStyle: {
							color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgb(255, 158, 68)'
							}, {
								offset: 1,
								color: 'rgb(255, 70, 131)'
							}])
						},
						// data: [7,4,6,9,11,3,2,15,4,9,7,6]
						data: []
					}
				]
			}
		}
	},
	methods:{
		getChart(){
			this.$api.loginAnalysisApi.get().then(response=>{
				this.$store.commit('business/setLoginAnalysis', response.data.loginAnalysis)
				this.option.series[0].data = this.y
				this.option.xAxis.data = this.x
				let myChart = this.$echarts.init(this.$refs["admin-chart"]);
				myChart.setOption(this.option);
			})
		}
	},
	computed:mapState({
		userInfo: state=>state.user.userInfo,
		y:state=>state.business.loginAnalysis.y,
		x:state=>state.business.loginAnalysis.x,
		ifGet(){
			if (this.userInfo) {
				this.getChart()
				return true
			}else if(sessionStorage.username){
				this.getChart()
				return true
			}else {
				return false
			}
		}
	})
}
</script>

<style scoped>

</style>