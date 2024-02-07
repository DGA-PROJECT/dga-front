<template>
  <div class="container">
    <h1>main web</h1>
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
}
</style>
