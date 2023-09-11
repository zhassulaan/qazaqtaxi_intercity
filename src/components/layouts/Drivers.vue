<template>
	<div class='drivers'>
		<Bio :id='id' :user='info' />
		<div class='drivers-right'>
			<div class='drivers-right__header'>
				<Filter />
				<icon-close />
			</div>

			<div class='drivers-right__body'>
				<Counter
					:statistic='info1'
					:icon='icons[0]'
				/>
				<Counter
					:statistic='info2'
					:icon='icons[1]'
				/>
				<Counter
					:statistic='info3'
					:icon='icons[2]'
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import Bio from '@/components/Bio.vue';
import Counter from '@/components/Counter.vue';
import Filter from '@/components/Filter.vue';
import IconClose from '@/components/icons/Close.vue';

const props = defineProps({
	id: String,
	info: Object,
});
const info1 = {
	total:
		{
			name: 'Баланс',
			number: 1500450,
		},
};
const info2 = {
	total:
		{
			name: 'Бонусный баланс',
			number: 1500450,
		},
};
const info3 = {
	total:
		{
			name: 'Кол-во поездок',
			number: 150,
		},
	number1:
		{
			name: 'Кол-во завершенных поездок',
			number: 125,
		},
	number2:
		{
			name: 'Кол-во активных поездок',
			number: 25,
		}
};
const icons = ['currency', 'bonus', 'order'];
</script>
