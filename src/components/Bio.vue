<template>
	<div class='bio'>
		<div class='bio-header'>
			<div class='bio-header__avatar'>
				<img class='bio-header__avatar-image' :src='user.avatar' alt='ava' />
				<icon-checkmark class='checkmark' />
				<div class='btn'>
					<div class='pen'>
						<icon-pen />
					</div>
				</div>
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
						v-if="id !== 'history'"
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
			<div class='bio-body__row' v-if="id !== 'history'">
				<p class='text'>Почта</p>
				<p class='text'>{{ user.email }}</p>
			</div>
			<div class='bio-body__row' v-if="id !== 'history'">
				<p class='text'>День рождение</p>
				<p class='text'>{{ user.birthday }}</p>
			</div>

			<div v-if="id !== 'history'">
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
			<div class='bio-body__row' v-if="id !== 'history'">
				<p class='text'>Статус фото</p>
				<p class='text' v-if='user.status' style='color: var(--clr-green)'>Подтверждена</p>
				<p class='text' v-else style='color: var(--clr-red)'>Не подтверждена</p>
			</div>

			<div class='bio-body__row-buttons' v-if="id !== 'history'">
				<Button text='Редактировать'>
					<template #detail>
						<icon-pen class='button-icon' />
					</template>
				</Button>
				<Button text='Активировать' v-if="id === 'archive'" />
				<Button text='Деактивировать' v-if="id === 'list'" />
			</div>
		</div>
		
		<div class='bio-body' v-else>
			<h4 class='bio-body__title'>Фото документа</h4>
			<div class='bio-body__box'>
				<h5 class='bio-body__box-title'>Водительское удостоверение</h5>
				<p class='bio-body__box-subtitle'>Фото с переди</p>
				<div class='bio-body__box-image'>
					<img class='image' src='@/assets/images/document.png' alt='driver document front' />
				</div>
				<div class='bio-body__box-buttons'>
					<p class='btn'>Просмотр</p>
					<p class='btn'>Изменить</p>
				</div>

				<p class='bio-body__box-subtitle'>Фото сзади</p>
				<div class='bio-body__box-image'>
					<img class='image' src='@/assets/images/document.png' alt='driver document back' />
				</div>
				<div class='bio-body__box-buttons'>
					<p class='btn'>Просмотр</p>
					<p class='btn'>Изменить</p>
				</div>

				<h5 class='bio-body__box-title'>Технический паспорт</h5>
				<p class='bio-body__box-subtitle'>Фото с переди</p>
				<div class='bio-body__box-image'>
					<img class='image' src='@/assets/images/document.png' alt='tech document front' />
				</div>
				<div class='bio-body__box-buttons'>
					<p class='btn'>Просмотр</p>
					<p class='btn'>Изменить</p>
				</div>

				<p class='bio-body__box-subtitle'>Фото сзади</p>
				<div class='bio-body__box-image'>
					<img class='image' src='@/assets/images/document.png' alt='tech document back' />
				</div>
				<div class='bio-body__box-buttons'>
					<p class='btn'>Просмотр</p>
					<p class='btn'>Изменить</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import Stars from '@/components/Stars.vue';
import IconCheckmark from '@/components/icons/Checkmark.vue';
import IconDocuments from '@/components/icons/Documents.vue';
import IconPen from '@/components/icons/Pen.vue';
import IconProfile from '@/components/icons/Profile.vue';

const prop = defineProps({
	id: String,
	user: Object,
});
const active = ref(1);
</script>

<style scoped lang='scss'>
	.bio {
		width: 372px;
		// width: 29.0625vw;
		background-color: var(--clr-white);
		border: 1px solid var(--clr-border);
		border-radius: 20px;
		padding: 22px 24px 18px;
		// padding: 22px 1.875vw 18px;
		overflow: scroll;
		-ms-overflow-style: none;
    scrollbar-width: none;
		&::-webkit-scrollbar { 
			display: none;
		}
		&-header {
			display: flex;
			gap: 20px;
			// gap: 2.34375vw;
			&__avatar {
				position: relative;
				max-width: 100px;
				max-height: 100px;
				&-image {
					width: 100%;
					height: 100%;
					border-radius: 7px;
				}
				.checkmark,
				.btn {
					position: absolute;
				}
				.checkmark {
					top: 5px;
					left: 5px;
				}
				.btn,
				.pen {
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
				}
				.btn {
					bottom: -3px;
					right: -15px;
					width: 30px;
					height: 30px;
					background-color: var(--clr-white);
					.pen {
						width: 25px;
						height: 25px;
						background-color: var(--clr-orange);
					}
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
								width: 100%;
								height: 1px;
								background-color: var(--clr-black);
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
			&__row,
			&__box {
				&-buttons {
					display: flex;
					width: max-content;
					height: 38px;
				}
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
				&-buttons {
					gap: 13px;
					margin-top: 20px;
					:first-child {
						background: var(--clr-grey-2);
					}
					:last-child {
						background: var(--clr-orange);
					}
					.button {
						width: 156px;
						font-size: 15px;
						&-icon {
							background-color: transparent;
						}
					}
				}
			}
			&__box {
				padding: 0 30px 14px;
				// padding: 20px 2.34375vw 31px;
				&-title {
					margin-top: 20px;
				}
				&-subtitle {
					font-size: 14px;
					font-weight: 400;
					line-height: 14px;
					margin-top: 4px;
				}
				&-image {
					width: 207px;
					height: 130px;
					backdrop-filter: blur(2px);
					border-radius: 6px;
					overflow: hidden;
					margin: 15px auto 0;
					.image {
						width: 100%;
						height: 100%;
					}
				}
				&-buttons {
					gap: 30px;
					margin: 9px auto 17px;
					.btn {
						color: var(--clr-orange);
						font-size: 12px;
						line-height: 14px;
						text-decoration-line: underline;
					}
				}
			}
		}
	}
</style>
