<template>
  <div
    class="inputContainer bg-#fff w-40vw h-6vh rounded-20px flex items-center justify-between overflow-hidden opacity-70"
  >
    <!-- Switch search engines  -->
    <div
      @click.stop="showPopup"
      class="h-full flex items-center justify-right pl-3 cursor-pointer"
    >
      <img :src="engineSrc?.img" class="h-full w-full" />
    </div>
    <input
      class="w-full h-full pl-5 text-1rem"
      placeholder="请输入想搜索的内容"
      type="text"
    />
    <!-- search -->
    <div class="h-full flex items-center cursor-pointer pr-5">
      <img src="/svg/search.svg" class="h-2/3" />
    </div>
  </div>
  <!-- Switch search engines popup -->
  <div>
    <inputPopup
      @switchEngine="switchEngine"
      :show="popupShow"
      :list="searchEngines"
    ></inputPopup>
  </div>
</template>

<script setup lang="ts">
import inputPopup from './inputPopup.vue';
import { SearchEngine } from '../../types/searchInput';
import { ref } from 'vue';
import { $t } from '../../lang';
const searchEngines: SearchEngine[] = [
  {
    name: $t('google'),
    url: 'https://www.google.com/search?q=',
    img: '/svg/google.svg',
  },
  {
    name: $t('baidu'),
    url: 'https://www.baidu.com/s?wd=',
    img: '/svg/baidu.svg',
  },
  {
    name: $t('github'),
    url: 'https://github.com/search?q=',
    img: '/svg/github.svg',
  },
  {
    name: $t('bilibili'),
    url: 'https://search.bilibili.com/all?keyword=',
    img: '/svg/bilibili.svg',
  },
  {
    name: $t('youtube'),
    url: 'https://www.youtube.com/results?search_query=',
    img: '/svg/youtube.svg',
  },
];

// popup show status
const popupShow = ref<boolean>(false);
const showPopup = () => {
  popupShow.value = !popupShow.value;
  // if popup show, add click event to close popup
  if (popupShow.value) {
    document.addEventListener('click', () => {
      popupShow.value = false;
    });
  } else {
    document.removeEventListener('click', () => {
      popupShow.value = false;
    });
  }
};

// son component emit event
const engineSrc = ref<SearchEngine>();
const switchEngine = (img: SearchEngine) => {
  engineSrc.value = img;
};
</script>

<style scoped lang="scss">
@media (max-width: 768px) {
  .inputContainer {
    min-width: 200px;
  }
}
</style>
