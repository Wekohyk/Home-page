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
    <div class="fixed left-0 top-0 w-100vw h-100vh filter-brightness-[0.3]">
      <BackgroundImg></BackgroundImg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { backgroundImg } from './stores';
import Loading from './components/Loading.vue';
import BackgroundImg from './components/BackgroundImg.vue';
import { ref, watch } from 'vue';

const store = backgroundImg();

// loading
const loading = ref(true);

// watch img load status, if img load complete, set loading to false
watch(
  () => store.imgLoadStatus,
  newVal => {
    loading.value = !newVal;
  },
);
</script>

<style scoped lang="scss"></style>
