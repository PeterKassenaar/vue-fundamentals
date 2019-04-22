<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ counter.number }}</h2>
    <button @click="add()">Add</button>
    <button @click="subtract()">Subtract</button>
    <button @click="reset()">Reset</button>
  <ComponentA />
    {{ message }}
  </div>
</template>

<script>
import ComponentA from "./ComponentA";
import counterMixin from "../mixins/counterMixin";
export default {
  name: 'HelloWorld',
  components: { ComponentA},
  props: {
    msg: String
  },
  data(){
    return {
      message:'Hello Component'
    }
  },
  mixins:[counterMixin]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
