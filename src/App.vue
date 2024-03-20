<template>
  <div class="flex justify-center items-center">
    <!-- loading animation -->
    <transition
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="loading"
        class="fixed z-999 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100vw h-100vh bg-#000 flex justify-center items-center flex-col transition-opacity duration-800 ease-in"
      >
        <Loading></Loading>
      </div>
    </transition>

    <!-- backgroundImg -->
    <div class="fixed left-0 top-0 w-100vw h-100vh opacity-70 bg-#000"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Loading from './components/Loading.vue';

// loading
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 2000);
</script>

<style scoped lang="scss"></style>
