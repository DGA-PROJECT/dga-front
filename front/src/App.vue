<template>
  <div class="container">
    <router-view class="router"></router-view>

    <div class="forever">
      <button class="btn btn-primary" v-on:click="$router.push('/signup')">
        signup component
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  components: {},
  setup() {
    const data = reactive({
      test: "test data",
    });

    const axiosTest = () =>
      axios.get("/api/test").then((res) => {
        alert(res.data);
      });

    const axiosPostTest = () => {
      axios.post("/api/postest", { data: "data" }).then((res) => {
        alert(JSON.stringify(res.data));
      });
    };

    return {
      data,
      axiosTest,
      axiosPostTest,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
  padding: 0;
  .grass {
    width: 100%;
    height: 100%;
  }
}
</style>
