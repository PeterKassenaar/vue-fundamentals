<template>
  <!--  The 'Skeleton' and anatomy of the Vue Card. The styles-->
  <!--  below make sure that every component which uses this Vue Card renders the same way-->
  <div class="card-div">
    <div class="card-photo">
      <slot name="card-photo"></slot>
    </div>
    <div class="card-title">
      <slot name="card-title"></slot>
    </div>
    <hr>
    <div class="card-text">
      <slot name="card-text"></slot>
    </div>
    <div class="card-btn">
      <slot name="card-btn"></slot>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
/*Scoped styles for our Vue Card Component*/
.card-div {
  border: 1px solid gray;
  border-radius: 0 0 4px 4px;
  padding: 10px;
}

.card-photo img {
  width: 100%;
}

.card-title {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
}

.card-text {
  font-size: 12px;
}

.card-btn {
  text-align: center;
}

.card-btn:hover {
  cursor: pointer;
  background-color: beige;
  border-radius: 4px;
}
</style>
