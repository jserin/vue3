<template>
  <div class="card">
    <div class="card-body">
      <span class="badge text-bg-secondary">{{ typeName}}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">{{ contents }}</p>
      <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">like</a>
    </div>
  </div>
</template>

<script>
console.log("111");
</script>

<script setup>
import {computed} from "@vue/reactivity";
const props = defineProps({
  type: {
    type: String,
    default: 'news',
    validator: value => {
      return ['news', 'notice'].includes(value);
    }
  },
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    // required: true,
  },
  isLike: {
    type: Boolean,
    default: false,
  },
  obj: {
    type: Object,
    default: () => ({}),
  }
})

const emit = defineEmits(['toggleLike'])

// console.log(props.title);
const isLikeClass = computed(() => props.isLike ? 'btn-danger' : 'btn-outline-danger')
const typeName = computed(() => props.type === 'news' ? 'news' : 'notice');
const toggleLike = () => {
  emit('toggleLike');
};
</script>

<style lang="scss" scoped>

</style>