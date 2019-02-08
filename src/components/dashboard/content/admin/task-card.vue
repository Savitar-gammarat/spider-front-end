<template>
	<md-card class="card" md-with-hover>
		<div class="title">公告</div>
		<div class="md-layout md-gutter">
			<div class="md-layout-item" style="margin-left: 10px">
				<div class="md-subhead" style="position: relative">
					<span style="position: absolute;left: -20px;top: -3px;">
						<i class="material-icons" style="color: red">priority_high</i>
					</span>
					<span >今日待处理新闻数量：</span>
					<span style="margin-left: 10px;font-weight: 800">{{length}}</span>
				</div>
				<br>
				<div class="md-subhead" style="position: relative">
					<span style="position: absolute;left: -20px;top: -3px;">
						<i class="material-icons" style="color: red">priority_high</i>
					</span>
					<span >历史未处理新闻数量：</span>
					<span style="margin-left: 10px;font-weight: 800">{{preLength}} 不要偷懒哦(╥﹏╥)  </span>
				</div>
				<br>
				<div class="md-subhead" style="position: relative">
					<span style="position: absolute;left: -20px;top: -3px;">
						<i class="material-icons" style="color: red">priority_high</i>
					</span>
					<span >此版本是最新测试版本：</span>
					<span style="margin-left: 10px;font-weight: 800">V0201929</span>
				</div>
				<br>
				<div class="md-subhead" style="position: relative">
					<span style="position: absolute;left: -20px;top: -3px;">
						<i class="material-icons" style="color: red">priority_high</i>
					</span>
					<span >本次更新内容：</span>
					<span style="margin-left: 10px;font-weight: 800">用户自定义排序、领域趋势分析、热点关键字分析、滚动懒加载</span>
				</div>
			</div>
		</div>
	</md-card>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: "task-card",
	computed:mapState({
		length:state=>state.business.newsLength,
		preLength:state=>state.business.preNews
	})
}
</script>

<style scoped>
	.card {
		margin: 20px;
		padding: 20px;
		height: 230px;
		vertical-align: top;
		transition: all .3s ease;
	}
	.title{
		font-size: 18px;
		letter-spacing: .01em;
		line-height: 20px;
		margin-bottom: 20px;
	}
</style>