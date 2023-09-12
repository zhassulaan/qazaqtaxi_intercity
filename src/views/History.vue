<template>
	<main class='home'>
		<div class='home-control'>
			<Search />
			<Download />
		</div>

		<Table id='history' :list='users'>
			<template #detail='{ item }'>
				<div class='history'>
					<Bio id='history' :user='item' />

					<div class='history-right'>
						<div>
							<p>Дата поездки</p>
							<Text :text='item.order_date'/>
						</div>
						<div>
							<p>Точка А</p>
							<Text :text='item.a' />
						</div>
						<div>
							<p>Принято</p>
							<Text :text='item.accept_time'/>
						</div>
						<div>
							<p>Точка В</p>
							<Text :text='item.b' />
						</div>
						<div>
							<p>Start</p>
							<Text :text='item.start'/>
						</div>
						<div>
							<p>Кол-во пассажиров</p>
							<Text :text='item.total_passengers' />
						</div>
						<div>
							<p>Finish</p>
							<Text :text='item.end'/>
						</div>
						<div>
							<p>Сумма поездки, тг</p>
							<Text :text='item.total_cost' />
						</div>
					</div>
				</div>
			</template>
		</Table>
  </main>
</template>

<script setup>
import Download from '@/components/Download.vue';
import Bio from '@/components/Bio.vue';
import Search from '@/components/Search.vue';
import Table from '@/components/Table.vue';
import Text from '@/components/Text.vue';
import users from '@/assets/data.js';
</script>