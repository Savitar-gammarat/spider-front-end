<template>
	<div style="margin: 20px">
		<md-card style="padding: 30px;margin-bottom: 20px">
			<h3>请输入检索条件：</h3>

			<div>
				<div class="md-layout md-gutter">
					<div class="md-layout-item md-size-15">
						<md-field>
							<label for="news_id">Id</label>
							<md-input v-model="news_id" name="news_id" id="news_id"/>
						</md-field>
					</div>

					<div class="md-layout-item md-size-10">
						<md-field>
							<label for="status">Status</label>
							<md-select v-model="status" name="status" id="status" md-dense>
								<md-option value=0>未批注</md-option>
								<md-option value="1">已批注</md-option>
							</md-select>
						</md-field>
					</div>

					<div class="md-layout-item md-size-10">
						<md-field>
							<label for="site">Site</label>
							<md-select v-model="site" name="site" id="site" md-dense>
								<md-option v-for="i in siteList" :key="i.id" :value="i.id">{{i.name}}</md-option>
							</md-select>
						</md-field>
					</div>

					<div class="md-layout-item md-size-10">
						<md-field>
							<label for="limit">limit</label>
							<md-input v-model="limit" name="limit" id="limit" autocomplete="20"/>
						</md-field>
					</div>

					<div>
						<md-datepicker v-model="selectedDate">
							<label>Select date</label>
						</md-datepicker>
					</div>

					<div class="md-layout-item md-size-10">
						<md-button class="md-raised md-primary" style="width: 100%" @click="getNews">查询</md-button>
					</div>

					<div class="md-layout-item md-size-10">
						<md-button class="md-raised md-primary" style="width: 100%" @click="patchNews">批量修改</md-button>
					</div>

					<div class="md-layout-item md-size-10">
						<md-button class="md-raised md-accent" style="width: 100%" @click="active = true">删除选中</md-button>
					</div>
				</div>
			</div>
		</md-card>

		<md-card>
			<md-table>
				<md-table-toolbar>
					<h1 class="md-title">News</h1>
					<div class="md-layout-item md-size-10">
						<md-button class="md-primary" style="width: 100%" @click="alterMode = !alterMode">{{alterModeString}}</md-button>
					</div>
				</md-table-toolbar>
			</md-table>
		</md-card>

		<md-table md-card v-if="!alterMode" :style="{'max-height': this.$common.ScreenHeight(440)}">
			<md-table-row v-if="ifHasNews">
				<md-table-head md-numeric>ID</md-table-head>
				<md-table-head>Title</md-table-head>
				<md-table-head>Link</md-table-head>
				<md-table-head>Field</md-table-head>
			</md-table-row>

			<md-table-row v-for="i in news" :key="i.id">
				<md-table-cell md-numeric style="width: 5%">{{i.id}}</md-table-cell>
				<md-table-cell style="width: 40%">{{i.title}}</md-table-cell>
				<md-table-cell style="width: 30%"><a :href="i.link" target="_blank">{{i.link | fixLength}}</a></md-table-cell>
				<md-table-cell style="width: 20%">{{i.selectedFields | ifSelected}}</md-table-cell>
			</md-table-row>
		</md-table>

		<md-progress-bar md-mode="indeterminate" style="height: 4px;" v-if="loading"></md-progress-bar>

		<!--<md-table md-card v-if="alterMode" :style="{'max-height': this.$common.ScreenHeight(440)}">-->
			<!--<md-table-row v-if="ifHasNews">-->
				<!--<md-table-head md-numeric>ID</md-table-head>-->
				<!--<md-table-head >Title</md-table-head>-->
				<!--<md-table-head >Link</md-table-head>-->
				<!--<md-table-head >Field</md-table-head>-->
			<!--</md-table-row>-->

			<!--<md-table-row v-for="i in news" :key="i.id">-->
				<!--<md-table-cell md-numeric style="width: 5%">{{i.id}}</md-table-cell>-->
				<!--<md-table-cell style="width: 40%">-->
					<!--<md-field>-->
						<!--<md-input name="title" id="title" v-model="i.title" />-->
					<!--</md-field>-->
				<!--</md-table-cell>-->
				<!--<md-table-cell style="width: 30%"><a :href="i.link">{{i.link | fixLength}}</a></md-table-cell>-->
				<!--<md-table-cell style="width: 20%">-->
					<!--<md-field>-->
						<!--<label for="field">fields</label>-->
						<!--<md-select v-model="i.selectedFields" name="field" id="field" multiple>-->
							<!--<md-option v-for="i in fieldList" :key="i.id" :value="i.field">{{i.field}}</md-option>-->
						<!--</md-select>-->
					<!--</md-field>-->
				<!--</md-table-cell>-->
			<!--</md-table-row>-->
		<!--</md-table>-->

		<md-table v-model="news" v-if="alterMode" md-card @md-selected="onSelect" :style="{'max-height': this.$common.ScreenHeight(440)}">

			<md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
				<md-table-cell md-label="Id" md-numeric style="width: 5%">{{item.id}}</md-table-cell>
				<md-table-cell md-label="Title" style="width: 40%">
					<md-field>
						<md-input name="title" id="title" v-model="item.title" />
					</md-field>
				</md-table-cell>
				<md-table-cell md-label="Link" style="width: 30%"><a :href="item.link" target="_blank">{{item.link | fixLength}}</a></md-table-cell>
				<md-table-cell md-label="Fields" style="width: 20%">
					<md-field>
						<label for="field">fields</label>
						<md-select v-model="item.selectedFields" name="field" id="field" multiple>
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

		<md-dialog-alert
				:md-active.sync="third"
				md-title="error!"
				md-content="数据库没有您要检索的新闻" />

		<md-dialog :md-active.sync="active">
			<md-dialog-title v-if="checkMessage">OPPS!内容似乎丢失了...请再选择一次试试看</md-dialog-title>

			<md-content style="padding: 10px" v-if="!checkMessage">
				<md-table v-model="selected">
					<md-table-toolbar>
						<h1 class="md-title">您确定要删除以下新闻吗？</h1>
					</md-table-toolbar>

					<md-table-row slot="md-table-row" slot-scope="{ item }">
						<md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
						<md-table-cell md-label="Title" md-sort-by="title">{{ item.title }}</md-table-cell>
					</md-table-row>
				</md-table>
			</md-content>

			<md-dialog-actions>
				<md-button class="md-primary" @click="active = false">取消</md-button>
				<md-button class="md-primary" @click="deleteNews">确认删除</md-button>
			</md-dialog-actions>
		</md-dialog>
	</div>
