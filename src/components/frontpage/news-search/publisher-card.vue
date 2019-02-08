<template>
	<div class="publisher-card">
		<publisher-header :color="item.color" :font="item.font">
			<template slot="logo">
				<!--插槽插图片-->
				<img :src="item.logo" alt="" @click="goSite(id)">
			</template>
			<template slot="title">
				<span :style="titleColor">{{item.name}}</span>
			</template>
		</publisher-header>
		<publisher-data-wrapper :dataList="item.all_news" :id="id"></publisher-data-wrapper>
	</div>
</template>

<script>
import PublisherHeader from "@/components/frontpage/news-search/publisher-card/publisher-header";
import PublisherDataWrapper from "@/components/frontpage/news-search/publisher-card/publisher-data-wrapper";
export default {
	name: "publisher-card",
	components: {PublisherDataWrapper, PublisherHeader},
	props:['item','id'],
	methods:{
		goSite(id){
			this.$router.push({path:`/frontpage/news-search/publisher-site/${id}`})
		}
	},
	computed:{
		titleColor(){
			return{
				"color": this.item.font
			}
		}
	}
}
</script>

<style scoped>
img{
	width: 100%;
	max-height: 100%;
	max-width: 100%;
}
img:hover{
	cursor: pointer;
}
.publisher-card{
	border-radius: 5px;
}
</style>