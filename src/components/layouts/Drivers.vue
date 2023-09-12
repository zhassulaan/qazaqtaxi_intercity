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
					button='add'
				/>
				<Counter
					:statistic='info2'
					:icon='icons[1]'
					button='add'
				/>
				<Counter
					:statistic='info3'
					:icon='icons[2]'
					button='download'
				>
					<div class='counter-body__percentage'>
						<div class='counter-body__percentage-box'
							:style="{
								width: (info3.number1.number > info3.number2.number) ?
									'-webkit-fill-available'
										:
									(info3.number1.number * 473 / info3.total.number / 12.8) + 'vw'
								}"
						>
							<h1 class='text'>{{ (info3.number1.number * 100 / info3.total.number).toFixed(1) + ' %' }}</h1>
							<p class='lastmonth'>
								<span class='btn'>+15%</span> за последний месяц
							</p>
						</div>
						<div class='counter-body__percentage-box'
							:style="{
								width: (info3.number1.number < info3.number2.number) ?
									'-webkit-fill-available'
										:
									(info3.number2.number * 473 / info3.total.number / 12.8) + 'vw'
								}"
						>
							<h1 class='text'>{{ (info3.number2.number * 100 / info3.total.number).toFixed(1) + ' %' }}</h1>
							<p class='lastmonth'>
								<span class='btn'>-3%</span> за последний месяц
							</p>
						</div>
					</div>
				</Counter>
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
