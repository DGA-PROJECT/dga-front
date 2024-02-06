<template>
  <div class="containerApp">
    <router-view
      :modalState="modalState"
      :modalFunction="modalFunction"
      :style="style"
      class="router"
    ></router-view>

    <div class="forever">
      <button class="btn btn-primary" v-on:click="$router.push('/signup')">
        signup component
      </button>

      <button class="btn btn-primary" v-on:click="goToLoginOrSignup()">
        Login or Signup
      </button>
    </div>
    <div class="alertMessage fadeInOut" v-if="modalState.alert">
      <div class="content expandOpen">
        <p class="poor">{{ modalState.alertMessage }}</p>
      </div>
    </div>
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

    const style = reactive({
      test: "rgba(255,255,255,0.5)",
      alertModal: {
        normal: {
          bg: "rgba(255,255,255,0.5)",
          boxBg: "#f9f9f9",
          border: "#0a2463",
          box: "#7fc8f8",
          text: "#1e1b18",
        },
        warn: {
          bg: "rgba(0,0,0,0.5)",
          boxBg: "#f9f9f9",
          box: "#d8315b",
          text: "#1e1b18",
        },
      },
      normal: {
        background: "rgba(255,255,255,0.5)",
        box: "#f9f9f9",
        boxBg: "",
        text: "#1e1b18",
        btn: "#0a2463",
        btnCancel: "#7fc8f8",
      },
    });

    const modalState = reactive({
      alert: false,
      alertMessage: "",
    });

    const modalFunction = reactive({
      alert: (content) => {
        modalState.alert = true;
        modalState.alertMessage = content;
        setTimeout(() => {
          modalState.alert = false;
          modalState.alertMessage = null;
        }, 1500);
      },
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
        "https://bamdom-dom.auth.ap-northeast-2.amazoncognito.com/login?response_type=token&client_id=1i3jgpcnaf4e29pbe1l723q3ij&redirect_uri=https://test.brokennose.shop/success";
    };

    return {
      state,
      style,
      modalState,
      modalFunction,
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
  font-family: "Nanum Gothic", sans-serif;
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
    background-color: v-bind("style.alertModal.normal.bg");
    .content {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: v-bind("style.alertModal.normal.boxBg");
      padding: 20px;
      border-radius: 10px;
      border-top: 3px solid v-bind("style.alertModal.normal.border");
      border-bottom: 3px solid v-bind("style.alertModal.normal.border");
      p {
        margin: 0;
        color: v-bind("style.alertModal.normal.text");
      }
      // animation: bounce 1 ease 1s;
    }
  }

  .fadeInOut {
    animation: fadeInOut 1.5s ease-in-out 1;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .poor {
    font-family: "Poor Story", system-ui;
  }
}
</style>
