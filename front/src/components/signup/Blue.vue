<template>
  <div class="containerSignupGreen">
    <div class="imgBox boxFade z3 slideUp">
      <img
        class="img wv1"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/blue/firstwv.webp"
      />
    </div>

    <div class="imgBox boxFade z3 slideUp">
      <img
        class="img wv2"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/blue/secondwv.webp"
      />
    </div>

    <div class="imgBox boxFade z3 slideUp">
      <img
        class="img wv3"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/blue/thirdwv.webp"
      />
    </div>

    <div class="imgBox boxFade z2 slideLeft">
      <img
        class="img img_top_right1"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/blue/topRight.webp"
      />
    </div>

    <div class="imgBox boxFade z2 slideRight">
      <img
        class="img img_top_left1"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/blue/topLeft.webp"
      />
    </div>

    <div class="imgBox boxFade z1">
      <img
        class="img img_bg"
        src="https://signupui.s3.ap-northeast-2.amazonaws.com/blue/bg.webp"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Blue",

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

  .img_top_left1 {
    position: fixed;
    top: -30px;
    left: -50px;
    // animation: pulse infinite ease 2s;
    animation-delay: -1s;
  }

  .img_top_right1 {
    position: fixed;
    right: -35px;
    top: -30px;
    // animation: pulse infinite ease 2s;
    animation-delay: -2s;
  }

  .img_bottom {
    position: fixed;
    animation: floating infinite ease 2s;
    animation-delay: -1s;
    height: 100%;
  }

  .wv1 {
    position: fixed;
    top: -30;
    animation: floating infinite ease 2s;
  }

  .wv2 {
    position: fixed;
    top: 0px;
    animation: floating infinite ease 2s;
    animation-delay: -1.5s;
  }

  .wv3 {
    position: fixed;
    top: 0px;
    animation: floating infinite ease 2s;
    animation-delay: -2.5s;
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
