<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" header-message="header message!!"></slot>
    </div>
    <div v-if="$slots.default" class="card-body">
      <slot :child-message="childMessage" hello-message="hello"></slot>
    </div>
    <div v-if="hasFooter" class="card-footer text-body-secondary">
      <slot name="footer" footer-message="footer message!!"></slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup (porps, {slots}) {
    const childMessage = ref('child component message')
    // context.slots
    const hasFooter = computed(() => !!slots.footer);
    return {childMessage, hasFooter}
  }
}
</script>

<style lang="scss" scoped>

</style>