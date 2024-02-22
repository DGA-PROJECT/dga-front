<template>
  <div class="containerApp">
    <nav class="navTop">
      <p>mode : {{ state.mode }}</p>

      <div class="navBox">
        <i class="fa-solid fa-user"></i>
        <p v-if="state.userInfo?.nickname">{{ state.userInfo?.nickname }}</p>
        <p v-if="!state.userInfo?.nickname">로그인/회원가입</p>
      </div>
    </nav>

    <!-- <div class="list">
      <i class="fa-solid fa-plus"></i>
      <p>write</p>
    </div> -->

    <nav class="navBot">
      <div
        :class="state.nav == 'home' ? 'active' : 'list'"
        v-on:click="stateFunction.changeRouter('home')"
      >
        <i class="fa-solid fa-house"></i>
        <p v-if="state.nav == 'home'">home</p>
      </div>
      <div
        :class="state.nav == 'board' ? 'active' : 'list'"
        v-on:click="stateFunction.changeRouter('board')"
      >
        <i class="fa-solid fa-bars"></i>
        <p v-if="state.nav == 'board'">board</p>
      </div>

      <div
        :class="state.nav == 'search' ? 'active' : 'list'"
        v-on:click="stateFunction.changeRouter('search')"
      >
        <i class="fa-solid fa-magnifying-glass-plus"></i>
        <p v-if="state.nav == 'search'">search</p>
      </div>
      <div
        :class="state.nav == 'myplan' ? 'active' : 'list'"
        v-on:click="stateFunction.changeRouter('myplan')"
      >
        <i class="fa-solid fa-cart-shopping"></i>
        <p v-if="state.nav == 'myplan'">myplan</p>
      </div>
    </nav>

    <router-view
      :modalState="modalState"
      :modalFunction="modalFunction"
      :stateFunction="stateFunction"
      :state="state"
      :style="style"
      class="router"
    ></router-view>

    <Loading v-if="state.isLoading" class="fadeInOutLoading" />

    <!-- alert모달들 끝 -->
    <div class="dev">
      <div class="forever">
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
        하잉하잉 CICD테스트
        <button class="btn btn-primary" v-on:click="testGet()">
          백단 GET 테스트
        </button>
        <button class="btn btn-danger" v-on:click="axiosPostTest()">
          백단 POST 테스트
        </button>

        <button class="btn btn-danger" v-on:click="axiosSamplePostTest()">
          백단 POST 테스트 full url
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

        <button class="btn btn-warning" v-on:click="redirectTest()">
          리다이렉션 테스트
        </button>

        <button class="btn btn-success" v-on:click="envTest()">
          백단 환경변수 테스트
        </button>

        <button class="btn btn-success" v-on:click="dbTest()">
          db접근 테스트
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
    </div>

    <!-- alert 모달들 -->
    <div
      class="alertMessage normal_bg fadeInOutLoading"
      v-if="modalState.normal"
    >
      <div class="content normal expandOpen">
        <img
          src="https://dgaui.s3.ap-northeast-2.amazonaws.com/alertmodal/normal.webp"
        />
        <p class="poor">{{ modalState.normalMessage }}</p>
      </div>
    </div>
    <div class="alertMessage warn_bg fadeInOutLoading" v-if="modalState.warn">
      <div class="content warn expandOpen">
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
      <div class="content success expandOpen">
        <img
          class="fadeInOutLoading"
          src="https://dgaui.s3.ap-northeast-2.amazonaws.com/alertmodal/success.webp"
        />
        <p class="poor">{{ modalState.successMessage }}</p>
      </div>
    </div>
    <!-- alert 모달들 -->

    <div class="blank"></div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import Loading from "./components/Loading.vue";
import { useRouter } from "vue-router";

