<template>
  <div class="row g-3">
    <!-- <button class="btn btn-primary" @click="$emit('createPost', 1, 2, 3, '김길동')">button</button> -->
    <div class="col col-2">
      <select v-model="type" class="form-select" aria-label="Default select example">
        <option value="news">news</option>
        <option value="notice">notice</option>
      </select>
    </div>
    <div class="col col-8">
      <input v-model="title" type="text" class="form-control">
    </div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="createPost">add</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  // emits: ['createPost'],
  emits: {
    createPost: (newPost) => {
      if (!newPost.type) {
        return false;
      } else if (!newPost.title) {
        return false;
      }
      return true;
    }
  },
  setup (props, {emit}) {
    const type = ref('news');
    const title = ref('');
    const createPost = () => {
      const newPost =  {
        type: type.value,
        title: title.value,
      }
      emit('createPost', newPost)
      type.value = 'news';
      title.value = '';
    }

    return {
      createPost,
      title,
      type
    }
  }
}
</script>

<style lang="scss" scoped>

</style>