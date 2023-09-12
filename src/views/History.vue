<template>
	<main class='home'>
		<div class='home-control'>
			<Search />
			<Download />
		</div>

		<Table id='history' :list='users' @close='id = 0'>
			<template #detail='{ item }'>
				<div class='history' v-if='id === 0'>
					<Bio id='history' :user='item' />

					<div class='history-content default'>
						<div>
							<p class='history-content__text'>Дата поездки</p>
							<Text :text='item.order_date'/>
						</div>
						<div>
							<p class='history-content__text'>Точка А</p>
							<Text :text='item.a' />
						</div>
						<div>
							<p class='history-content__text'>Принято</p>
							<Text :text='item.accept_time'/>
						</div>
						<div>
							<p class='history-content__text'>Точка В</p>
							<Text :text='item.b' />
						</div>
						<div>
							<p class='history-content__text'>Start</p>
							<Text :text='item.start'/>
						</div>
						<div>
							<p class='history-content__text'>Кол-во пассажиров</p>
							<Text
								:text='item.total_passengers'
								:button='true'
								@click='id = 1'
							/>
						</div>
						<div>
							<p class='history-content__text'>Finish</p>
							<Text :text='item.end'/>
						</div>
						<div>
							<p class='history-content__text'>Сумма поездки, тг</p>
							<Text
								:text='item.total_cost'
								:button='true'
								@click='id = 2'
							/>
						</div>
					</div>
				</div>
				
				<div class='history' v-if='id === 1'>
					<div class='history-content'>
						<div>
							<p class='history-content__text'>ФИО</p>
							<Text
								v-for='(passenger, idx) in item.passengers'
								:id='idx'
								:text='passenger.name'
							/>
						</div>
						<div>
							<p class='history-content__text'>Номер телефона</p>
							<Text
								v-for='(passenger, idx) in item.passengers'
								:id='idx'
								:text='passenger.phone'
							/>
						</div>
					</div>
					<icon-back
						class='history-button btn'
						@click='id = 0'
					/>
				</div>
				
				<div class='history' v-if='id === 2'>
					<div class='history-content'>
						<div>
							<p class='history-content__text'>ФИО</p>
							<Text
								v-for='(passenger, idx) in item.passengers'
								:id='idx'
								:text='passenger.name'
							/>
						</div>
						<div>
							<p class='history-content__text'>Сумма поездки, тг</p>
							<Text
								v-for='(passenger, idx) in item.passengers'
								:id='idx'
								:text='passenger.price'
							/>
						</div>
						<div>
							<p class='history-content__text'>Способ оплаты</p>
							<Text
								v-for='(passenger, idx) in item.passengers'
								:id='idx'
								:text='passenger.pay_type'
							/>
						</div>
					</div>
					<icon-back
						class='history-button btn'
						@click='id = 0'
					/>
				</div>
			</template>
		</Table>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Bio from '@/components/Bio.vue';
import Download from '@/components/Download.vue';
import Search from '@/components/Search.vue';
import Table from '@/components/Table.vue';
import Text from '@/components/Text.vue';
import IconBack from '@/components/icons/Back.vue';
import users from '@/assets/data.js';

const id = ref(0);
</script>