export default {
  components: { Loading },
  setup() {
    const router = useRouter();
    const state = reactive({
      mode: process.env.NODE_ENV == "development" ? "dev" : "production",
      isLoading: false,
      nav: "home",
      userInfo: {},
    });

    console.log(process.env.NODE_ENV);
    const stateFunction = reactive({
      loadingFunctionStart: () => {
        state.isLoading = true;
      },
      loadingFunctionEnd: () => {
        setTimeout(() => {
          state.isLoading = false;
        }, 2000);
      },
      changeRouter: (routePath) => {
        state.nav = routePath;
        if (routePath == "home") {
          router.push("/");
        } else {
          router.push("/" + routePath);
        }
      },
      emitUserInfo: (result) => {
        state.userInfo.nickname = result.nickname;
      },
      truncateText: (text, maxLength) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + "...";
        }
        return text;
      },
      translateArea: (text) => {
        switch (text.toLowerCase()) {
          case "seoul":
            return "서울";
          case "chungcheong":
            return "충청도";
          case "kangwon":
            return "강원도";
          case "gyeonggi":
            return "경기도";
          case "jeollanam":
            return "전라남도";
          case "jeollabuk":
            return "전라북도";
          case "gyeongsangbuk":
            return "경상북도";
          case "gyeongsangnam":
            return "경상남도";
          case "jeju":
            return "제주도";

          default:
            return text;
        }
      },
      imgLinkKidOrElder: (type) => {
        return type == "kid"
          ? "https://dgaui.s3.ap-northeast-2.amazonaws.com/emoticon/kid.webp"
          : "https://dgaui.s3.ap-northeast-2.amazonaws.com/emoticon/elder.webp";
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
        lightYellow: "#fff7d4",
        lightBlue: "#d2efff",
        lightRed: "#ffd2e1",
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
        }, 3000);
      },
      warn: (content) => {
        modalState.warn = true;
        modalState.warnMessage = content;
        setTimeout(() => {
          modalState.warn = false;
          modalState.warnMessage = null;
        }, 3000);
      },
      success: (content) => {
        modalState.success = true;
        modalState.successMessage = content;
        setTimeout(() => {
          modalState.success = false;
          modalState.successMessage = null;
        }, 3000);
      },
    });

    //test

    const axiosPostTest = () => {
      axios.post("/api/users/postest", { data: "data" }).then((res) => {
        alert(JSON.stringify(res.data));
      });
    };

    const axiosSamplePostTest = () => {};

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

    const testGet = () => {
      axios.get("/api/users/testget").then((res) => {
        alert(res.data);
      });
    };

    const redirectTest = () => {
      window.location.href = "https://www.daddygo.vacations/signup";
    };

    const envTest = () => {
      axios.get("/api/users/envtest").then((res) => {
        alert(res.data);
      });
    };

    const dbTest = () => {
      axios.get("/api/users/dbtest").then((res) => {
        alert(res.data);
      });
    };

    return {
      state,
      stateFunction,
      style,
      modalState,
      modalFunction,
      axiosPostTest,
      goToLoginOrSignup,
      testGet,
      redirectTest,
      axiosSamplePostTest,
      envTest,
      dbTest,
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

.container {
  padding: 0;
}

.containerApp {
  height: 100vh;
  padding: 0;

  .blank {
    width: 100px;
    height: 100px;
  }

  .navTop {
    width: 100%;
    position: fixed;
    top: 0;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    z-index: 1;
    color: white;
    border-radius: 25px;

    .navBox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      border-radius: 25px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      p {
        margin: 0;
      }
      i {
        margin-right: 15px;
      }
    }
  }

  .navBot {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: v-bind("style.colors.blue2");
    border-radius: 40px;
    padding: 5px;
    z-index: 1;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.3);

    .list {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90px;
      color: v-bind("style.colors.white1");
      font-size: 1.5em;
    }
    @keyframes active_anime {
      0% {
        width: 25%;
        background: auto;
        color: v-bind("style.colors.white1");
        font-size: 1.5em;
      }
      100% {
        background-color: v-bind("style.colors.white1");
        color: v-bind("style.colors.blue4");
        width: 50%;
        border-radius: 40px;
        height: 70px;
        font-size: 2em;
      }
    }

    .active {
      display: flex;
      justify-content: center;
      align-items: center;
      animation-name: active_anime; /* 애니메이션 이름 설정 */
      animation: active_anime 0.5s forwards; /* 애니메이션 적용 및 유지 */
      animation-duration: 0.5s; /* 애니메이션 지속 시간 설정 */
      background-color: v-bind("style.colors.white1");
      width: 50%;
      border-radius: 40px;
      height: 70px;
      font-size: 2em;
      border: v-bind("style.colors.blue3") 3px solid;

      i {
        margin-right: 10px;
      }
      p {
        margin: 0;
      }
    }
  }

  .dev {
    div {
      padding: 0;
    }
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
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    z-index: 10;

    .content {
      position: relative;

      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
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

  .test {
    display: flex;
  }
}
</style>
