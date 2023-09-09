<template>
	<div class='controller'>
		<router-link to='/intercity/drivers/list/'>
			<h3 class='btn'
				:class="{ 'active': active === 'list' }"
				@click="active = 'list'"
			>
				Список
			</h3>
		</router-link>

		<router-link to='/intercity/drivers/archive/'>
			<h3 class='btn'
				:class="{ 'active': active === 'archive' }"
				@click="active = 'archive'"
			>
				Архив
			</h3>
		</router-link>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const active = ref(route.matched[2].path.split('/')[3]);
</script>

<style scoped lang='scss'>
.controller {
	display: flex;
	gap: 1.5625vw;
	margin-top: 6px;
	.btn {
		line-height: 24px;
		padding: 0 .46875vw;
		&.active {
			position: relative;
			&::after {
				position: absolute;
				bottom: 0;
				left: 0;
				content: '';
				width: 100%;
				height: 1.5px;
				background-color: var(--clr-orange);
				text-decoration: underline;
			}
		}
	}
}
</style>
