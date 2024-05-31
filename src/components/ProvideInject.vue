<template>
  <div class="cantainer py-4">
    <div class="card">
      <div class="card-header">ProvideInject Component!!!</div>
      <div class="card-body">
        <button @click="count++">Plus!</button>
        <p>{{ appMessage }}</p>
        <Child></Child>
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref, readonly, inject } from 'vue';
import Child from './Child.vue';

export default {
  components: {
    Child,
  },
  setup () {
    const staticMessage = ref('static message!!!');
    const message = ref('message!!!');
    const count = ref(10);
    // provide('static-message', staticMessage);
    const updateMessage = appendMessage => {
      message.value = message.value + appendMessage;
    }

    provide('message', {message: readonly(message), updateMessage});
    provide('count', count);

    const msg = inject('msg');
    console.log('msg: ', msg)


    const appMessage = inject('app-message');
    return {count, appMessage}
  },
  mounted() {
    console.log('this.msg: ', this.msg)
  }
}
</script>

<style lang="scss" scoped>

</style>