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
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
  const hasToken = localStorage.getItem('qt_intercity_token');

  if (to.path === '/intercity/login' && hasToken) {
    next('/intercity/analytics');
  } else if (to.path !== '/intercity/login' && !hasToken) {
    next('/intercity/login');
  } else {
    next();
  }
});

export default router;
