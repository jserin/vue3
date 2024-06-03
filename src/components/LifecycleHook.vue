<template>
  <div class="container py-4">
    <hr>
    <button @click="visible = !visible">Toggle Child</button>
    <LifecycleChild v-if="visible"></LifecycleChild>
    <p id="message">{{ message }}</p>
    </div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifecycleChild from './LifecycleChild.vue';

export default {
  components: {
    LifecycleChild,
  },
  setup () {
    // console.log('setup');
    // onBeforeMount(() => {
    //   console.log('beforeCreate');
    // })
    // onMounted(() => {
    //   console.log('created');
    // })

    const message = ref('');
    // onBeforeUpdate(() => {
    //   console.log('onBeforeUpdate', message.value);
    //   console.log('Dom Content:', document.querySelector('#message').textContent)
    // });

    // onUpdated(() => {
    //   console.log('onUpdated', message.value);
    //   console.log('Dom Content:', document.querySelector('#message').textContent)
    // });

    const visible = ref(false);


    return {message, visible}
  }
}
</script>

<style lang="scss" scoped>

</style>