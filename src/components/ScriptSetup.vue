<template>
  <div class="container py-4">
    {{ msg }}
    {{ message }}
    <input type="text" v-model="message">
    <button @click="sayHello">click</button>
    <PostItem type="news" title="title" contents="content" :is-like="true"></PostItem>
    <PostItem type="news" title="title" contents="content" :is-like="true"></PostItem>
    <PostItem type="news" title="title" contents="content" :is-like="true"></PostItem>
    <hr>
    <TemplateRefsChild ref="child"></TemplateRefsChild>
    <template v-if="child">{{ child.message }}</template>
    <hr>
    <MyButton class="parent-class"></MyButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from '@/components/setup/TemplateRefsChild.vue';
import MyButton from './setup/MyButton.vue';

const msg = 'Hello World!';
const message = ref('');
const sayHello = () => {
  alert(msg);
};
const child = ref(null);
defineExpose({
  msg,
})

const response = await axios('https://dummy.restapiexample.com/api/v1/employees');
console.log('response: ', response)
</script>
<style lang="scss" scoped>

</style>