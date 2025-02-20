<script setup>

import ChildOne from "@/components/ChildOne.vue";
import ChildTwo from "@/components/ChildTwo.vue";
import UpdateComponent from "@/components/UpdateComponent.vue";

import {provide, ref} from "vue";

// 1. Providing a simple string
const message = 'Hello World';
provide('messageProvider', message);

// 2. Providing a complex object, using a string and a function (yes, this looks like how React works with props.)
// const message = ref('Hello World')
// const updateMessage = (msg) => {
//   message.value = msg;
// }
//
// provide('messageProvider', {
//   message,
//   updateMessage
// })

</script>

<template>
  <div>
    <h2>This is the main component</h2>
    <p>It is also known as a 'smart' component. It holds all the data and <code>provide</code> composable to provide
      data to underlying components.</p>
    <p>This is the current provided value: <strong>{{ message }}</strong> </p>
    <p>
      <ChildOne/>
    </p>
    <p>
      <ChildTwo/>
    </p>
    <hr>
    <p>
<!--      <UpdateComponent/>-->
    </p>
  </div>
</template>

<style scoped>
div {
  border: 1px solid red;
  padding: 10px;
}
</style>
