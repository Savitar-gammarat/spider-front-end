<template>
	<div>
		<div v-for="(item,index) in optionData.options" :key="index">
			<analysis-block-chart :option="item.option"></analysis-block-chart>
		</div>
		<div :style="{'height':this.$common.ScreenHeight(365)}" v-if="show">
			<h3>请输入一句包含您想要的关键字的信息</h3>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import AnalysisBlockChart from "@/components/frontpage/data-analysis/analysis-block/analysis-block-chart";
export default {
	name: "analysis-block",
	components: {AnalysisBlockChart},
	data(){
		return{
			datetime:null
		}
	},
	computed:mapState({
		optionData:state=>state.consumer.analysisOptions,
		show(){
			return this.optionData.length === 0
		}
	})
}
</script>

<style scoped>

</style>