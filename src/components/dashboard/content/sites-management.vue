<template>
	<div style="margin: 20px">
		<md-card style="padding: 30px;">

			<h3>站点管理</h3>

			<div class="md-layout md-gutter">

				<div class="md-layout-item md-size-15">
					<md-field>
						<label for="site">新增领域</label>
						<md-input name="site" id="site" disabled v-model="site" />
					</md-field>
				</div>

				<div class="md-layout-item md-size-10">
					<md-button class="md-raised md-primary" disabled style="width: 100%">添加</md-button>
				</div>

				<div class="md-layout-item md-size-10">
					<md-button class="md-raised md-accent" disabled style="width: 100%">删除选中</md-button>
				</div>
			</div>
		</md-card>

		<md-progress-bar v-if="loading" md-mode="indeterminate" style="height: 4px"></md-progress-bar>

		<div class="md-layout md-gutter" style="margin-top: 20px">
			<div class="md-layout-item md-size-35">
				<md-table v-model="siteList" md-card @md-selected="onSelect" :style="{'height': this.$common.ScreenHeight(320)}">
					<md-table-toolbar>
						<h1 class="md-title">Sites</h1><span>当前选中{{selected | showSite}}</span>
					</md-table-toolbar>

					<md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
						<md-table-cell md-label="Id" md-sort-by="id">{{item.id}}</md-table-cell>
						<md-table-cell md-label="Site" md-sort-by="name">{{item.name}}</md-table-cell>
					</md-table-row>
				</md-table>
			</div>
			<div class="md-layout-item md-size-65">
				<site-news-chart @passData="passData"></site-news-chart>
			</div>
		</div>
	</div>
</template>

<script>
import SiteNewsChart from "@/components/dashboard/content/sies-management/site-news-chart";
export default {
	name: "sites-management",
	components: {SiteNewsChart},
	data(){
		return{
			selected:[],
			site:null,
			sites:[],
			siteList:[]
		}
	},
	methods:{
		onSelect (items) {
			this.selected = items
		},
		passData(data) {
			this.sites = data
		},
		getSites(){
			this.$api.siteApi.get().then(response=>{this.siteList = response.data.sites_list})
		}
	},
	filters:{
		showSite: function(value){
			let s = ""
			value.forEach(value=>{
				s += value.name + ","
			})
			return s
		}
	},
	computed:{
		loading(){
			return this.sites.length === 0;
		}
	},
	mounted(){
		this.getSites()
	}
}
</script>

<style scoped>

</style>