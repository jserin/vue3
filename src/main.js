import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
// import AppCard from '@/components/AppCard.vue';

const app = createApp(App);
// app.component('AppCard', AppCard);
app.provide('app-message', 'This is app message!!')
app.config.globalProperties.msg = '안녕!'
app.provide('msg', 'message!!')

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
