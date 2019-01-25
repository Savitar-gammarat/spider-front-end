<template>
	<div style="margin: 20px">
		<md-card style="padding: 30px;margin-bottom: 20px;width: 40%">

			<h3>新增站点</h3>

			<div class="md-layout md-gutter">

				<div class="md-layout-item md-size-30">
					<md-field>
						<label for="field">新增领域</label>
						<md-input name="field" id="field" v-model="field" />
					</md-field>
				</div>

				<div class="md-layout-item md-size-30">
					<md-button class="md-raised md-primary" style="width: 100%" @click="addField">添加</md-button>
				</div>

				<div class="md-layout-item md-size-30">
					<md-button class="md-raised md-accent" style="width: 100%" @click="deleteField">删除选中</md-button>
				</div>
			</div>
			<span>如需删除，请多点几下，看见当前选中有内容了再点删除即可</span>
		</md-card>
		

		<md-table v-model="fieldList" md-card @md-selected="onSelect" style="width: 40%" :style="{'height': this.$common.ScreenHeight(320)}">
			<md-table-toolbar>
				<h1 class="md-title">Fields</h1><span>当前选中{{selected | showField}}</span>
			</md-table-toolbar>

			<md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
				<md-table-cell md-label="Id" md-sort-by="id">{{item.id}}</md-table-cell>
				<md-table-cell md-label="Field" md-sort-by="field">{{item.field}}</md-table-cell>
			</md-table-row>
		</md-table>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: "fields-management",
	props:["fieldList"],
	data(){
		return{
			selected:[],
			field:null
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
	}
}
</script>

<style scoped>

</style>