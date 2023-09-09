<template>
	<main class='home'>
		<div class='home-control'>
			<Search />
			<Download />
		</div>

		<Table :list='list_info'></Table>
  </main>
</template>

<script setup>
import Download from '@/components/Download.vue';
import Search from '@/components/Search.vue';
import Table from '@/components/Table.vue';

const list_info = [
	{
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	},
];
</script>