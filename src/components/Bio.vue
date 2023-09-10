<template>
	<div class='bio'>
		<div class='bio-header'>
			<div class='bio-header__avatar'>
				<img class='bio-header__avatar-image' :src='user.avatar' alt='ava' />
			</div>

			<div class='bio-header__info'>
				<h3 class='title'>{{ user.name.split(' ').slice(0, 2).join(' ') }}</h3>
				<p class='subtitle'>{{ user.role }}</p>
				<Stars :rating='user.rating' />

				<div class='bio-header__info-controller'>
					<div class='controller btn'
						:class="{ 'active': active === 1 }"
						@click='active = 1'
					>
						<icon-profile />
						<p class='controller-text'>Профиль</p>
					</div>

					<div class='controller btn'
						:class="{ 'active': active === 2 }"
						v-if='history'
						@click='active = 2'
					>
						<icon-documents />
						<p class='controller-text'>Документы</p>
					</div>
				</div>
			</div>
		</div>

		<div class='bio-body' v-if='active === 1'>
			<h4 class='bio-body__title'>Личная информация</h4>
			<div class='bio-body__row'>
				<p class='text'>ID</p>
				<p class='text'>{{ user.id }}</p>
			</div>
			<div class='bio-body__row'>
				<p class='text'>Номер</p>
				<p class='text'>{{ user.phone }}</p>
			</div>
			<div class='bio-body__row'>
				<p class='text'>Почта</p>
				<p class='text'>{{ user.email }}</p>
			</div>
			<div class='bio-body__row'>
				<p class='text'>День рождение</p>
				<p class='text'>{{ user.birthday }}</p>
			</div>

			<h4 class='bio-body__title'>Документы</h4>
			<div class='bio-body__row'>
				<p class='text'>№ водительского уд.</p>
				<p class='text'>{{ user.document }}</p>
			</div>
			<div class='bio-body__row'>
				<p class='text'>Годен до</p>
				<p class='text'>{{ user.document_date }}</p>
			</div>
			<div class='bio-body__row'>
				<p class='text'>№ техпаспорта</p>
				<p class='text'>{{ user.teckpassport }}</p>
			</div>

			<h4 class='bio-body__title'>Информация</h4>
			<div class='bio-body__row'>
				<p class='text'>Таксопарк</p>
				<p class='text'>{{ user.taxi_depot }}</p>
			</div>
			<div class='bio-body__row'>
				<p class='text'>Город</p>
				<p class='text'>{{ user.city }}</p>
			</div>
			<div class='bio-body__row'>
				<p class='text'>Статус фото</p>
				<p class='text' v-if='user.status' style='color: var(--clr-green)'>Подтверждена</p>
				<p class='text' v-else style='color: var(--clr-red)'>Не подтверждена</p>
			</div>
		</div>
		<div class='bio-body' v-else>
			<h4 class='bio-body__title'>Фото документа</h4>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Stars from '@/components/Stars.vue';
import IconProfile from '@/components/icons/Profile.vue';
import IconDocuments from '@/components/icons/Documents.vue';

const prop = defineProps({
	user: Object,
	history: {
		type: Boolean,
		default: true,
	},
});
const active = ref(1);
</script>

<style scoped lang='scss'>
	.bio {
		width: 29.0625vw;
		background-color: var(--clr-white);
		border: 1px solid var(--clr-border);
		border-radius: 20px;
		padding: 22px 1.953125vw 18px 1.875vw;
		&-header {
			display: flex;
			gap: 2.34375vw;
			&__avatar {
				max-width: 100px;
				max-height: 100px;
				border-radius: 7px;
				overflow: hidden;
				&-image {
					width: 100%;
					height: 100%;
				}
			}
			&__info {
				display: grid;
				grid-gap: 10px;
				.title,
				.subtitle {
					color: var(--clr-primary);
				}
				.title {
					line-height: 17px;
				}
				.subtitle {
					font-size: 12px;
					line-height: 10px;
					margin-bottom: 2px;
				}
				&-controller {
					display: flex;
					gap: 20px;
					margin-top: 4px;
					.controller {
						display: flex;
						align-items: center;
						height: 20px;
						gap: 5px;
						padding: 0 4px 6px;
						&-text {
							font-size: 14px;
							line-height: 12px;
						}
						&.active {
							position: relative;
							&::after {
								position: absolute;
								content: '';
								bottom: 0;
								left: 0;
								background-color: var(--clr-black);
								width: 100%;
								height: 1px;
							}
						}
					}
				}
			}
		}
		&-body {
			&__title {
				margin: 20px 0 -5px;
			}
			&__row {
				display: flex;
				justify-content: space-between;
				.text {
					font-size: 14px;
					line-height: 12px;
					color: var(--clr-primary);
					margin-top: 20px;
				}
			}
		}
	}
</style>
