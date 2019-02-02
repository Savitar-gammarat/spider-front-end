<template>
	<div class="sort-list">
		<md-button @click="changeMode" v-if="!change" class="slickButton">
			<md-icon>unfold_more</md-icon>
			<br>自定义排序
		</md-button>
		<md-button @click="changeMode" v-if="change" class="slickButton">
			<md-icon>unfold_more</md-icon>
			<br>排序完成
		</md-button>
		<div v-if="change">
			<div class="root">
				<SlickList lockAxis="y" v-model="items">
					<SlickItem v-for="(item, index) in items" :index="index" :key="index" class="slickItem">
						{{item}}
					</SlickItem>
				</SlickList>
			</div>
		</div>
		<div v-if="!change">
			<div class="slickItem" v-for="(item, index) in sortList" :index="index" :key="index">
				<span>{{item}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort'
import {mapState,mapGetters} from 'vuex'
export default {
	name: "sort-list",
	components:{ SlickList, SlickItem },
	data() {
		return {
			items: [],
			change:false
		}
	},
	methods:{
		changeMode(){
			if (this.items.length === 0){
				this.items = this.sortList
				this.change = !this.change
			} else{
				this.$store.commit('consumer/setCustomization', this.items)
				localStorage.setItem('customization',this.items)
				let username = sessionStorage.username
				if (username){
					this.$api.userApi.put(username,localStorage.customization)
				}
				this.change = !this.change
			}
		},
		getLocalCustom(){
			let customization = localStorage.getItem('customization').split(",")
			if (customization) {
				this.$store.commit('consumer/setCustomization', customization)
			}
		}
	},
	computed:mapState({
		...mapGetters('consumer',['sortList'])
	}),
	mounted(){
		this.getLocalCustom()
	}
}
</script>

<style scoped>
.slickItem {
	width: 125px;
	border-radius: 5px;
	padding: 7px;
	border: 1px solid #efefef;
	text-align: center;
}
.slickItem:hover{
	cursor: pointer;
	background-color: beige;
}
.slickButton{
	width: 125px;
	height: 70px;
	margin: 0;
	border-radius: 5px;
	padding: 10px;
	border: 1px solid #efefef;
}
.sort-list{
	position: absolute;
	top: 255px;
	right: 50px;
}
</style>