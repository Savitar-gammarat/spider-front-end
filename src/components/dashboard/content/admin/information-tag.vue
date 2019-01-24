<template>
	<div class="md-elevation-1">
		<md-content style="background-color: #F5F5F6">
			<div class="md-layout">
				<div class="md-layout-item md-size-100" style="margin: 30px 0 20px 0">
					<div class="md-display-2" style="text-align: center;">
						<slot name="number"></slot>
					</div>
				</div>
				<div class="md-layout-item mdsize-100" style="margin-bottom: 20px">
					<div class="md-subhead" style="text-align: center">
						<slot name="title"></slot>
					</div>
				</div>
			</div>
		</md-content>
	</div>
</template>

<script>
export default {
	name: "information-tag"
}
</script>

<style scoped>
.md-content {
	width: 100%;
	height: 100%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
}
</style>