<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="~assets/logo-c-sharp.png" class="logo" alt="Logo C sharp">
      <span>C#</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link exact class="nav-link" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link exact class="nav-link" to="/history">History</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link exact class="nav-link" to="/PostList">Post List</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "TheNavigation"
    }
</script>

<style scoped>
.logo{
  float: left;
  width: 60px;
}
</style>
