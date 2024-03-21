<template>
  <transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="block bg-#000/50 absolute left-0 top-7vh rounded-10 p-10 transition-opacity duration-400 ease-in"
    >
      <!-- top text -->
      <div class="text-#fff font-STXingkai">
        {{ $t('pleaseChooseEngines') }}
      </div>
      <!-- every engines -->
      <div class="flex justify-center items-center gap-10 mt-2vh">
        <div
          class="px-10 py-5 rounded-10 bg-#fff flex justify-left items-center gap-5"
          v-for="(item, index) in props.list"
          :key="index"
          @click="switchEngine(item)"
        >
          <div class="flex items-center justify-center">
            <img :src="item.img" class="h-30 w-30" />
          </div>
          <div class="text-#000">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { SearchEngine } from '../../types/searchInput';
const props = defineProps<{
  list: SearchEngine[];
  show: boolean;
}>();

const switchEngine = (engine: SearchEngine) => {
  console.log(engine.name);
};
</script>

<style scoped lang="scss"></style>
