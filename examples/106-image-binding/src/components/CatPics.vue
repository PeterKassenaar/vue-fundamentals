<template>
  <div>
    <img v-for="(kitten, index) in kittens"
         :key="index"
         class="img-fluid" :src="kitten" alt="Kitten!">
  </div>
</template>

<script>
export default {
  name: "CatPics",
  data() {
    return {
      kittens: [
        "https://www.miauwbox.nl/wp-content/uploads/2016/08/Miauwbox-website-kittenbox.jpg",
        "https://www.beeztees.nl/wp-content/uploads/2017/01/shutterstock_235089946-1000x423.jpg",
        "https://www.licg.nl/media/1663/kittenchecklist740x433.jpg",
        "https://dierenzorggids.nl/wp-content/uploads/sites/6/2020/10/cat-2574385_1920-1024x683.jpg"
      ]
    }

  }

}
</script>

<style scoped>

</style>
