<template>
	<main class='home'>
		<Controller />
		<Search />

		<Table :list='list_info'></Table>
  </main>
</template>

<script setup>
import Controller from '@/components/Controller.vue';
import Search from '@/components/Search.vue';
import Table from '@/components/Table.vue';

const list_info = [
	{
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		rating: 4.5,
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		rating: 4.5,
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		rating: 4.5,
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		rating: 4.5,
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		rating: 4.5,
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		rating: 4.5,
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		phone: '+7 777 777 77 77',
		city: 'Алматы',
		rating: 4.5,
	},
];
</script>
