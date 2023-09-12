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
					<span class='a' v-if="props.id === 'list'">
						<p>{{ item.rating }}</p>
						<Stars :rating='item.rating' />
					</span>
					<p class='a' v-else-if="props.id === 'history'">{{ item.a }}</p>
					<p class='a' v-else></p>
					
					<p class='b'
						v-if="props.id === 'archive'"
						:style="{ textAlign: 'right', paddingRight: '25px' }"
					>
						{{ item.date_deactivation }}
					</p>
					<p class='b'
						v-else-if="props.id === 'history'"
					>
						{{ item.b }}
					</p>
					<p class='b' v-else></p>
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

const emit = defineEmits();
const props = defineProps({
	id: String,
	list: Array,
});
const pre_last_text = computed(() => {
	if (props.id === 'list') {
		return 'Рейтинг';
	} else if (props.id === 'history') {
		return 'Точка А';
	} else {
		return '';
	}
});
const last_text = computed(() => {
	if (props.id === 'archive') {
		return 'Дата деактиваций';
	} else if (props.id === 'history') {
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
	emit('close');
}
</script>
