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
					<p class='a' v-if='!item.a && !item.rating'></p>
					<p class='a' v-else-if='item.a'>{{ item.a }}</p>
					<span class='a' v-else>
						<p>{{ item.rating }}</p>
						<Stars :rating='item.rating' />
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
import Stars from '@/components/Stars.vue';

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
