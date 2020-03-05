<template>
	<div style="display: flex;width: 100%;height: 640px" id="box">
		<div ref="analysis-keyword" style="margin: auto;"></div>
	</div>
</template>

<script>
export default {
	name: "analysis-block-chart",
	props:['option'],
	mounted(){
		let h = document.getElementById("box").offsetHeight + "px"
		let w = document.getElementById("box").offsetWidth + "px"
		this.$refs["analysis-keyword"].style.height = h
		this.$refs["analysis-keyword"].style.width = w
		let myChart = this.$echarts.init(this.$refs["analysis-keyword"])
		myChart.setOption(this.option, true)
	}
}
</script>

<style scoped>

</style>