<template>
  <h1>{{ title }}</h1>
  <p>{{ subtitle }}</p>
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

