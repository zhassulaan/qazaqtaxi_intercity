<template>
	<input class='input'
		:type='type'
    :placeholder='text'
    :value="masked_input"
    @input="handleInput"
	/>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
	type: String,
	text: String,
	length: Number,
	mask: String,
});
const input = ref('');

const masked_input = computed(() => {
	// if (!props.mask) {
		return input.value;
	// }

	let result = '';
	let index = 0;

	for (let i = 0; i < input.value.length; i++) {
		let char = input.value.charAt(i);
		let mask_char = props.mask.charAt(index);

		while (mask_char !== '#') {
			result += mask_char;
			index++;
			mask_char = props.mask.charAt(index);
		}
		
		console.log(mask_char + ' ' + char);
		if (mask_char === '#') {
			result += char;
			console.log(result);
			index++;
		}

		if (index >= props.mask.length) {
			break;
		}
	}

	return result;
});

function handleInput(e) {
	input.value = e.target.value;
}
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
</style>
