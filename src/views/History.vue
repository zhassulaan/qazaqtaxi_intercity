<template>
	<main class='home'>
		<div class='home-control'>
			<Search />
			<Button
				text='Скачать данные'
				@click='add = true'
			/>
		</div>
		
  </main>
</template>

<script setup>
import Button from '@/components/Button.vue';
import Search from '@/components/Search.vue';
</script>