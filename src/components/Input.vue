<template>
	<input class='input'
		:type='type'
    :placeholder='text'
		v-model='input'
	/>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
	type: String,
	text: String,
});
const input = ref('');
</script>

<style scoped>
.input {
	height: 6.61058vh;
	border: none;
	border-radius: 10px;
	background-color: var(--clr-background);
	color: var(--clr-text-secondary);
	font-size: 15px;
	font-weight: 500;
	padding: 0 1.5625vw;
}
@media screen and (max-width: 1279px) {
	.input {
		font-size: 14px;
	}
}
@media screen and (max-width: 991px) {
	.input {
		font-size: 13px;
	}
}
</style>
