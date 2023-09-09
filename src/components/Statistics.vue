<template>
	<div class='statistics'>
		<div class='statistics-header'>
			<Filter />
			<Download />
		</div>
		<div class='statistics-container'>
			<!-- <Counter
				v-for='(statistic, idx) in statistics'
				:key='idx'
				:statistic='statistic'
				:icon='icons[idx]'
				:button='button && idx === 0'
			/> -->
		</div>
	</div>
</template>

<script setup>
// import Counter from '@/components/Counter.vue';
import Download from '@/components/Download.vue';
import Filter from '@/components/Filter.vue';

const props = defineProps({
	statistics: Array,
});
const icons = ['order', 'currency', 'user'];
</script>

<style setup lang='scss'>
.statistics {
	width: 100%;
	background-color: var(--clr-grey);
	border-radius: 19px;
	margin-top: 30px;
	padding: 20px 3.125vw 46px 3.515625vw;
	&-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&-container {
		margin-top: 20px;
	}
}
</style>
