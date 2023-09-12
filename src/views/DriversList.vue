<template>
	<main class='home'>
		<Controller />
		<Search />

		<Table id='list' :list='users'>
			<template #detail='{ item }'>
				<Drivers id='list' :info='item' />
			</template>
		</Table>
  </main>
</template>

<script setup>
import Controller from '@/components/Controller.vue';
import Drivers from '@/components/layouts/Drivers.vue';
import Search from '@/components/Search.vue';
import Table from '@/components/Table.vue';
import users from '@/assets/data.js';
</script>
