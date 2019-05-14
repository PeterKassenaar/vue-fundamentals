<template>
  <div class="container">
    <h2>All Posts</h2>
    <ul class="list-group">
      <li v-for="post in posts" :key="post.id"
          class="list-group-item">
        <nuxt-link :to="`/posts/${post.id}`">
          <!-- OR, using the object notation: -->
          <!-- <nuxt-link :to="{name:'posts-id', params:{ id: post.id}}">-->
          {{ post.title}}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import posts from '../data/posts'

  export default {
    name: "PostList",
    data() {
      return {
        posts
      }
    }
  }
</script>

<style scoped>

</style>
