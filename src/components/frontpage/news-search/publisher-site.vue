<template>
	<div style="position: relative">
		<div class="nav-btn" style="left: -150px;">
			<md-button class="md-icon-button" style="height: 60px;width: 60px" @click="turn(-1)">
				<md-icon class="md-size-2x">keyboard_arrow_left</md-icon>
			</md-button>
		</div>
		<div class="nav-btn" style="right: -150px;">
			<md-button class="md-icon-button" style="height: 60px;width: 60px" @click="turn(1)">
				<md-icon class="md-size-2x">keyboard_arrow_right</md-icon>
			</md-button>
		</div>
		<transition name="slide-fade" mode="out-in">
			<site-field-news-analysis v-if="status === 1"></site-field-news-analysis>
			<site-keyword-news-analysis v-if="status === 2"></site-keyword-news-analysis>
			<div v-if="status === 3">
				<span style="font-weight: 600;font-size: 19px">近期{{name}}新闻</span>
				<div style="border-radius: 10px;padding: 5px 0 5px 10px">
					<md-content class="md-scrollbar" :style="{'height':this.$common.ScreenHeight(395),'min-height':'650px'}">
						<div class="med">
							<div class="md-layout" v-for="i in News" :key="i.id" style="position: relative;margin-bottom: 40px">
								<div>
									<span>{{i.datetime | lastTime}}</span>
								</div>
								<a :href="i.link" target="_blank" style="text-decoration: none;position: absolute;left: 50px;">
									<h3 class="med-title">{{i.title}}</h3>
									<span class="med-link">{{i.link | fixlink}}</span>
								</a>
							</div>
						</div>
					</md-content>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import SiteFieldNewsAnalysis from "@/components/frontpage/news-search/publisher-site/site-field-news-analysis";
import SiteKeywordNewsAnalysis from "@/components/frontpage/news-search/publisher-site/site-keyword-news-analysis";
export default {
	name: "publisher-site",
	components: {SiteKeywordNewsAnalysis, SiteFieldNewsAnalysis},
	data(){
		return{
			status:1,
			News:null,
			name:null,
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
			}
		}
	},
	methods:{
		turn(n){
			if (n === -1){
				if (this.status>1){
					this.status = this.status -1
				} else {
					this.status = 3
				}
			} else {
				if (this.status<3){
					this.status = this.status +1
				} else {
					this.status =1
				}
			}
		}
	},
	computed:mapState({
		searchNews:state=>state.consumer.searchNews,
	}),
	mounted(){
		let route = this.$route.path.split("/")
		route = route[route.length-1]
		this.$api.newsApi.get(1,route,200).then(response=>{
			this.News = response.data.publishList.all_news
			this.name = response.data.publishList.name
		})
		this.$api.keywordsAnalysisApi.post(route).then(response=>{
			this.option.dataset.source = response.data.source
			this.option.series = response.data.series
			this.option.title.text = response.data.site_name + "近期高频关键词"
			sessionStorage.setItem(`${this.$route.path}&keywords`, JSON.stringify({option:this.option}))
		})
	}
}
</script>

<style scoped>
.nav-btn{
	position: absolute;
	top: 275px;
}
.med{
	padding: 20px 0;
}
.med a{
	cursor: pointer;
	font-family: arial,sans-serif;
	margin-bottom: 20px;
}
.med-title{
	color: #609;
	font-size: 18px;
	padding: 0;
	margin: 0;
	line-height: 1.2;
	font-weight: normal;
}
.med-title :hover{
	border-bottom:1px #609 solid;
}
.med-link{
	color: #006621;
}
.md-content{
	overflow: auto;
}
.slide-fade-enter-active {
	transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
	transform: translateX(10px);
	opacity: 0;
}
</style>