</template>

<script>
import axios from 'axios'
import {mapActions, mapState} from 'vuex'
export default {
	name: "news-management",
	props:["fieldList"],
	data: () => ({
		status:0,
		site:1,
		limit:10,
		sites:null,
		alterMode:false,
		second:false,
		third:false,
		siteList:null,
		aaaaa:null,
		selectedDate: "",
		loading:false,
		news_id:"慎重！此参数会无视其他参数",
		selected:[],
		active:false
	}),
	methods:{
		...mapActions('business',['timeoutSetNews']),
		getNews(){
			this.loading = true
			this.$store.commit('business/setNews',[])
			if (this.news_id === "慎重！此参数会无视其他参数" || this.news_id === "") {
				axios.get('news',{params:{status:this.status, site_id:this.site, limit:this.limit}})
					.then(response=>{
						setTimeout(()=>{this.loading = false},500)
						this.timeoutSetNews(response.data.publishList.all_news)
					})
			}else {
				this.$api.searchApi.put(this.news_id).then(response=>{
					setTimeout(()=>{this.loading = false},500)
					this.timeoutSetNews(response.data.publishList)
				}).catch(error=>{
					setTimeout(()=>{
						this.loading = false
						this.third = true
					},500)
				})
			}
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
					this.$api.newsApi.put(value.id, value.title, value.link, value.site_id)
				}
			})
			this.nextPage()
		},
		nextPage(){
			this.loading = true
			this.$store.commit('business/setNews',[])
			setTimeout(()=>{
				axios.get('news',{params:{date:1}}).then(response=>{
					setTimeout(()=>{this.loading = false},500)
					this.timeoutSetNews(response.data.publishList)
					this.$store.commit('business/setNewsLength',response.data.length)
				})
			},500)
		},
		onSelect (items) {
			this.selected = items
		},
		deleteNews(){
			this.selected.forEach(value => {
				this.$api.newsApi.delete(value.id)
			})
			this.active = false
			this.nextPage()
		},
		getAlternateLabel (count) {
			let plural = ''

			if (count > 1) {
				plural = 's'
			}

			return `${count} new${plural} selected`
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
		},
		fixLength:function (value) {
			if (value.length > 50){
				return value.substring(0,50) + "..."
			}else {
				return value
			}
		}
	},
	computed:mapState({
		alterModeString(){
			if (this.alterMode){
				return "浏览模式"
			}else {
				return "修改模式"
			}
		},
		news:state=>state.business.news,
		ifHasNews(){
			return this.news.length !== 0;
		},
		checkMessage(){
			return this.selected.length === 0;
		}
	}),
	mounted(){
		this.getSites()
	}
}
</script>

<style scoped>

</style>