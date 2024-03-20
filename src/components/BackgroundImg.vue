<template>
  <div class="absolute top-0 left-0 w-100% h-100% duration-250 -z-1">
    <img
      class="background absolute top-0 left-0 w-full h-full object-cover backface-hidden"
      :src="imgUrl"
      alt=""
      @load="imgLoadComplete"
      @error.once="imgLoadError"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { backgroundImg } from '../stores/index';

const imgUrl = ref('');
const imgRandom = Math.floor(Math.random() * 12);
const changeBg = (type: string) => {
  if (type === '0') {
    imgUrl.value = `/images/acquiesceBackground${imgRandom}.webp`;
  } else if (type === '1') {
    imgUrl.value = 'https://api.aixiaowai.cn/gqapi/gqapi.php';
  } else if (type === '2') {
    imgUrl.value = 'https://api.aixiaowai.cn/gqapi/gqapi2.php';
  } else if (type === '3') {
    imgUrl.value = 'https://api.aixiaowai.cn/api/api.php';
  }
};

const store = backgroundImg();
// img load complete
const imgLoadComplete = () => {
  store.setImgLoadStatus(true);
};

// img load error
const imgLoadError = () => {
  store.coverType = '0';
  changeBg(store.coverType);
};

onMounted(() => {
  store.setImgLoadStatus(false);
  changeBg(store.coverType);
});
</script>

<style scoped lang="scss"></style>
