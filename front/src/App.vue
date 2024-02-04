<template>
  <div class="containerApp">
    <router-view
      :modalState="modalState"
      :modalFunction="modalFunction"
      :style="style"
      class="router"
    ></router-view>
    <Loading v-if="state.isLoading" class="fadeInOutLoading" />

    <div class="forever">
      <button class="btn btn-primary" v-on:click="$router.push('/signup')">
        signup component
      </button>

      <button class="btn btn-primary" v-on:click="goToLoginOrSignup()">
        Login or Signup
      </button>

      <button
        class="btn btn-primary"
        v-on:click="stateFunction.loadingFunction()"
      >
        로딩 테스트
      </button>
    </div>
    <div class="alertMessage normal_bg fadeInOut" v-if="modalState.normal">
      <div class="content expandOpen normal">
        <img
          src="https://dgaui.s3.ap-northeast-2.amazonaws.com/alertmodal/normal.webp"
        />
        <p class="poor">{{ modalState.normalMessage }}</p>
      </div>
    </div>
    <div class="alertMessage warn_bg fadeInOut" v-if="modalState.warn">
      <div class="content expandOpen warn">
        <img
          src="https://dgaui.s3.ap-northeast-2.amazonaws.com/alertmodal/fail.webp"
        />
        <p class="poor">{{ modalState.warnMessage }}</p>
      </div>
    </div>
    <div class="alertMessage success_bg fadeInOut" v-if="modalState.success">
      <div class="content expandOpen success">
        <img
          src="https://dgaui.s3.ap-northeast-2.amazonaws.com/alertmodal/success.webp"
        />
        <p class="poor">{{ modalState.successMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import Loading from "./components/Loading.vue";

export default {
  components: { Loading },
  setup() {
    const state = reactive({
      isLoading: false,
    });

    const stateFunction = reactive({
      loadingFunction: () => {
        state.isLoading = true;
        setTimeout(() => {
          state.isLoading = false;
        }, 3000);
      },
    });

    const style = reactive({
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
          border: "#d8315b",
          box: "#ff6392",
          text: "#f9f9f9",
        },
        success: {
          bg: "rgba(255,255,255,0.5)",
          boxBg: "#f9f9f9",
          border: "#ffe45e",
          box: "#fff8dc",
          text: "#1e1b18",
        },
      },
      normalModal: {
        bg: "rgba(255,255,255,0.5)",
        box: "#f9f9f9",
        boxBg: "",
        text: "#1e1b18",
        btnText: "#f9f9f9",
        btn: "#0a2463",
        btnCancel: "#7fc8f8",
      },
    });

    const modalState = reactive({
      normal: false,
      normalMessage: "",
      warn: false,
      warnMessage: "",
      success: false,
      successMessage: "",
    });

    const modalFunction = reactive({
      normal: (content) => {
        modalState.normal = true;
        modalState.normalMessage = content;
        setTimeout(() => {
          modalState.normal = false;
          modalState.normalMessage = null;
        }, 1500);
      },
      warn: (content) => {
        modalState.warn = true;
        modalState.warnMessage = content;
        setTimeout(() => {
          modalState.warn = false;
          modalState.warnMessage = null;
        }, 1500);
      },
      success: (content) => {
        modalState.success = true;
        modalState.successMessage = content;
        setTimeout(() => {
          modalState.success = false;
          modalState.successMessage = null;
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
        "https://test-dom.auth.ap-northeast-2.amazoncognito.com/login?response_type=token&client_id=6crfr295su16kvf3uta0t29vi9&redirect_uri=http://localhost:8080/success";
    };

    return {
      state,
      stateFunction,
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

  .normal_bg {
    background-color: v-bind("style.alertModal.normal.bg");
  }
  .warn_bg {
    background-color: v-bind("style.alertModal.warn.bg");
  }
  .success_bg {
    background-color: v-bind("style.alertModal.success.bg");
  }
  .alertMessage {
    position: relative;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    z-index: 10;
    img {
      position: absolute;
      bottom: 100%;
    }

    .content {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 10px;
      p {
        margin: 0;
      }
    }
    .normal {
      border-top: 3px solid v-bind("style.alertModal.normal.border");
      border-bottom: 3px solid v-bind("style.alertModal.normal.border");
      background-color: v-bind("style.alertModal.normal.box");
      color: v-bind("style.alertModal.normal.text");
    }
    .warn {
      border-top: 3px solid v-bind("style.alertModal.warn.border");
      border-bottom: 3px solid v-bind("style.alertModal.warn.border");
      background-color: v-bind("style.alertModal.warn.box");
      color: v-bind("style.alertModal.warn.text");
    }
    .success {
      border-top: 3px solid v-bind("style.alertModal.success.border");
      border-bottom: 3px solid v-bind("style.alertModal.success.border");
      background-color: v-bind("style.alertModal.success.box");
      color: v-bind("style.alertModal.success.text");
    }
  }

  .fadeInOut {
    animation: fadeInOut 1.5s ease-in-out 1;
  }
  .fadeInOutLoading {
    animation: fadeInOutLoading 3s ease-in-out 1;
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

  @keyframes fadeInOutLoading {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
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
