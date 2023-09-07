<template>
	<div class='welcome'>
		<div class='welcome-content'>
			<icon-logo />
			<h1 class='welcome-content__title'>Айырмашылықты сезініңіз!</h1>
			<h1 class='welcome-content__subtitle'>Почувствуйте разницу!</h1>
		</div>
		
		<img class='welcome-image' src='@/assets/images/phone.png' alt='phone' />
  </div>
</template>

<script setup>
	import IconLogo from '@/components/icons/Logo.vue';
</script>

<style scoped lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.welcome {
	display: flex;
	gap: 3.125vw;
	width: 61.171875vw;
	height: 100%;
	background-image: url('@/assets/images/background.png');
	background-size: cover;
	background-color: var(--clr-background-auth);
	border-radius: 0 50px 50px 0;
	box-shadow: 2px 0 9px 0 rgba(0, 0, 0, .25);
	padding: 14.4543vh 0 0 3.90625vw;
	&-content,
	&-image {
		height: min-content;
	}
	&-content {
		display: grid;
		grid-gap: 1.201923vh;
		width: 30.859375vw;
		margin-top: .4615vh;
		&__title,
		&__subtitle {
			font-family: 'Montserrat', sans-serif;
			line-height: 4.8077vh;
			color: var(--clr-auth);
		}
		&__title {
			margin-top: 8.65385vh;
			font-weight: 700;
		}
		&__subtitle {
			font-weight: 400;
		}
	}
	&-image {
		width: 24.66796874vw;
	}
}
</style>
