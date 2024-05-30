<template>
  <div>
    <LabelInput :model-value="firstname"
    @update:model-value="value => $emit('update:firstname', value)"
      label="firstName"></LabelInput>
      
    <LabelInput :model-value="lastname"
    @update:model-value="value => $emit('update:lastname', value)" 
    label="lastName"></LabelInput>
  </div>
</template>

<script>
import LabelInput from '@/components/LabelInput.vue';

export default {
  props: ['firstname', 'lastname'],
  emits: ['update:firstname', 'update:lastname'],
  components: {
    LabelInput,
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>