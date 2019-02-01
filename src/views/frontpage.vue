<template>
	<div class="md-layout" style="background-color: white">
		<div class="md-layout-item md-size-15"></div>
		<div class="md-layout-item md-size-70">
			<navigation></navigation>
			<router-view></router-view>
			<buttom-bar></buttom-bar>
		</div>
		<div class="md-layout-item md-size-15">
			<div>
				<sort-list></sort-list>
			</div>
		</div>
	</div>
</template>

<script>
import Navigation from "@/components/frontpage/navigation";
import ButtomBar from "@/components/common/buttom-bar";
import SortList from "@/components/frontpage/sort-list";
export default {
	name: "frontpage",
	components: {SortList, ButtomBar, Navigation}
}
</script>

<style scoped>

</style>