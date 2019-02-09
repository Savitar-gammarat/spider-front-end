<template>
	<div style="position: relative">
		<input class="search" placeholder="Search Headlines..." v-model="search_message" @keydown.enter="search">
		<md-button class="md-icon-button search-icon" @click="search">
			<md-icon>search</md-icon>
		</md-button>
	</div>
</template>

<script>
export default {
	name: "search-block",
	data(){
		return{
			search_message:null,
			last_message:null
		}
	},
	methods:{
		search(){
			if (!(this.search_message === null || this.search_message === "")){
				if (this.last_message !== this.search_message || this.last_message === null){
					let route = this.$route.path
					route = route.split("/")[2]
					if (route === "news-search"){
						this.$router.push({path:"/frontpage/news-search/publisher-list"})
						this.$store.commit('consumer/setSearchNews',null)
						this.$store.commit('consumer/changeSearchingStatus', true)
						this.$api.searchApi.get(this.search_message).then(response=>{
							this.$store.commit('consumer/setSearchNews',response.data.all_news)
							this.$store.commit('consumer/changeSearchingStatus', false)
							this.last_message = this.search_message
						})
					}else {
						this.$router.push({path:"/frontpage/data-analysis"})
						this.$api.keywordsAnalysisApi.get(this.search_message).then(response=>{
							this.$store.commit('consumer/setAnalysisOptions',response.data.data)
							this.last_message = this.search_message
							this.$router.push({path:"/frontpage/data-analysis/analysis-block"})
						}).catch(error=>{
							this.$router.push({path:"/frontpage/data-analysis/error"})
						})
					}
				}
			}
		}
	}
}
</script>

<style scoped>
.search{
	box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
	border-radius: 2px;
	width: 100%;
	min-height: 48px;
	display: flex;
	position: relative;
	font-family: inherit;
	margin: 4px 0 24px;
	padding: 5px 0 0 20px;
	border: none;
}
.search-icon{
	position: absolute;
	right: 10px;
	top: 6px;
}
</style>