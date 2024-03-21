<template>
  <div class="w-100vw h-140 flex items-center justify-between mx-10">
    <!-- logo -->
    <div class="w-50 flex justify-center items-center">
      <WaterBottle></WaterBottle>
    </div>
  </div>
</template>

<script setup lang="ts">
import WaterBottle from './WaterBottle.vue';
// import { showTime } from '../utils/getShowTime';
// import { onUnmounted, ref } from 'vue';

// const nowTime = ref<string>('');

// // git time
// const setInt = ref<number>(
//   setInterval(() => {
//     nowTime.value = showTime();
//   }, 1000),
// );
// onUnmounted(() => {
//   clearInterval(setInt.value);
// });
</script>

<style scoped lang="scss"></style>
