<template>
	<div>
		<div v-if="newsLength" :style="{'height':this.$common.ScreenHeight(365)}">
			<h3>没有搜索到您检索的信息，不如换个字段试试？</h3>
		</div>
		<div v-if="!newsLength">
			<div style="border-radius: 10px;padding: 5px 0 5px 10px" v-if="!newsCapcacity">
				<md-content class="md-scrollbar" :style="{'height':this.$common.ScreenHeight(365)}">
					<div class="med">
						<div class="md-layout" v-for="i in searchNews" :key="i.id" style="position: relative;margin-bottom: 40px">
							<div>
								<span>{{i.datetime | lastTime}}</span>
							</div>
							<a :href="i.link" target="_blank" style="text-decoration: none;position: absolute;left: 50px;">
								<h3 class="med-title">{{i.title}}</h3>
								<span class="med-link">{{i.link}}</span>
							</a>
						</div>
					</div>
				</md-content>
			</div>
		</div>
		<div class="md-layout" :style="{'height':this.$common.ScreenHeight(365)}" v-if="newsCapcacity">
			<div style="margin: auto">
				<md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: "publisher-list",
	data(){
		return{

		}
	},
	methods:{

	},
	computed:mapState({
		searchNews:state=>state.consumer.searchNews,
		searching:state=>state.consumer.searching,
		newsCapcacity(){
			return this.searchNews === null && this.searching
		},
		newsLength(){
			if (this.searchNews === null){
				return false
			} else {
				return this.searchNews.length === 0
			}
		}
	})
}
</script>

<style scoped>
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
</style>