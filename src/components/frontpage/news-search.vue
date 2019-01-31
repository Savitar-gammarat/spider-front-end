<template>
	<div>
		<search-bar></search-bar>
		<publisher-block></publisher-block>
	</div>
</template>

<script>
import SearchBar from "@/components/frontpage/search-bar";
import PublisherBlock from "@/components/frontpage/news-search/publisher-block";
export default {
	name: "news-search",
	components: {PublisherBlock, SearchBar}
}
</script>

<style scoped>

</style>