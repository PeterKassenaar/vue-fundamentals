<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--  0. Default HelloWorld Component-->
    <!--  <HelloWorld msg="Hello TypeScript App"/>-->
    <!--  1. Counter component using class notation with 'extends'-->
    <!--  <CounterExtends/>-->
    <!--  2. Counter component using defineComponent()-->
    <!--  <CounterDefine/>-->
    <!--  3. VacationPicker component, using Country interface as model-->
    <!--  <VacationPicker/>-->
    <!--  4. Component to search an external API-->
    <CountryApi/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import HelloWorld from './components/00-HelloWorld.vue';
import CounterExtends from "@/components/01-CounterClass.vue";
import CounterDefine from "@/components/02-CounterDefine.vue";
import VacationPicker from "@/components/04-VacationPicker.vue";
import CountryApi from '@/components/05-CountryApi.vue';

@Options({
  components: {
    VacationPicker,
    CounterExtends,
    CounterDefine,
    HelloWorld,
    CountryApi
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
