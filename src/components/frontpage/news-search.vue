<template>
	<div>
		<search-bar></search-bar>
		<router-view></router-view>
	</div>
</template>

<script>
import SearchBar from "@/components/frontpage/search-bar";
import SortList from "@/components/frontpage/sort-list";
export default {
	name: "news-search",
	components: {SearchBar}
}
</script>

<style scoped>

</style>