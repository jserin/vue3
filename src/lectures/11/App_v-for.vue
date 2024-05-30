<template>
	<div>
		<ul>
			<template v-for="item, index in evenItems" :key="item.id">
				<!-- <li v-if="item.id % 2 === 0"> -->
				<li>
					ID: {{ item.id }}, index: {{ index }}, message: {{ item.message }}
				</li>
			</template>
			<hr>
			<ul>
				<li v-for="(value, key, index) in myObject" :key="key">
					{{ index }}-{{ key }}-{{ value }}
				</li>
			</ul>
		</ul>
	</div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
	setup () {
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'JavaScript' },
		]);

		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: 'Title',
			author: 'Hong Gildong',
			publishedAt: '2024-01-01',
		})

		return {items, evenItems, myObject}
	}
}
</script>

<style lang="scss" scoped>

</style>