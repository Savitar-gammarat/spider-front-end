<template>
	<div>
		<search-bar></search-bar>
		<transition name="slide-fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import SearchBar from "@/components/frontpage/search-bar";
export default {
	name: "data-analysis",
	components: {SearchBar}
}
</script>

<style scoped>
.slide-fade-enter-active {
	transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
	transform: translateX(10px);
	opacity: 0;
}

</style>