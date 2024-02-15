<template>
  <div class="containerApp">
    <nav class="navTop">
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

    <div class="boxTop">
      <div class="highLight"></div>
    </div>

    <div class="boxContent">
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
    </div>
    <!-- alert모달들 끝 -->
    <div class="dev">
      <p>mode : {{ state.mode }}</p>
      <router-view
        :modalState="modalState"
        :modalFunction="modalFunction"
        :style="style"
        class="router"
      ></router-view>
      <Loading v-if="state.isLoading" class="fadeInOutLoading" />

      <div class="forever">
        하잉하잉 CICD테스트
        <button class="btn btn-primary" v-on:click="testUserDbCheck()">
          유저 db체크
        </button>
        <button class="btn btn-primary" v-on:click="$router.push('/signup')">
          signup component
        </button>

        <button class="btn btn-primary" v-on:click="goToLoginOrSignup()">
          Login or Signup
        </button>

        <button
          class="btn btn-primary"
          v-on:click="
            [
              stateFunction.loadingFunctionStart(),
              stateFunction.loadingFunctionEnd(),
            ]
          "
        >
          로딩 테스트
        </button>

        <button class="btn btn-danger" v-on:click="axiosPostTest()">
          백단 테스트
        </button>

        <button class="btn btn-warning" v-on:click="redirectTest()">
          리다이렉션 테스트
        </button>

        <div class="alertBtns">
          <button
            class="btn btn-primary"
            v-on:click="modalFunction.normal('노멀 모달이야')"
          >
            normal alert
          </button>
          <button
            class="btn btn-danger"
            v-on:click="modalFunction.warn('경고 모달이야')"
          >
            warn alert
          </button>
          <button
            class="btn btn-light"
            v-on:click="modalFunction.success('성공 모달이야')"
          >
            success alert
          </button>
        </div>
      </div>

      <!-- alert모달들 -->
      <div
        class="alertMessage normal_bg fadeInOutLoading"
        v-if="modalState.normal"
      >
        <div class="content expandOpen normal">
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/alertmodal/normal.webp"
          />
          <p class="poor">{{ modalState.normalMessage }}</p>
        </div>
      </div>
      <div class="alertMessage warn_bg fadeInOutLoading" v-if="modalState.warn">
        <div class="content expandOpen warn">
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/alertmodal/fail.webp"
          />
          <p class="poor">{{ modalState.warnMessage }}</p>
        </div>
      </div>
      <div
        class="alertMessage success_bg fadeInOutLoading"
        v-if="modalState.success"
      >
        <div class="content expandOpen success">
          <img
            class="fadeInOutLoading"
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/alertmodal/success.webp"
          />
          <p class="poor">{{ modalState.successMessage }}</p>
        </div>
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
      mode: process.env.NODE_ENV == "development" ? "dev" : "production",
      isLoading: false,
    });

    const stateFunction = reactive({
      loadingFunctionStart: () => {
        state.isLoading = true;
      },
      loadingFunctionEnd: () => {
        setTimeout(() => {
          state.isLoading = false;
        }, 2000);
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
      colors: {
        blue4: "#0a2463",
        blue3: "#3e92cc",
        blue2: "#5aa9e6",
        blue1: "#7fc8f8",
        red2: "#d8315b",
        red1: "#ff6392",
        yellow1: "#ffe45e",
        white2: "#fffaff",
        white1: "#f9f9f9",
        black1: "#1e1b18",
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
        }, 2000);
      },
      warn: (content) => {
        modalState.warn = true;
        modalState.warnMessage = content;
        setTimeout(() => {
          modalState.warn = false;
          modalState.warnMessage = null;
        }, 2000);
      },
      success: (content) => {
        modalState.success = true;
        modalState.successMessage = content;
        setTimeout(() => {
          modalState.success = false;
          modalState.successMessage = null;
        }, 2000);
      },
    });

    const axiosPostTest = () => {
      axios.post("/api/postest", { data: "data" }).then((res) => {
        alert(JSON.stringify(res.data));
      });
    };

    const goToLoginOrSignup = () => {
      // 개발 모드일 경우
      if (process.env.NODE_ENV == "development") {
        window.location.href =
          "https://test-dom.auth.ap-northeast-2.amazoncognito.com/login?response_type=token&client_id=6crfr295su16kvf3uta0t29vi9&redirect_uri=http://localhost:8080/success";
      } else {
        // 배포 모드일 경우
        window.location.href =
          "https://bam-dom.auth.ap-northeast-2.amazoncognito.com/login?response_type=token&client_id=1i3jgpcnaf4e29pbe1l723q3ij&redirect_uri=https://www.daddygo.vacations/success";
      }
    };

    const testUserDbCheck = () => {
      axios.get("/api/testget").then((res) => {
        alert(res.data);
      });
    };

    const redirectTest = () => {
      window.location.href = "https://www.daddygo.vacations/signup";
    };

    return {
      state,
      stateFunction,
      style,
      modalState,
      modalFunction,
      axiosPostTest,
      goToLoginOrSignup,
      testUserDbCheck,
      redirectTest,
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
  .bg {
    .bgImg {
      position: fixed;
      top: 0;
      left: -50vw;
      display: flex;
      justify-content: center;
      width: 200vw;
      z-index: -2;
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

  .navTop {
    width: 100%;
    position: fixed;
    top: 0;
    height: 30px;
    display: flex;
    justify-content: center;
    background-color: red;
    i {
    }
  }
  .boxTop {
    position: absolute;
    top: 300px;
    .highLight {
    }
  }
  .boxContent {
    .blank {
      width: 100px;
      height: 100px;
    }
  }

  .dev {
    .grass {
      width: 100%;
      height: 100%;
    }

    .forever {
      display: flex;
      flex-direction: column;
      button {
        margin: 10px;
      }
    }

    .alertBtns {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
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

    .content {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 10px;
      img {
        position: absolute;
        bottom: 100%;
      }
      p {
        margin: 0;
        text-align: center;
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
    animation: fadeInOutLoading 2s ease-in-out 1;
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

  .test {
    display: flex;
  }
}
</style>
