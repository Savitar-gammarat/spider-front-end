<template>
	<div>
		<search-block></search-block>
		<search-options></search-options>
	</div>
</template>

<script>
import SearchBlock from "@/components/frontpage/search-bar/search-block";
import SearchOptions from "@/components/frontpage/search-bar/search-options";
export default {
	name: "search-bar",
	components: {SearchOptions, SearchBlock}
}
</script>

<style scoped>

</style>