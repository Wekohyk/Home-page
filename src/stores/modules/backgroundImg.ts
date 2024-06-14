import { defineStore } from 'pinia';
import { ref } from 'vue';

export const backgroundImg = defineStore(
  'backgroundImg',
  () => {
    const coverType = ref<string>('0'); // Wallpaper type
    const imgLoadStatus = ref<boolean>(false); // Whether the image is loaded

    const setImgLoadStatus = (value: boolean) => {
      imgLoadStatus.value = value;
    };

    return {
      coverType,
      imgLoadStatus,
      setImgLoadStatus,
    };
  },
  {
    persist: {
      key: 'data',
      storage: window.localStorage,
      paths: [],
    },
  },
);
