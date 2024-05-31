<template>
  <main class="p-5">
		<div id="container">
      <PostCreate @create-post="createPost"></PostCreate>
      <hr class="my-4">
			<div class="row g-3">
				<!-- <div class="col col-4"><AppCard title="제목1" contents="내용1"></AppCard></div>
				<div class="col col-4"><AppCard :title="post.title" :contents="post.contents"></AppCard></div> -->
				<div class="col col-4" v-for="post in posts" :key="post.id">
          <AppCard :title="post.title" :contents="post.contents" :type="post.type" :is-like="post.isLike"
          @toggle-like="post.isLike = !post.isLike"
          :obj="obj"></AppCard>
        </div>
			</div>

      <hr class="my-4">
      <LabelInput v-model="username" label="name"
        class="parent-class" style="color: red;" id="parent-id"
      ></LabelInput>

      
		</div>
	</main>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import Username from '@/components/Username.vue';


import { reactive, ref } from 'vue';
export default {
  components: {
		AppCard, PostCreate, LabelInput
	},
  setup () {
    const obj = reactive({
      title: 'title2',
      contents: 'content2',
    })

    const posts = reactive( [
      {id:1, title: 'title1', contents: 'content1', isLike: true, type: 'news'},
      {id:2, title: 'title2', contents: 'content2', isLike: true, type: 'news'},
      {id:3, title: 'title3', contents: 'content3', isLike: true, type: 'news'},
      {id:4, title: 'title4', contents: 'content4', isLike: true, type: 'news'},
      {id:5, title: 'title5', contents: 'content5', isLike: false, type: 'notice'},
      {id:6, title: 'title6', contents: 'content6', isLike: false, type: 'notice'},
    ]);

    const createPost = newPost => {
      console.log('createPost', newPost);
      posts.push(newPost);
    }

    const username = ref('');
    const firstname = ref('');
    const lastname = ref('');

    return {
      obj,
      posts,
      createPost,
      username,
      firstname,
      lastname,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>