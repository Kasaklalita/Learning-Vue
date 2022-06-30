import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from "./pages/AllUsers";
import CourseGoals from "./pages/CourseGoals";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: AllUsers
		},
		{
			path: '/goals',
			component: CourseGoals
		}
	]
})

const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);
router.isReady().then(function() {
	app.mount('#app');
});
