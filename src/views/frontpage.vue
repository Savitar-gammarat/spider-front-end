<template>
	<div class="md-layout" style="background-color: white">
		<div class="md-layout-item md-size-15"></div>
		<div class="md-layout-item md-size-70">
			<navigation></navigation>
			<transition name="slide-fade" mode="out-in">
				<router-view></router-view>
			</transition>
			<buttom-bar></buttom-bar>
		</div>
		<div class="md-layout-item md-size-15"></div>
	</div>
</template>

<script>
import Navigation from "@/components/frontpage/navigation";
import ButtomBar from "@/components/common/buttom-bar";
export default {
	name: "frontpage",
	components: {ButtomBar, Navigation}
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