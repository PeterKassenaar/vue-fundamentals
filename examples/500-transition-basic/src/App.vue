<!--App.vue-->
<template>
    <div id="app" class="container">
        <MainNavigation/>
        <!--Transition element around the router view-->
        <!--more information : https://vuejs.org/v2/guide/transitions.html-->
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <Footer />
    </div>
</template>

<script>
    import MainNavigation from "./components/layout/MainNavigation";
    import Footer from "./components/layout/Footer";

    export default {
        name: 'app',
        components: {
            Footer,
            MainNavigation,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
    }
    /*transition styles*/
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
