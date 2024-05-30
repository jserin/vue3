<template>
  <div class="p-3 bg-danger">
    <button class="btn btn-primary" type="button" v-bind="$attrs"
    @click="sayHello">My Button</button>
  </div>
</template>

<script>
export default {
  // inheritAttrs: false,
  emits: ['click'],
  setup (props, {emit}) {
    const sayHello = () => {
      emit('click');

    }

    return {sayHello}
  }
}
</script>

<style lang="scss" scoped>

</style>