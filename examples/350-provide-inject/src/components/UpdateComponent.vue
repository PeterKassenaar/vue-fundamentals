<script setup>
import {inject, ref} from "vue";

const {updateMessage} = inject('messageProvider')
const newMsg = ref('');

const update = () => {
  updateMessage(newMsg.value);
}
</script>

<template>
  <div>
    <h2>This is the update message component</h2>
    <p>We can also provide <code>functions</code>!</p>
    <p>Update the message, press <strong>Enter</strong>, and check if it is changed in other components also</p>
    <p>
      <input
          class="form-control-lg"
          v-model="newMsg"
          placeholder="New message..."
          @keyup.enter="update"/>
    </p>
    <p>It works because <code>message</code> is a <em>reactive</em> value, wrapped in <code>ref()</code>. Therefore if
      it is updated in the <code>MainComponent</code>, it is updated in the provider also. And therefore in all
      injections.</p>
  </div>
</template>

<style scoped>
div {
  border: 2px solid coral;
}
</style>
