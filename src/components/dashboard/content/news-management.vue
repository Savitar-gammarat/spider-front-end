<template>
	<div style="margin: 20px">
		<md-card style="padding: 30px;margin-bottom: 20px">
			<h3>请输入检索条件</h3>

			<div>
				<div class="md-layout md-gutter">
					<div class="md-layout-item md-size-15">
						<md-field>
							<label for="status">Status</label>
							<md-select v-model="status" name="status" id="status" md-dense>
								<md-option value=0>未批注</md-option>
								<md-option value="1">已批注</md-option>
							</md-select>
						</md-field>
					</div>

					<div class="md-layout-item md-size-15">
						<md-field>
							<label for="site">Site</label>
							<md-select v-model="site" name="site" id="site" md-dense>
								<md-option v-for="i in siteList" :key="i.id" :value="i.id">{{i.name}}</md-option>
							</md-select>
						</md-field>
					</div>

					<div class="md-layout-item md-size-15">
						<md-field>
							<label for="limit">limit</label>
							<md-input v-model="limit" name="limit" id="limit" autocomplete="20"/>
						</md-field>
					</div>

					<div class="md-layout-item md-size-10">
						<md-button class="md-raised md-primary" style="width: 100%" @click="getNews">查询</md-button>
					</div>

					<div class="md-layout-item md-size-10">
						<md-button class="md-raised md-primary" style="width: 100%" @click="alterMode = !alterMode">{{alterModeString}}</md-button>
					</div>
					
					<div class="md-layout-item md-size-10">
						<md-button class="md-raised md-primary" style="width: 100%" @click="patchNews">批量修改</md-button>
					</div>
				</div>
			</div>
		</md-card>

		<md-card>
			<md-table>
				<md-table-toolbar>
					<h1 class="md-title">News</h1>
				</md-table-toolbar>
			</md-table>
		</md-card>

		<md-table md-card :style="{'max-height': this.$common.ScreenHeight(380)}" v-if="!alterMode">

			<md-table-row>
				<md-table-head md-numeric>ID</md-table-head>
				<md-table-head>Title</md-table-head>
				<md-table-head>Link</md-table-head>
				<md-table-head>Click</md-table-head>
				<md-table-head>Status</md-table-head>
				<md-table-head>Site</md-table-head>
				<md-table-head>Field</md-table-head>
			</md-table-row>

			<md-table-row v-for="i in news" :key="i.id">
				<md-table-cell md-numeric>{{i.id}}</md-table-cell>
				<md-table-cell>{{i.title}}</md-table-cell>
				<md-table-cell><a :href="i.link" target="_blank">{{i.link}}</a></md-table-cell>
				<md-table-cell>{{i.click}}</md-table-cell>
				<md-table-cell>{{i.status}}</md-table-cell>
				<md-table-cell>{{i.site_id}}</md-table-cell>
				<md-table-cell>{{i.selectedFields | ifSelected}}</md-table-cell>
			</md-table-row>
		</md-table>

		<md-table md-card :style="{'max-height': this.$common.ScreenHeight(380)}" v-if="alterMode">

			<md-table-row>
				<md-table-head md-numeric>ID</md-table-head>
				<md-table-head>Title</md-table-head>
				<md-table-head>Link</md-table-head>
				<md-table-head>Click</md-table-head>
				<md-table-head>Status</md-table-head>
				<md-table-head>Site</md-table-head>
				<md-table-head>Field</md-table-head>
			</md-table-row>

			<md-table-row v-for="i in news" :key="i.id">
				<md-table-cell md-numeric>{{i.id}}</md-table-cell>
				<md-table-cell>{{i.title}}</md-table-cell>
				<md-table-cell><a :href="i.link">{{i.link}}</a></md-table-cell>
				<md-table-cell>{{i.click}}</md-table-cell>
				<md-table-cell>{{i.status}}</md-table-cell>
				<md-table-cell>{{i.site_id}}</md-table-cell>
				<md-table-cell>
					<md-field>
						<label for="field">fields</label>
						<md-select v-model="i.selectedFields" name="field" id="field" multiple>
							<md-option v-for="i in fieldList" :key="i.id" :value="i.field">{{i.field}}</md-option>
						</md-select>
					</md-field>
				</md-table-cell>
			</md-table-row>
		</md-table>
		<md-dialog-alert
				:md-active.sync="second"
				md-title="Post created!"
				md-content="修改成功" />
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: "news-management",
	props:["fieldList"],
	data: () => ({
		news: [],
		status:0,
		site:1,
		limit:10,
		sites:null,
		alterMode:false,
		second:false,
		siteList:null
	}),
	methods:{
		getNews(){
			axios.get('news',{params:{status:this.status, site_id:this.site, limit:this.limit}})
				.then(response=>{
					this.news = response.data.publishList.all_news
					// this.news.forEach(value => {
					// 	value["selectedFields"] = []
					// })
				})
		},
		getSites(){
			axios.get('site').then(response=>{
				this.siteList = response.data.sites_list
			})
		},
		patchNews(){
			this.news.forEach(value => {
				if (value.selectedFields.length > 0){
					axios.patch('news', {news_id:value.id, field_name_list:value.selectedFields})
						.then(response=>{
							this.second = true
						})
						.catch(error=>{
							alert("身份过期")
						})
				}
			})
			this.alterMode = false
		}
	},
	filters:{
		ifSelected: function(value){
			if (value.length === 0){
				return "数据库没有领域信息"
			}else {
				let s = ""
				for(let i in value){
					s += value[i] + "、"
				}
				return s
			}
		}
	},
	computed:{
		alterModeString(){
			if (this.alterMode){
				return "浏览模式"
			}else {
				return "修改模式"
			}
		}
	},
	mounted(){
		this.getSites()
	}
}
</script>

<style scoped>

</style>