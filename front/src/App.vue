<template>
  <div class="containerApp">
    <router-view class="router"></router-view>

    <div class="forever">
      <button class="btn btn-primary" v-on:click="$router.push('/signup')">
        signup component
      </button>

      <button class="btn btn-primary" v-on:click="loginOrSignup()">
        Login or Signup
      </button>
    </div>
    <div class="alertMessage">하잉하잉</div>
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

    const loginOrSignup = () => {
      window.location.href =
        "https://test-dom.auth.ap-northeast-2.amazoncognito.com/login?response_type=token&client_id=6crfr295su16kvf3uta0t29vi9&redirect_uri=http://localhost:8080/success";
    };

    return {
      data,
      axiosTest,
      axiosPostTest,
      loginOrSignup,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.containerApp {
  z-index: 20;
  height: 100vh;
  padding: 0;
  .grass {
    width: 100%;
    height: 100%;
  }
  .alertMessage {
    z-index: 30;
    background-color: red;
  }
}
</style>
