<template>
  <div class="row">
    <div class="col">
      <!--Main navigation - Bootstrap Navbar, see https://getbootstrap.com/docs/4.0/components/navbar/ for details -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" exact :to="{name: 'home'}">
          <img src="../assets/logo.png" class="transparent" alt="Vue Logo">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 80px;
}
</style>
