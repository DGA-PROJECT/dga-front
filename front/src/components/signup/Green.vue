<template>
  <div class="containerSignupGreen">
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="`imgBox boxFade z${image.zIndex} ${image.animation}`"
    >
      <img :class="['img', image.position]" :src="image.src" />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Green",

  setup() {
    const images = reactive([
      {
        src: "https://signupui.s3.ap-northeast-2.amazonaws.com/green/sky_obj.webp",
        zIndex: 3,
        animation: "slideDown",
      },
      {
        src: "https://signupui.s3.ap-northeast-2.amazonaws.com/green/grass_right.webp",
        zIndex: 3,
        animation: "slideLeft",
        position: "img_bot_right1",
      },
      {
        src: "https://signupui.s3.ap-northeast-2.amazonaws.com/green/grass_left.webp",
        zIndex: 3,
        animation: "slideRight",
        position: "img_bot_left1",
      },
      {
        src: "https://signupui.s3.ap-northeast-2.amazonaws.com/green/mountain_right.webp",
        zIndex: 2,
        animation: "expandUp",
        position: "img_bot_right2",
      },
      {
        src: "https://signupui.s3.ap-northeast-2.amazonaws.com/green/mountain_left.webp",
        zIndex: 2,
        animation: "expandUp",
        position: "img_bot_left2",
      },
      {
        src: "https://signupui.s3.ap-northeast-2.amazonaws.com/green/background.webp",
        zIndex: 1,
      },
    ]);

    return {
      images,
    };
  },
};
</script>

<style lang="scss">
.containerSignupGreen {
  display: flex;
  width: 100vw;
  height: 100vh;

  .boxFade {
    width: 100%;
    height: 100%;
  }

  .imgBox {
    position: fixed;
    top: 0;
  }

  .img {
    width: 100%;
  }

  .img_bot_left1 {
    position: fixed;
    left: -50px;
    bottom: -50px;
    animation: pulse infinite ease 2s;
    animation-delay: -1s;
  }

  .img_bot_left2 {
    position: fixed;
    left: -35px;
    bottom: -50px;
    animation: tossing infinite ease 2s;
    animation-delay: -1s;
  }

  .img_bot_right1 {
    position: fixed;
    right: -35px;
    bottom: -50px;
    animation: pulse infinite ease 2s;
    animation-delay: -2s;
  }

  .img_bot_right2 {
    position: fixed;
    right: -35px;
    bottom: -50px;
    animation: tossing infinite ease 2s;
    animation-delay: -2s;
  }

  .img_top {
    position: fixed;
    top: -30px;
    animation: floating infinite ease 2s;
  }

  .z1 {
    z-index: 1;
  }
  .z2 {
    z-index: 2;
  }
  .z3 {
    z-index: 3;
  }
  .z4 {
    z-index: 4;
  }
  .z5 {
    z-index: 5;
  }
}
</style>
