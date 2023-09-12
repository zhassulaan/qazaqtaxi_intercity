<template>
	<div class='item'>
		<h3 class='item-text'>{{ text }}</h3>
		<icon-chevron class='item-button btn' v-if='button' />
	</div>
</template>

<script setup>
import  IconChevron from '@/components/icons/Chevron.vue';
const prop = defineProps({
	text: String,
	button: {
		default: false,
		type: Boolean,
	}
});
</script>

<style scoped lang='scss'>
.item {
	position: relative;
	width: 21.875vw;
	height: 53px;
	border-radius: 10px;
	background-color: var(--clr-white);
	white-space: nowrap;
	margin-bottom: 10px;
	padding: 18px 1.5625vw;
	&-text {
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 100%;
	}
	&-button {
		position: absolute;
		top: 50%;
		right: 1.4453125vw;
		transform: translateY(-50%);
	}
}
</style>
