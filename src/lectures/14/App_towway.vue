<template>
	<div>
		<h2>input Value</h2>
		<!-- <input type="text" :value="inputValue" @input="event => (inputValue = event.target.value)"> -->
		<!-- <input type="text" v-model.lazy="inputValue"> -->
		<!-- <input type="text" v-model.number="inputValue"> -->
		<input type="text" v-model.trim="inputValue">

		<div>{{ inputValue }}</div>
		<div>{{ typeof inputValue }}</div>


		<h2>textarea value</h2>
		<!-- <textarea :value="testareaValue" @input="event => (testareaValue = event.target.value)"></textarea> -->
		<textarea v-model="testareaValue"></textarea>

		<div>{{ testareaValue }}</div>

		<h2>checkbox box</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<!-- <input type="checkbox" id="checkboxValue" :checked="checkboxValue"
		@change="event => (checkboxValue = event.target.checked)"> -->
		<input type="checkbox" id="checkboxValue" v-model="checkboxValue"
		true-value="YES" false-value="NO">

		<h2>radio value</h2>
		<label for="">
			<!-- <input type="radio" name="type" value="O" :checked="radioValue ==='O'"
			@change="event => (radioValue = event.target.value)"> -->
			<input type="radio" name="type" value="O" v-model="radioValue">
			
			O형
		</label>
		<label for="">
			<input type="radio" name="type" value="A" v-model="radioValue">
			<!-- <input type="radio" name="type" value="A"  :checked="radioValue ==='A'"
			@change="event => (radioValue = event.target.value)"> -->
			A형
		</label>
		<div>{{ radioValue }}</div>

		<h2>select value</h2>
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>

		<h2>checkbox values</h2>
		<label for="">
			<input type="checkbox" value="html" v-model="checkboxValues">
			html
		</label>
		<label for="">
			<input type="checkbox" value="css" v-model="checkboxValues">
			css
		</label>
		<label for="">
			<input type="checkbox" value="javascript" v-model="checkboxValues">
			javascript
		</label>
		<div>{{ checkboxValues }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup () {
		const inputValue = ref('');
		const testareaValue = ref('');
		const checkboxValue = ref('YES');
		const radioValue = ref('O');
		const selectValue = ref('html');
		const checkboxValues = ref([]);

		return {
			inputValue,
			testareaValue,
			checkboxValue,
			radioValue,
			selectValue,
			checkboxValues,
		}
	}
}
</script>

<style lang="scss" scoped>

</style>