<template>
	<div style="margin: 20px">
		<md-card style="padding: 30px;">

			<h3>领域管理</h3>

			<div class="md-layout md-gutter">

				<div class="md-layout-item md-size-15">
					<md-field>
						<label for="field">新增领域</label>
						<md-input name="field" id="field" v-model="field" />
					</md-field>
				</div>

				<div class="md-layout-item md-size-10">
					<md-button class="md-raised md-primary" style="width: 100%" @click="addField">添加</md-button>
				</div>

				<div class="md-layout-item md-size-10">
					<md-button class="md-raised md-accent" style="width: 100%" @click="deleteField">删除选中</md-button>
				</div>
			</div>
		</md-card>

		<md-progress-bar v-if="loading" md-mode="indeterminate" style="height: 4px"></md-progress-bar>

		<div class="md-layout md-gutter" style="margin-top: 20px">
			<div class="md-layout-item md-size-35">
				<md-table v-model="fieldList" md-card @md-selected="onSelect" :style="{'height': this.$common.ScreenHeight(320)}">
					<md-table-toolbar>
						<h1 class="md-title">Fields</h1><span>当前选中{{selected | showField}}</span>
					</md-table-toolbar>

					<md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
						<md-table-cell md-label="Id" md-sort-by="id">{{item.id}}</md-table-cell>
						<md-table-cell md-label="Field" md-sort-by="field">{{item.field}}</md-table-cell>
					</md-table-row>
				</md-table>
			</div>
			<div class="md-layout-item md-size-65">
				<field-news-chart @passData="passData"></field-news-chart>
			</div>
		</div>

	</div>
</template>

<script>
import axios from 'axios'
import FieldNewsChart from "@/components/dashboard/content/fields-management/field-news-chart";
export default {
	name: "fields-management",
	components: {FieldNewsChart},
	props:["fieldList"],
	data(){
		return{
			selected:[],
			field:null,
			fields:[]
		}
	},
	methods:{
		onSelect (items) {
			this.selected = items
		},
		addField(){
			if (this.site !== null){
				axios.put('field',{field_name:this.field})
				this.$parent.getFields()
				alert("成功添加")
			}
		},
		deleteField(){
			this.selected.forEach(value => {
				axios.delete('field',{data:{field_id:value.id}})
					.then(response=>{
						this.selected = []
						this.$parent.getFields()
						alert("成功删除")
					})
			})
		},
		passData(data) {
			this.fields = data
		}
	},
	filters:{
		showField: function(value){
			let s = ""
			value.forEach(value=>{
				s += value.field + ","
			})
			return s
		}
	},
	computed:{
		loading(){
			return this.fields.length === 0;
		}
	}
}
</script>

<style scoped>

</style>