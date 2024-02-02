<template>
  <div class="containerApp">
    <router-view :modalState="modalState" class="router"></router-view>

    <div class="forever">
      <button class="btn btn-primary" v-on:click="$router.push('/signup')">
        signup component
      </button>

      <button class="btn btn-primary" v-on:click="goToLoginOrSignup()">
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
    const state = reactive({
      test: "test data",
    });

    const modalState = reactive({
      alert: true,
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

    const goToLoginOrSignup = () => {
      window.location.href =
        "https://test-dom.auth.ap-northeast-2.amazoncognito.com/login?response_type=token&client_id=6crfr295su16kvf3uta0t29vi9&redirect_uri=http://localhost:8080/success";
    };

    return {
      state,
      modalState,
      axiosTest,
      axiosPostTest,
      goToLoginOrSignup,
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
  height: 100vh;
  padding: 0;
  .grass {
    width: 100%;
    height: 100%;
  }
  .alertMessage {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    z-index: 10;
    display: none;
  }
}
</style>
