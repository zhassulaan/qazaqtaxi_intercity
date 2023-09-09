<template>
 	<div class='counter'>
		<icon-order
			class='counter-icon'
			v-if="icon === 'order'"
		/>
		<icon-profit
			class='counter-icon'
			v-if="icon === 'profit'"
		/>
		<icon-user
			class='counter-icon'
			v-if="icon === 'user'"
		/>

		<div class='counter-body'>
			<div class='counter-body__total'>
				<h2 class='title'>{{ statistic.total.name }}</h2>
				<h1 class='text'>{{ statistic.total.number }}</h1>
			</div>

			<div class='counter-body__detailed' v-if='statistic.number1'>
				<div class='counter-body__detailed-number'>
					<h2 class='title'>{{ statistic.number1.name }}</h2>
					<h1 class='text'>{{ statistic.number1.number }}</h1>
				</div>

				<div class='counter-body__detailed-number'>
					<h2 class='title'>{{ statistic.number2?.name }}</h2>
					<h1 class='text'>{{ statistic.number2?.number }}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import IconProfit from '@/components/icons/Profit.vue';
import IconOrder from '@/components/icons/Order.vue';
import IconUser from '@/components/icons/User.vue';

const props = defineProps({
	statistic: Object,
	icon: String,
});
</script>

<style scoped lang='scss'>
.counter {
	position: relative;
	background-color: var(--clr-white);
	border-radius: 15px;
	padding: 70px 2.34375vw 30px;
	&-icon {
		position: absolute;
		top: 20px;
		left: 2.34375vw;
	}
	&-body {
		&__total,
		&__detailed-number {
			display: grid;
			.title,
			.text {
				color: var(--clr-text-primary);
			}
			.title {
				line-height: 17px;
			}
			.text {
				line-height: 40px;
			}
		}
		&__total {
			grid-gap: 15px;
		}
		&__detailed {
			display: flex;
			margin-top: 30px;
			&-number {
				grid-gap: 8px;
			}
		}
	}
}
</style>
