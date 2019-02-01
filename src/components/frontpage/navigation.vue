<template>
	<div>
		<!--可参照Vue Material中Drawer-->
		<md-toolbar class="navigation md-transparent">
			<h3 class="md-title" style="flex: 1">
				<logo></logo>聚以析
			</h3>

			<md-menu md-direction="bottom-end" :mdCloseOnClick="closeOnClick" :mdCloseOnSelect="closeOnSelect">
				<md-icon md-menu-trigger style="cursor: pointer" class="md-size-2x">view_headline</md-icon>

				<md-menu-content>
					<md-menu-item>
						<md-icon>accessibility</md-icon>
						<span>用户登录</span>
					</md-menu-item>
					<md-menu-item>
						<md-icon>settings</md-icon>
						<span>新闻排序</span>
					</md-menu-item>
					<md-menu-item>
						<md-icon>translate</md-icon>
						<span>数据分析</span>
					</md-menu-item>
					<md-menu-item>
						<md-icon>fiber_new</md-icon>
						<span>查看新闻</span>
					</md-menu-item>
				</md-menu-content>
			</md-menu>
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
			closeOnClick: false,
			closeOnSelect: true
		}
	}
}
</script>

<style scoped>
.navigation{
	height: 150px;
	box-shadow: none;
}
.toggle :hover{
	background-color: #eee;
}
</style>