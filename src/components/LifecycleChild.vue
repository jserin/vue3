<template>
  <div class="card">
    <div class="card-body">
      Lifecycle child
    </div>
    <input type="text" id="input">
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
  setup () {
    // console.log('[child] setup');
    onBeforeMount(() => {
      console.log('[child] beforeCreate');
    })
    onMounted(() => {
      console.log('[child] created');
    })

    onBeforeUnmount(() => {
      console.log('[child] onBeforeUnmount');
      console.log(document.querySelector('#input'));

    })

    onUnmounted(() => {
      console.log('[child] onUnmounted');
      console.log(document.querySelector('#input'));
    })
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>