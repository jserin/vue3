<template>
	<div>
		<!-- <div class="text" :class="{ active: isActive, 'text-danger': hasError }">텍스트입니다.</div> -->
		<div class="text" :class="classObject">텍스트입니다.</div>

		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">hasError</button>

	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup () {
		const isActive = ref(true);
		const hasError = ref(false);
		const classObject = reactive({
			active: true,
			'text-danger': true,
		})

		const toggle = () => {
			isActive.value = !isActive.value;
		}
		return { 
			isActive,
			toggle,
			hasError,
			classObject,
		};
	}
}
</script>

<style scoped>
.text-danger {
	color: red;
}
.active {
	font-weight: 900;
}
</style>