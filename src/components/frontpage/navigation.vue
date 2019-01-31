<template>
	<div>
		<!--可参照Vue Material中Drawer-->
		<md-toolbar class="navigation md-transparent">
			<h3 class="md-title" style="flex: 1">
				<logo></logo>News aggregation
			</h3>
			<md-icon style="cursor: pointer" class="md-size-2x" @click.native="showCard = !showCard">view_headline</md-icon>
			<!--<slide-menu></slide-menu>-->
			<div class="relative">
				<md-card class="md-elevation-10 slide-card" v-if="showCard">
					<md-list>
						<md-list-item class="toggle">
							<md-icon>move_to_inbox</md-icon>
							<span class="md-list-item-text">Rearrange</span>
						</md-list-item>

						<md-list-item class="toggle">
							<md-icon>send</md-icon>
							<span class="md-list-item-text">Preference</span>
						</md-list-item>

						<md-list-item class="toggle">
							<md-icon>delete</md-icon>
							<span class="md-list-item-text">Trash</span>
						</md-list-item>

						<md-list-item class="toggle">
							<md-icon>error</md-icon>
							<span class="md-list-item-text">Spam</span>
						</md-list-item>
					</md-list>
				</md-card>
			</div>
		</md-toolbar>
	</div>
</template>

<script>
import Logo from "@/components/common/logo";
export default {
	name: "navigation",
	components: {Logo},
	data(){
		return{
			showCard:false
		}
	}
}
</script>

<style scoped>
.slide-card{
	width: 300px;
	position: absolute;
	right: 20px;
	top: 100px;
	
}
.navigation{
	height: 150px;
	box-shadow: none;
}
.md-list-item-text{
	cursor: pointer;
}
.toggle :hover{
	background-color: #eee;
}
</style>