<template>
  <!--  TODO: more options - floating, closeable, button, etc.-->
  <div class="msg" :class="msgType">
    {{ msg }}
  </div>
</template>

<script>
export default {
  // This component can be called with the property msgType (or msg-type) set
  // to the values 'error', 'info' or 'success'. Depending on the property, a specific class
  // is set. If the property is set to another value, the class is not set and therefore
  // the background is transparent. There is an error in the devtools console.
  name: "DialogMessage",
  props: {
    msg: {
      type: String,
      required: true
    },
    msgType: {
      type: String,
      validator(value) {
        return ['error', 'info', 'success'].includes(value);
      }
    }
  }
}
</script>

<style scoped>
/* general class with default properties for the message. Add/change properties as desired. */
.msg {
  padding: 10px;
  margin: 4px;
  width: 50%;
  min-width: 120px;
  border: 1px solid black;
  border-radius: 4px;
}

/* error class*/
.error {
  background-color: darkred;
  color: white;
}

/* info*/
.info {
  background-color: deepskyblue;
}

/* success*/
.success {
  background-color: #42b983;
}
</style>
