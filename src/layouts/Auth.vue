<template>
	<div class='container'>
		<Welcome />
		<router-view />
	</div>
</template>

<script setup>
import Welcome from '@/components/layouts/Welcome.vue';
</script>

<style scoped>
.container {
	display: flex;
	height: 100vh;
}
</style>
