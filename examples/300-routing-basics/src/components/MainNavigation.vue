<template>
  <div class="row">
    <div class="col">
      <!--Main navigation - Bootstrap Navbar, see https://getbootstrap.com/docs/4.0/components/navbar/ for details -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" exact :to="{name: 'home'}">
          <img src="../assets/logo.png" alt="Vue Logo">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="add" class="nav-link">Add Country</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="update" class="nav-link">Update Country</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
img {
  max-width: 80px;
}
</style>
