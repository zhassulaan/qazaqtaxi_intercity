<template>
	<div class='profile'>
		<div class='profile-header'>
			<div class='profile-header__avatar'>
				<img class='profile-header__avatar-image' :src='user.avatar' alt='ava' />
			</div>

			<div class='profile-header__info'>
				<h3 class='title'>{{ user.name.split(' ').slice(0, 2).join(' ') }}</h3>
				<p class='subtitle'>{{ user.role }}</p>
				<Stars :rating='user.rating' />

				<div class='profile-header__info-controller'>
					<div class='controller'
						:class="{ 'active': active === 1 }"
						@click='active = 1'
					>
						<icon-profile />
						<p class='controller-text'>Профиль</p>
					</div>
					<div class='controller'
						:class="{ 'active': active === 2 }"
						@click='active = 2'
					>
						<icon-documents />
						<p class='controller-text'>Документы</p>
					</div>
				</div>
			</div>
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
});
const active = ref(1);
</script>

<style scoped lang='scss'>
	.profile {
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
					margin-top: 6px;
					.controller {
						display: flex;
						gap: 5px;
						&-text {
							font-size: 14px;
						}
					}
				}
			}
		}
	}
</style>
