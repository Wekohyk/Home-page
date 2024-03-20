<template>
  <div class="w-100%">
    <div
      class="waterBox left-1/2 top-0 -translate-x-1/2 h-90 flex justify-center pt-1rem relative"
    >
      <div class="content flex flex-col relative">
        <div
          class="bottle bg-#ffffff1a rounded-50% relative z-2 origin-bottom origin-center cursor-pointer"
          @click="goMySpace"
        >
          <div class="water" />
        </div>
        <div class="bottleBottom" />
      </div>
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
  $bottleWidth: 30px;

  .content {
    .bottle {
      width: $bottleWidth;
      height: $bottleWidth;

      &::before {
        content: '';
        position: absolute;
        top: -3px;
        left: 50%;
        width: calc($bottleWidth / 3);
        height: calc($bottleWidth / 5);
        border-radius: 50%;
        transform: translate(-50%);
        background-color: #505250;
        box-shadow: 0 calc($bottleWidth / 30) 5px #000;
      }

      .water {
        position: absolute;
        top: 50%;
        bottom: 2px;
        left: 2px;
        right: 2px;
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
      position: absolute;
      top: calc(100% - 66px);
      left: 50%;
      width: $bottleWidth;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.5);
      transform: translateX(-50%);
      border-radius: 50%;
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
