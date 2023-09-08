<template>
	<header class='header'>
		<ul class='header-left'>
			<li v-for='(menu, menu_idx) in menus' :key='menu_idx'>
				<router-link :to='`/intercity/${ menu.path }/`'>
					<h6 class='header-left__text btn' :class="{ 'active': menu.id === id }">
						{{ menu.name }}
					</h6>
				</router-link>
			</li>
		</ul>

		<ul class='header-right'>
			<li v-for='(lang, lang_idx) in langs' :key='lang_idx'>
				<p class='header-right__text btn'
					:class="{ 'active': lang.id === active }"
					@click='change_lang(lang.id)'
				>
					{{ lang.name }}
				</p>
			</li>
		</ul>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const active = ref(localStorage.getItem('lang'));
let id = '';
const menus = [
	{
		id: 'analytics',
		path: 'analytics',
		name: 'Аналитика',
	}, {
		id: 'drivers',
		path: 'drivers/list',
		name: 'Водители',
	}, {
		id: 'history',
		path: 'history',
		name: 'История поездок',
	},
];
const langs = [
	{
		id: 'kk',
		name: 'ҚАЗ',
	}, {
		id: 'ru',
		name: 'РУС',
	}, {
		id: 'en',
		name: 'ENG',
	},
];

watch(() => {
	id = route.matched[1].path.split('/')[2];
});

function change_lang(lang) {
	localStorage.setItem('lang', lang)
	active.value = localStorage.getItem('lang');
}
</script>
