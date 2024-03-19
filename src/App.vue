<template>
  <!-- background -->
  <teleport to="body">
    <div class="fixed left-0 top-0 w-100% h-100% z--1">
      <Background></Background>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import Background from './components/Background.vue';
</script>

<style scoped lang="scss"></style>
