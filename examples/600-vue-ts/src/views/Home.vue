<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        <p>
            A simple Vue.js + TypeScript app, demonstrating the options to work with TypeScript-classes,
            loading data, iterating over data and handling user events (mouseclicks).
        </p>
        <p>
            See the About-page for details
        </p>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {
    }
</script>
