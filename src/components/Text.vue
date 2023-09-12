<template>
	<div class='item'>
		<h3 class='item-text'>{{ text }}</h3>
	</div>
</template>

<script setup>
const prop = defineProps({
	text: String,
});
</script>

<style scoped lang='scss'>
.item {
	width: 21.875vw;
	height: 53px;
	border-radius: 10px;
	background-color: var(--clr-white);
	white-space: nowrap;
	margin-top: 5px;
	padding: 18px 1.5625vw;
	&-text {
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 100%;
	}
}
</style>
