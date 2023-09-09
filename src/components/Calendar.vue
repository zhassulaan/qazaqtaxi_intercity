<template>
	<div class='calendar'>
		<div class='calendar-header'>
			<h6 class='calendar-header__current'>{{ months[month_index].name + ' ' + year }}</h6>
			<div class='calendar-header__buttons'>
				<span class='btn' @click="changeMonth('prev')">{{ '<' }}</span>
				<span class='btn' @click="changeMonth('next')">{{ '>' }}</span>
			</div>
		</div>

		<div class='calendar-body'>
			<ul class='calendar-body__weeks'>
				<li class='item'
					v-for='(week, idx) in weeks'
					:key='idx'
				>
					<p class='item-text'>{{ week.name }}</p>
				</li>
			</ul>
			<ul class='calendar-body__days'>
				<li class='item btn'
					v-for='(day, idx) in days'
					:key='idx'
					@click='selectDay(day)'
				>
					<p class='item-text' :class="[
						(day.id < 0 || day.id > 31) ?
							'another'
								:
							(
								((idx + 1) % 7 === 0) || ((idx + 1) % 7 === 6) ?
									'weekend'
										:
									'weekday'
							),
						{ 'active': 
							(year === active_date.year && month_index + 1 === active_date.month && day.id === active_date.day) ||
							(year === active_date.year && month_index + 2 === active_date.month && day.id === active_date.day + 40) ||
							(year === active_date.year && month_index === active_date.month && day.id === active_date.day * (-1))
						}
					]">
						{{ day.numb }}
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const prop = defineProps({
	active_date: Object,
});

const emit = defineEmits(['action']);
const date = new Date();
let year = ref(date.getFullYear());
let month_index = ref(date.getMonth());
const months = [
	{ name: 'Январь', name_kk: 'Қаңтар', name_en: 'January' },
	{ name: 'Февраль', name_kk: 'Ақпан', name_en: 'February' },
	{ name: 'Март', name_kk: 'Наурыз', name_en: 'March' },
	{ name: 'Апрель', name_kk: 'Сәуір', name_en: 'April' },
	{ name: 'Май', name_kk: 'Мамыр', name_en: 'May' },
	{ name: 'Июнь', name_kk: 'Маусым', name_en: 'June' },
	{ name: 'Июль', name_kk: 'Шілде', name_en: 'July' },
	{ name: 'Августь', name_kk: 'Тамыз', name_en: 'August' },
	{ name: 'Сентябрь', name_kk: 'Қыркүйек', name_en: 'September' },
	{ name: 'Октябрь', name_kk: 'Қазан', name_en: 'October' },
	{ name: 'Ноябрь', name_kk: 'Қараша', name_en: 'November' },
	{ name: 'Декабрь', name_kk: 'Желтоқсан', name_en: 'December' },
];
const weeks = [
	{ name: 'Пн', name_kk: 'Дү', name_en: 'Mo' },
	{ name: 'Вт', name_kk: 'Сй', name_en: 'Tu' },
	{ name: 'Ср', name_kk: 'Ср', name_en: 'We' },
	{ name: 'Чт', name_kk: 'Бе', name_en: 'Th' },
	{ name: 'Пт', name_kk: 'Жұ', name_en: 'Fr' },
	{ name: 'Сб', name_kk: 'Сн', name_en: 'Sa' },
	{ name: 'Вс', name_kk: 'Же', name_en: 'Su' },
];
const days = getDays();

function getDays() {
	const result = [];
	const first_day_of_month = new Date(year.value, month_index.value, 1);
	const last_day_of_month = new Date(year.value, month_index.value + 1, 0);
	const days_in_month = last_day_of_month.getDate();
	const start_day_of_week = first_day_of_month.getDay();

	// Fill in the days before the current month
	for (let i = start_day_of_week - 1; i > 0; i--) {
		const previous_month = new Date(year.value, month_index.value, 0);
		const day = previous_month.getDate() - i + 1;
		result.push({
			id: -day,
			numb: day,
		});
	}

	// Fill in the days of the current month
	for (let day = 1; day <= days_in_month; day++) {
		result.push({
			id: day,
			numb: day,
		});
	}

	// Fill in the days after the current month
	let next_month = 1;
	while (result.length % 7 !== 0) {
		result.push({
			id: 40 + next_month,
			numb: next_month,
		});
		next_month++;
	}

	return result;
};
function changeMonth(id) {
	if (id === 'prev') {
		month_index.value -= 1;
		if (month_index.value < 0) {
			month_index.value = 11;
			year.value -= 1;
		}
	} else {
		month_index.value += 1;
		if (month_index.value > 11) {
			month_index.value = 0;
			year.value += 1;
		}
	}
	days.splice(0, days.length, ...getDays());
}
function selectDay(new_day) {
	const new_active_date = {
		year: year.value,
		month: month_index.value + 1,
		day: new_day.numb,
	};
		if (new_day.id < 0) {
			new_active_date.month -= 1;
		} else if (new_day.id > 31) {
			new_active_date.month += 1;
		}
		if (month_index.value < 0) {
			new_active_date.month = 12;
			new_active_date.year = year.value - 1;
		} else if (month_index.value > 11) {
			new_active_date.month = 1;
			new_active_date.year = year.value + 1;
		}
	emit('action', new_active_date);
}
</script>

<style scoped lang='scss'>
.calendar {
	position: absolute;
	top: 56px;
	width: calc(50% - 48px / 2);
	max-height: 80vh;
	background-color: var(--clr-white);
	border-radius: 12px;
	box-shadow: 0 15px 40px rgba(0, 0, 0, .12);
	overflow: hidden;
	transition: all .75s;
	z-index: 2;
	&-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 1.125vw 0;
		&__buttons {
			display: flex;
			gap: .78125vw;
		}
	}
	&-body {
		padding: 10px .625vw;
		&__weeks,
		&__days {
			display: flex;
			align-items: center;
			justify-content: center;
			list-style: none;
			flex-wrap: wrap;
			.item {
				width: calc(100% / 7);
				text-align: center;
				&-text {
					font-size: 12px;
					padding-top: 1px;
				}
			}
		}
		&__weeks {
			margin-bottom: 8px;
			.item-text {
				color: var(--clr-text-secondary);
			}
		}
		&__days {
			gap: 6px 0;
			.item {
				&-text {
					color: var(--clr-text-primary);
				}
				.another {
					color: var(--clr-text-secondary);
				}
				.weekend {
					color: var(--clr-blue);
				}
				.active {
					position: relative;
					color: var(--clr-white);
					&::before {
						position: absolute;
						top: 50%;
						left: 50%;
						content: '';
						width: 18px;
						height: 18px;
						background-color: var(--clr-blue);
						border-radius: 50%;
						transform: translate(-50%, -50%);
						z-index: -1;
					}
				}
			}
		}
	}
}
</style>
