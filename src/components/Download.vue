<template>
	<Button
		text='Скачать данные'
		@click=''
	>
		<template #detail>
			<icon-download class='button-icon' />
		</template>
	</Button>
</template>

<script setup>
import Button from '@/components/Button.vue';
import IconDownload from '@/components/icons/Download.vue';
</script>

<style scoped lang='scss'>
.button {
	width: 14.6875vw;
	height: 53px;
	font-size: 15px;
	&-icon {
		background-color: transparent;
	}
}
</style>
