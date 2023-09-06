import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/intercity',
		component: () => import('@/layouts/Default.vue'),
		children: [
			{
				path: 'analytics',
				name: 'Analytics',
				component: () => import('@/views/Analytics.vue'),
			}, {
				path: 'drivers',
				name: 'Drivers',
				children: [
					{
						path: '',
						redirect: 'intercity/drivers/list',
					}, {
						path: 'list',
						name: 'DriversList',
						component: () => import('@/views/DriversList.vue'),
					}, {
						path: 'archive',
						name: 'DriversArchive',
						component: () => import('@/views/DriversArchive.vue'),
					},
				],
			}, {
				path: 'history',
				name: 'TravelHistory',
				component: () => import('@/views/History.vue'),
			},
		],
	}, {
		path: '/intercity',
		component: () => import('@/layouts/Auth.vue'),
		children: [
			{
				path: 'login',
				name: 'Login',
				component: () => import('@/views/Login.vue'),
			},
		],
	}, {
		path: '/:pathMatch(.*)*',
		redirect: '/intercity/login',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
