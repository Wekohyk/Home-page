<template>
  <div class="flex justify-center items-center">
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100vw h-100vh bg-#000 flex justify-center items-center flex-col"
    >
      <Loading></Loading>
    </div>
  </div>
</template>

<script setup lang="ts">
import Loading from './components/Loading.vue';
</script>

<style scoped lang="scss"></style>
