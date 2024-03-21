<template>
  <div class="waterBox flex justify-center items-center pt-1rem relative">
    <div class="content flex flex-col relative">
      <div
        class="bottle bg-#ffffff1a rounded-50% relative z-2 origin-bottom origin-center cursor-pointer"
        @click="goMySpace"
      >
        <div class="water" />
      </div>
      <div
        class="bottleBottom absolute bottom-0 left-1/2 -translate-x-1/2 w-5.5vw h-30 bg-[rgba(0,0,0,0.5)] rounded-50%"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// go to my space
const goMySpace = () => {
  window.open('https://www.wekooo.com', '_self');
};
</script>

<style scoped lang="scss">
.waterBox {
  $bottleWidth: 5.5vw;

  .content {
    .bottle {
      width: $bottleWidth;
      height: $bottleWidth;

      &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: 50%;
        width: calc($bottleWidth / 2);
        height: calc($bottleWidth / 5);
        border-radius: 50%;
        transform: translate(-50%);
        background-color: #505250;
        box-shadow: 0 calc($bottleWidth / 30) 5px #000;
      }

      .water {
        position: absolute;
        top: 50%;
        bottom: 3px;
        left: 3px;
        right: 3px;
        background-color: #41c1fb;
        border-bottom-left-radius: calc($bottleWidth / 2);
        border-bottom-right-radius: calc($bottleWidth / 2);
        animation: animate2 2s linear infinite;
        transform-origin: top center;

        &::before {
          content: '';
          width: 100%;
          height: 20px;
          background-color: #0da2e7;
          border-radius: 50%;
          position: absolute;
          top: -10px;
          left: 0;
        }
      }
    }

    .bottleBottom {
      animation: move 2s linear infinite;
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(0);
    }

    25% {
      transform: rotate(15deg);
    }

    50% {
      transform: rotate(0);
    }

    75% {
      transform: rotate(-15deg);
    }

    100% {
      transform: rotate(0);
    }
  }

  @keyframes animate2 {
    0% {
      transform: rotate(0);
      filter: drop-shadow(0 0 50px #41c1fb) hue-rotate(0deg);
    }

    25% {
      transform: rotate(-15deg);
    }

    50% {
      transform: rotate(0);
    }

    75% {
      transform: rotate(15deg);
    }

    100% {
      transform: rotate(0);
      filter: drop-shadow(0 0 50px #41c1fb) hue-rotate(360deg);
    }
  }

  @keyframes move {
    0% {
      transform: translateX(-50%);
    }

    25% {
      transform: translateX(calc(-50% + $bottleWidth / 10));
    }

    50% {
      transform: translateX(-50%);
    }

    75% {
      transform: translateX(calc(-50% - $bottleWidth / 10));
    }

    100% {
      transform: translateX(-50%);
    }
  }
}
</style>
