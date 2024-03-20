<template>
  <div class="w-100vw h-90 flex items-center justify-between mx-10">
    <!-- logo -->
    <div class="w-50 flex justify-center items-center">
      <WaterBottle></WaterBottle>
    </div>
    <!-- time -->
    <div class="text-#fff/70 h-45 font-STXingkai text-1.2rem">
      {{ nowTime }}
    </div>
  </div>
</template>

<script setup lang="ts">
import WaterBottle from './WaterBottle.vue';
import { showTime } from '../utils/getShowTime';
import { onUnmounted, ref } from 'vue';

const nowTime = ref<string>('');

// git time
const setInt = ref<number>(
  setInterval(() => {
    nowTime.value = showTime();
  }, 1000),
);
onUnmounted(() => {
  clearInterval(setInt.value);
});
</script>

<style scoped lang="scss"></style>
