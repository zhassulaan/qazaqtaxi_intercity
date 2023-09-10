<template>
	<main class='home'>
		<Controller />
		<div class='home-control'>
			<Search />
			<Download />
		</div>
		
		<Table :list='list_info'>
			<template #detail='{ item }'>
				<Profile :user='item' />
			</template>
		</Table>
  </main>
</template>

<script setup>
import Controller from '@/components/Controller.vue';
import Download from '@/components/Download.vue';
import Profile from '@/components/Profile.vue';
import Search from '@/components/Search.vue';
import Table from '@/components/Table.vue';
import ava from '@/assets/images/ava.png';

const list_info = [
	{
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		role: 'Водитель',
		avatar: ava,
		phone: '+7 777 777 77 77',
		email: 'example@mail.com',
		birthday: '15.06.2000',
		document: '123456789102',
		document_date: '05.12.2023',
		teckpassport: '123456789102',
		rating: 4.5,
		city: 'Алматы',
		taxi_depot: 'Alash',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		role: 'Водитель',
		avatar: ava,
		phone: '+7 777 777 77 77',
		email: 'example@mail.com',
		birthday: '15.06.2000',
		document: '123456789102',
		document_date: '05.12.2023',
		teckpassport: '123456789102',
		rating: 4.5,
		city: 'Алматы',
		taxi_depot: 'Alash',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		role: 'Водитель',
		avatar: ava,
		phone: '+7 777 777 77 77',
		email: 'example@mail.com',
		birthday: '15.06.2000',
		document: '123456789102',
		document_date: '05.12.2023',
		teckpassport: '123456789102',
		rating: 4.5,
		city: 'Алматы',
		taxi_depot: 'Alash',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		role: 'Водитель',
		avatar: ava,
		phone: '+7 777 777 77 77',
		email: 'example@mail.com',
		birthday: '15.06.2000',
		document: '123456789102',
		document_date: '05.12.2023',
		teckpassport: '123456789102',
		rating: 4.5,
		city: 'Алматы',
		taxi_depot: 'Alash',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		role: 'Водитель',
		avatar: ava,
		phone: '+7 777 777 77 77',
		email: 'example@mail.com',
		birthday: '15.06.2000',
		document: '123456789102',
		document_date: '05.12.2023',
		teckpassport: '123456789102',
		rating: 4.5,
		city: 'Алматы',
		taxi_depot: 'Alash',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		role: 'Водитель',
		avatar: ava,
		phone: '+7 777 777 77 77',
		email: 'example@mail.com',
		birthday: '15.06.2000',
		document: '123456789102',
		document_date: '05.12.2023',
		teckpassport: '123456789102',
		rating: 4.5,
		city: 'Алматы',
		taxi_depot: 'Alash',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	}, {
		id: '0001',
		name: 'Алибеков Алибек Алибекулы',
		role: 'Водитель',
		avatar: ava,
		phone: '+7 777 777 77 77',
		email: 'example@mail.com',
		birthday: '15.06.2000',
		document: '123456789102',
		document_date: '05.12.2023',
		teckpassport: '123456789102',
		rating: 4.5,
		city: 'Алматы',
		taxi_depot: 'Alash',
		a: 'Мауленова, 92',
		b: 'Луганского, 21а',
	},
];
</script>
