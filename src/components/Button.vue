<template>
	<button class='button btn'>
		{{ text }}
	</button>
</template>

<script setup>
const prop = defineProps({
	text: String,
});
</script>

<style scoped>
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 10px;
	background: linear-gradient(134deg, var(--clr-orange) 0%, rgba(255, 190, 0, .19) 100%);
	color: var(--clr-white);
	font-weight: 600;
}
</style>
