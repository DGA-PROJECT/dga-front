<template>
  <div class="container">
    <img
      src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/onlymb.jpg"
      alt=""
    />
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Test",
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
}
</style>
