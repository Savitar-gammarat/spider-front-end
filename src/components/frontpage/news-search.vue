<template>
	<div>
		<search-bar></search-bar>
		<router-view></router-view>
	</div>
</template>

<script>
import SearchBar from "@/components/frontpage/search-bar";
export default {
	name: "news-search",
	components: {SearchBar}
}
</script>

<style scoped>

</style>