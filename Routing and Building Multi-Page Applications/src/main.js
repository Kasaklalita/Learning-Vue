import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from "./pages/TeamsList";
import UsersList from "./pages/UsersList";
import TeamMembers from "./components/teams/TeamMembers";
import NotFound from "./pages/NotFound";
import TeamsFooter from "./pages/TeamsFooter";
import UsersFooter from "./pages/UsersFooter";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/teams'
		},
		{
			name: 'teams',
			path: '/teams',
			components: {
				default: TeamsList,
				footer: TeamsFooter
			},
			children: [
				{
					name: 'team-members',
					path: ':teamId',
					component: TeamMembers,
					props: true
				}
			]
			//alias: '/'
		},
		{
			path: '/users',
			components: {
				default: UsersList,
				footer: UsersFooter
			},
			beforeEnter(to, from, next) {
				console.log('users beforeEnter');
				console.log(to, from);
				next();

			}
		},
		{
			path: '/:notFound(.*)',
			component: NotFound
		}
	],
	linkActiveClass: 'router-link-active',
	scrollBehavior(_, _2, savedPosition) {
		//console.log(to, from, savedPosition);
		if (savedPosition) {
			return savedPosition;
		}
		return {
			left: 0,
			top: 0
		};
	}
});

router.beforeEach(function(to, from, next) {
	console.log('Global beforeEach');
	console.log(to, from);
	// if (to.name === 'team-members') {
	// 	next();
	// } else {
	// 	next({
	// 		name: 'team-members',
	// 		params: {
	// 			team: 't2'
	// 		}
	// 	});
	// }
	next();
});
//
// router.afterEach(function(to, from) {
// 	// sending analytics data
// });


const app = createApp(App)

app.use(router);
app.mount('#app');
