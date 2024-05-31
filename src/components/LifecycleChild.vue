<template>
  <div>

  </div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue';

export default {
  setup () {
    console.log('[child] setup');
    onBeforeMount(() => {
      console.log('[child] beforeCreate');
    })
    onMounted(() => {
      console.log('[child] created');
    })

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>