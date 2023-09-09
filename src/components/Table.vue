<template>
	<div class='table'>
		<div class='table-header'>
			<h3 class='id'>ID</h3>
			<h3 class='name'>ФИО</h3>
			<h3 class='number'>Номер</h3>
			<h3 class='city'>Город</h3>
			<h3 class='a'>{{ pre_last_text }}</h3>
			<h3 class='b'>{{ last_text }}</h3>
		</div>

		<div class='table-body'>
			<div class='table-body__row' v-for='(item, idx) in list'>
				<div class='table-body__row-info btn'
					:key='idx + 1'
					@click='handle_toggle(idx + 1)'
				>
					<p class='id'>{{ item.id }}</p>
					<p class='name'>{{ item.name }}</p>
					<p class='number'>{{ item.phone }}</p>
					<p class='city'>{{ item.city }}</p>
					<span class='a'>
						<p v-if='item.a'>{{ item.a }}</p>
						<p v-if='item.rating'>{{ item.rating }}</p>
						<icon-star class='a-star' v-if='item.rating' v-for='i in Math.floor(item.rating)' />
						<div class='a-star'>
							<icon-star v-if='item.rating' />
							<div class='a-star__mask' :style="{ width: (item.rating - Math.floor(item.rating)) * 100 + '%' }">
								<icon-star v-if='item.rating' />
							</div>
					</div>
					</span>
					<p class='b'>{{ item.b || item.date }}</p>
				</div>

				<div class='table-body__row-detail'
					:class="{ 'hide': active !== idx + 1 }"
					:key='idx + 1'
				>
					<slot name='detail' :item='item'></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import IconStar from '@/components/icons/Star.vue';

const prop = defineProps({
	list: Array,
});
const pre_last_text = computed(() => {
	const item = prop.list[0];
	if (item.rating) {
		return 'Рейтинг';
	} else if (item.a) {
		return 'Точка А';
	} else {
		return '';
	}
});
const last_text = computed(() => {
	const item = prop.list[0];
	if (item.date) {
		return 'Дата деактиваций';
	} else if (item.b) {
		return 'Точка В';
	} else {
		return '';
	}
});
const active = ref(0);

function handle_toggle(id) {
	if (id !== active.value) {
		active.value = id;
	} else {
		active.value = 0;
	}
}
</script>

<style scoped lang='scss'>
.table {
	margin-top: 20px;
	&-header,
	&-body__row-info {
		display: flex;
		justify-content: space-evenly;
		.id {
			width: 6.640625vw;
		}
		.name {
			width: 23.671875vw;
		}
		.number {
			width: 17.8125vw;
		}
		.city {
			width: 14.0625vw;
		}
		.a,
		.b {
			width: 13.4375vw;
		}
	}
	&-header {
		padding: 15px 2.34375vw;
	}
	&-body {
		display: grid;
		grid-gap: 15px;
		&__row {
			&-info {
				background-color: var(--clr-grey);
				border-radius: 14px;
				padding: 18px 2.34375vw 17px;
				.a {
					display: flex;
					align-items: center;
					gap: .390625vw;
					&-star {
						position: relative;
						height: 26px;
						fill: var(--clr-orange);
						&:last-child {
							fill: transparent;
						}
						&__mask {
							position: absolute;
							top: 0;
							left: 0;
							overflow: hidden;
							fill: var(--clr-orange);
						}
					}
				}
			}
			&-detail {
				display: flex;
				justify-content: space-between;
				max-height: 100vh;
				background-color: var(--clr-grey);
				border-radius: 19px;
				padding: 22px 0 22px 2.34375vw;
				overflow: hidden;
				margin-top: 15px;
				transition: .4s;
				&.hide {
					max-height: 0;
					margin-top: 0;
					padding-top: 0;
					padding-bottom: 0;
				}
			}
		}
	}
}
</style>
