<template>
	<div style='display: flex; gap: .390625vw;'>
		<icon-star class='star' v-for='i in Math.floor(rating)' />
		<div class='star'>
			<icon-star />
			<div class='star-mask' :style="{ width: (rating - Math.floor(rating)) * 100 + '%' }">
				<icon-star />
			</div>
		</div>
	</div>
</template>

<script setup>
import IconStar from '@/components/icons/Star.vue';

const prop = defineProps({
	rating: Number,
})
</script>

<style scoped lang='scss'>
.star {
	position: relative;
	width: 25px;
	height: 26px;
	fill: var(--clr-orange);
	&:last-child {
		fill: transparent;
	}
	&-mask {
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		fill: var(--clr-orange);
	}
}
</style>
