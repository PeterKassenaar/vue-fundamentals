<template>
  <div class="container">
    <h2>SEO Example in Nuxt</h2>
    <h2>{{ title }}</h2>
    <p>
      C# was designed by Anders Hejlsberg, and its development team is currently led by Mads Torgersen. The most recent
      version is C# 7.3, which was released in 2018 alongside Visual Studio 2017 version 15.7.2.
    </p>
  </div>
</template>

<script>
  export default {
    name: "seo",
    data() {
      return {
        title: 'Some C# Facts'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            name: 'description',
            content: 'C# was designed by Anders Hejlsberg, and its development team is currently led by Mads Torgersen. The most recent version is C# 7.3.\''
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
