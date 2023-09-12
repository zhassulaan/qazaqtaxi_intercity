<template>
	<main class='home'>
		<Controller />
		<div class='home-control'>
			<Search />
			<Download />
		</div>
		
		<Table id='archive' :list='users'>
			<template #detail='{ item }'>
				<Drivers id='archive' :info='item' />
			</template>
		</Table>
  </main>
</template>

<script setup>
import Controller from '@/components/Controller.vue';
import Download from '@/components/Download.vue';
import Drivers from '@/components/layouts/Drivers.vue';
import Search from '@/components/Search.vue';
import Table from '@/components/Table.vue';
import users from '@/assets/data.js';
</script>
