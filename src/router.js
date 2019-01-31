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
					component: NewsManagement
				},
				{
					path:'sites-management',
					name:'sites-management',
					component: SitesManagement
				},
				{
					path:'user-management',
					name:'user-management',
					component: UserManagement
				},
				{
					path:'fields-management',
					name:'fields-management',
					component: FieldsManagement
				},
				{
					path:'admin',
					name:'admin',
					component: admin
				}
			]
		},
		{
			path:'/frontpage',
			name:Frontpage,
			component:Frontpage,
			redirect:'/frontpage/news-search',
			children:[
				{
					path:'data-analysis',
					name:'data-analysis',
					component: DataAnalysis,
				},
				{
					path:'news-search',
					name:'news-search',
					component: NewsSearch,
				}
			]
		},
		{
			path:'*',
			redirect:'/frontpage'
		}
	]
})
