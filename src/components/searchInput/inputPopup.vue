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
      <div
        class="allEngines flex justify-left items-center gap-10 mt-2vh flex-wrap overflow-y-auto h-25vh"
      >
        <div
          class="everyEngines px-10 py-5 w-200 rounded-10 bg-#fff flex justify-left items-center gap-5 cursor-pointer"
          v-for="(item, index) in props.list"
          :key="index"
          @click="switchEngine(item.img)"
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
import { onMounted, ref } from 'vue';
import { SearchEngine } from '../../types/searchInput';
const emit = defineEmits(['switchEngine']);
const props = defineProps<{
  list: SearchEngine[];
  show: boolean;
}>();

const switchEngine = (engine: string) => {
  let img = ref<string>(engine);
  emit('switchEngine', img.value);
};

onMounted(() => {
  switchEngine(props.list[0].img);
});
</script>

<style scoped lang="scss">
@media (max-width: 768px) {
  .allEngines {
    min-width: 200px;
    .everyEngines {
      min-width: 200px;
    }
  }
}
</style>
