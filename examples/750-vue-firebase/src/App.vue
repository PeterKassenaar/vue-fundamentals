<template>
  <div class="container">
    <!--    Main menu - could/should be in its own component -->
    <router-link
        to="/"
        class="btn btn-outline-info">
      <span class="fa fa-home"></span>
      Home
    </router-link>
    <router-link
        to="/add"
        class="btn btn-outline-info">
      <span class="fa fa-plus"></span>
      Add City
    </router-link>
    <!--    RouterView -->
    <router-view/>
    <hr>
    <div class="text-center text-muted">
      <a href="https://vuefire.vuejs.org/vuefire/#introduction" target="_blank">
        Official Vuefire documentation
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
