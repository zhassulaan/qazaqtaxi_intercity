<template>
	<div class='auth'>
		<h6 class='auth-title'>Добро пожаловать!</h6>
		<h6 class='auth-subtitle'>Пожалуйста войдите в систему</h6>

		<div class='auth-form'>
			<Input
				type='email'
				text='Номер телефона'
				v-model='user.phone'
			/>
			<Input
				type='password'
				text='Пароль'
				v-model='user.password'
			/>
			<Button
				text='Войти'
				@click='redirect'
			/>

			<p class='auth-form__error' v-if='error'>Введите корректные данные</p>
		</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

const router = useRouter();
const user = ref({
	phone: '',
	password: '',
});
const error = ref(false);

async function redirect() {
	error.value = false;
	if (user.value.phone === '' || user.value.password === '') {
		error.value = true;
		console.log(user.value);
	} else {
		localStorage.setItem('qt_intercity_token', '123456789');
		router.push('/intercity/analytics');
		window.location.reload();
	}
}
</script>
