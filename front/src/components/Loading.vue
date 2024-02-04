<template>
  <div class="containerLoading">
    <div class="logo tossing">
      <img
        class="father slideDown"
        src="https://dgaui.s3.ap-northeast-2.amazonaws.com/loading/father.webp"
      />
      <img
        class="oldandyoung slideExpandUp"
        src="https://dgaui.s3.ap-northeast-2.amazonaws.com/loading/oldandyoung.webp"
      />
      <img
        class="again bounce"
        src="https://dgaui.s3.ap-northeast-2.amazonaws.com/loading/again.webp"
      />

      <img
        class="text slideLeft"
        src="https://dgaui.s3.ap-northeast-2.amazonaws.com/loading/text.webp"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Loading",
  components: {},
  props: {
    modalFunction: Object,
    style: Object,
  },

  setup(props) {
    props;
    const data = reactive({});

    return {
      data,
    };
  },
};
</script>

<style lang="scss">
.containerLoading {
  margin: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: white;

  .logo {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: absolute;
    }
    .father {
      z-index: 2;
    }
    .oldandyoung {
      z-index: 1;
    }
    .text {
      z-index: 3;
    }
    .again {
      z-index: 4;
    }
  }
}
</style>
