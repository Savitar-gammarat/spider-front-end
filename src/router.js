import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './views/dashboard'
import NewsManagement from './components/dashboard/content/news-management'
import SitesManagement from './components/dashboard/content/sites-management'
import FieldsManagement from './components/dashboard/content/fields-management'
import UserManagement from './components/dashboard/content/user-management'
import admin from './components/dashboard/content/admin'
Vue.use(Router)

export default new Router({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes: [
		{
			path:'/',
			name:'dashboard',
			component: dashboard,
			children:[
				{
					path:'news-management',
					name:'news-management',
					component: NewsManagement,
				},
				{
					path:'sites-management',
					name:'sites-management',
					component: SitesManagement,
				},
				{
					path:'user-management',
					name:'user-management',
					component: UserManagement,
				},
				{
					path:'fields-management',
					name:'fields-management',
					component: FieldsManagement,
				},
				{
					path:'admin',
					name:'admin',
					component: admin,
				}
			]
		}
	]
})
