import Vue from 'vue'
import Router from 'vue-router'
// dashboard components
import dashboard from './views/dashboard'
import NewsManagement from './components/dashboard/content/news-management'
import SitesManagement from './components/dashboard/content/sites-management'
import FieldsManagement from './components/dashboard/content/fields-management'
import UserManagement from './components/dashboard/content/user-management'
import admin from './components/dashboard/content/admin'
// frontpage components
import Frontpage from './views/frontpage'
import DataAnalysis from './components/frontpage/data-analysis'
import NewsSearch from './components/frontpage/news-search'
Vue.use(Router)

export default new Router({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes: [
		{
			path:'/dashboard',
			name:'dashboard',
			component: dashboard,
			redirect:"/dashboard/admin",
			children:[
				{
					path:'news-management',
					name:'news-management',
					component: NewsManagement,
					meta:{
						title:"聚以析 | 管理控制平台"
					}
				},
				{
					path:'sites-management',
					name:'sites-management',
					component: SitesManagement,
					meta:{
						title:"聚以析 | 管理控制平台"
					}
				},
				{
					path:'user-management',
					name:'user-management',
					component: UserManagement,
					meta:{
						title:"聚以析 | 管理控制平台"
					}
				},
				{
					path:'fields-management',
					name:'fields-management',
					component: FieldsManagement,
					meta:{
						title:"聚以析 | 管理控制平台"
					}
				},
				{
					path:'admin',
					name:'admin',
					component: admin,
					meta:{
						title:"聚以析 | 管理控制平台"
					}
				}
			]
		},
		{
			path:'/frontpage',
			name:Frontpage,
			component:Frontpage,
			redirect:'/frontpage/news-search',
			meta:{
				title:"聚以析 | 新闻聚集分析平台"
			},
			children:[
				{
					path:'data-analysis',
					name:'data-analysis',
					component: DataAnalysis,
					meta:{
						title:"聚以析 | 新闻分析平台"
					}
				},
				{
					path:'news-search',
					name:'news-search',
					component: NewsSearch,
					meta:{
						title:"聚以析 | 新闻聚集平台"
					}
				}
			]
		},
		{
			path:'*',
			redirect:'/frontpage'
		}
	]
})
