<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
}
</script>
