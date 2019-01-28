<template>
    <div class="row">
        <div class="col">
            <!--Main navigation - Bootstrap Navbar, see https://getbootstrap.com/docs/4.0/components/navbar/ for details -->
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <router-link class="navbar-brand" :to="{name: 'home'}" exact>
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
                            <router-link to="/" class="nav-link" exact>Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/api" class="nav-link" exact>Country API</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/api-search" class="nav-link" exact>Search API</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
	export default {
		name: "MainNavigation"
	}
</script>

<style scoped>
    /*resize to logo to fit in the navbar*/
    .navbar-brand img {
        width: 40px;
        height: 40px;
    }
    /*Automatic assignment of this class by Vue, based on router state*/
    .router-link-active{
        background-color: cornsilk;
        color: white;
    }
</style>
