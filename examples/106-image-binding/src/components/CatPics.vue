<template>
  <div>
    <img v-for="(kitten, index) in kittens"
         :key="index"
         class="img-fluid" :src="kitten" alt="Kitten!">
  </div>
</template>

<script setup>
const kittens = [
  "https://www.miauwbox.nl/wp-content/uploads/2016/08/Miauwbox-website-kittenbox.jpg",
  "https://www.beeztees.nl/wp-content/uploads/2017/01/shutterstock_235089946-1000x423.jpg",
  "https://www.licg.nl/media/1663/kittenchecklist740x433.jpg",
  "https://www.operationkindness.org/wp-content/uploads/blog-kitten-nursery-operation-kindness.jpg"
]
</script>
