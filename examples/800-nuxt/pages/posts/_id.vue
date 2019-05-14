<template>
  <div class="container">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body}}</p>
    <p>
      <nuxt-link to="/PostList">Back</nuxt-link>
    </p>
  </div>
</template>

<script>
  import posts from '../../data/posts';
  export default {
    name: "post-id",
    computed:{
      // 1. the current post as a computed property
      post(){
       return  this.posts.find(post => post.id === +this.id);
      }
    },
    data() {
      return {
        // 2. Get access to the parameter 'id'. This is because the page is called _id.
        // If we would have called the page _user, the parameter would be
        // available as this.$route.params.user.
        id: this.$route.params.id,

        // 3. Some dummy posts, from https://jsonplaceholder.typicode.com/posts
        posts
      }
    }
  }
</script>

<style scoped>

</style>
