<template>
  <div class="containerSignupGreen">
    <div class="imgBox boxFade z2 slideDown">
      <img
        class="img img_top"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/zoo/sky_obj.webp"
      />
    </div>

    <div class="imgBox boxFade z3 slideUp">
      <img
        class="img"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/zoo/entrance.webp"
      />
    </div>

    <div class="imgBox boxFade z2 slideLeft">
      <img
        class="img img_bot_right1"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/zoo/animals_right.webp"
      />
    </div>

    <div class="imgBox boxFade z2 slideRight">
      <img
        class="img img_bot_left1"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/zoo/animals_left.webp"
      />
    </div>
    <div class="imgBox boxFade z4 expandUp">
      <img
        class="img img_bottom"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/zoo/animals_front.webp"
      />
    </div>

    <div class="imgBox boxFade z1">
      <img
        class="img img_bg"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/zoo/bg.webp"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Zoo",

  setup() {
    const data = reactive({});

    return {
      data,
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
  .img_bg {
    height: 100%;
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

  .img_bottom {
    position: fixed;
    animation: floating infinite ease 2s;
    animation-delay: -1s;
    height: 100%;
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
