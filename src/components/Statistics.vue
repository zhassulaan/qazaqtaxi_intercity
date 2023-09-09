<template>
	<div class='statistics'>
		<div class='statistics-header'>
			<Filter />
			<Download />
		</div>

		<div class='statistics-container'>
			<div class='statistics-container__left'>
				<Counter
					:statistic='info1'
					:icon='icons[0]'
				/>
				<Counter
					:statistic='info2'
					:icon='icons[1]'
				/>
			</div>

			<div class='statistics-container__right'>
				<Counter
					:statistic='info3'
					:icon='icons[2]'
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import Counter from '@/components/Counter.vue';
import Download from '@/components/Download.vue';
import Filter from '@/components/Filter.vue';

const info1 = {
	total:
		{
			name: 'Кол-во водителей',
			number: 1045,
		},
};
const info2 = {
	total:
		{
			name: 'Сумма поездок, тг',
			number: 124567,
		},
	number1:
		{
			name: 'Прибыль компании',
			number: 1234,
		}
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
const icons = ['user', 'profit', 'order'];
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
		display: flex;
		gap: 2.34375vw;
		margin-top: 20px;
		&__left {
			display: grid;
			grid-gap: 32px;
			width: 25.78125vw;
			.counter:last-child {
				.counter-body {
					&__total,
					&__detailed-number {
						grid-gap: 25px;
					}
					&__detailed {
						margin-top: 20px;
					}
				}
			}
		}
		&__right {
			width: 43.125vw;
			.counter {
				padding-bottom: 32px;
			}
		}
	}
}
</style>
