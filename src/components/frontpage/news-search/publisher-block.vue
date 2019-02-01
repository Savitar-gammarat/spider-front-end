<template>
	<div class="md-layout">
		<div class="md-layout-item md-large-size-33 md-xlarge-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100 publisher-block"
			v-for="item in publishList" :key="item.id">
			<publisher-card :item="item"></publisher-card>
		</div>
		<div v-if="!Load" class="loading" :style="{height:this.$common.ScreenHeight(400)}">
			<div style="margin: auto">
				<md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import PublisherCard from "@/components/frontpage/news-search/publisher-card";
export default {
	name: "publisher-block",
	components: {PublisherCard},
	data() {
		return{
			Load:false
		}
	},
	methods:{
		publish(){
			this.$api.newsApi.get().then(response=>{
				this.$store.commit('consumer/setPublishList', response.data.publishList)
				this.Load = true
			})
		}
	},
	computed:mapState({
		publishList:state=>state.consumer.publishList
	}),
	mounted() {
		this.publish()
	}
}
</script>

<style scoped>
.publisher-block{
	position: relative;
	overflow: hidden;
	height: 400px;
	padding: 8px;
}
.loading{
	width: 100%;
	display: flex;
}
</style>