<template>
  <div class="container">
    <nav class="navTop">
      <i class="fa-solid fa-right-from-bracket"></i>
      <i class="fa-solid fa-right-from-bracket"></i>
      <i class="fa-solid fa-right-from-bracket"></i>
      <i class="fa-solid fa-right-from-bracket"></i>
      <i class="fa-solid fa-right-from-bracket"></i>
      <i class="fa-solid fa-right-from-bracket"></i>
      <i class="fa-solid fa-right-from-bracket"></i>
      <i class="fa-solid fa-right-from-bracket"></i>
    </nav>

    <div class="bg">
      <img
        class="bgImg"
        src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/mainui/background1.jpg"
        alt=""
      />
      <div class="coverBg"></div>
    </div>

    <h1>main web</h1>
    <i class="fa-solid fa-right-from-bracket"></i>
    <i class="fa-solid fa-right-from-bracket"></i>
    <i class="fa-solid fa-right-from-bracket"></i>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Main",

  setup() {
    const data = reactive({});

    return {
      data,
    };
  },
};
</script>

<style lang="scss">
#app {
  width: 100vw;
}
body {
  margin: 0;
}
.container {
  .navTop {
    width: 100%;
    position: fixed;
    top: 0;
    height: 50px;
    display: flex;
    justify-content: center;
    background-color: red;
    i {
    }
  }
  .bg {
    .bgImg {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .coverBg {
      position: fixed;
      top: 0;
      width: 100%;
      height: 60vh;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: -1;
    }
  }
}
</style>
