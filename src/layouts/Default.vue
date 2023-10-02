<template>
	<div class='container'>
		<Header />
		<router-view />
	</div>
</template>

<script setup>
import Header from '@/components/layouts/Header.vue';
</script>

<style scoped>
.container {
	background-color: var(--clr-background);
}
</style>
