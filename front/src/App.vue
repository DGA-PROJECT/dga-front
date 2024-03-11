<template>
  <div class="containerApp">
    <nav class="navTop">
      <p>mode : {{ state.mode }}</p>

      <div class="navBox">
        <i class="fa-solid fa-user"></i>
        <p v-if="state.userInfo.nickname">{{ state.userInfo?.nickname }}</p>
        <p v-if="!state.userInfo.nickname" v-on:click="goToLoginOrSignup()">
          로그인/회원가입
        </p>
        <button
          v-if="state.userInfo.nickname"
          class="btn btn-secondary logoutBtn"
          v-on:click="clickLogOut()"
        >
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
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
        v-on:click="redirectToBoards()"
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
      <!-- <div
        :class="state.nav == 'myplan' ? 'active' : 'list'"
        v-on:click="stateFunction.changeRouter('myplan')"
      >
        <i class="fa-solid fa-cart-shopping"></i>
        <p v-if="state.nav == 'myplan'">myplan</p>
      </div> -->
    </nav>

    <Loading v-if="state.isLoading" class="fadeInOutLoading" />
    <div class="copyright">
      <h5>디자인 출처</h5>
      <div class="boxOut">
        <div class="box">
          <p>애얼굴 :</p>
          <a
            href="https://www.freepik.com/free-vector/flat-emoticons-cute-girl_1011883.htm#page=2&query=kide%20emotion&position=35&from_view=search&track=ais&uuid=b582ada2-0930-4c99-92a5-ac2bfb97e327"
            >Freepik</a
          >
        </div>

        <div class="box">
          <p>할아버지 :</p>
          <a
            href="https://www.freepik.com/free-vector/flat-dia-de-los-abuelos-illustration_13914243.htm#page=8&query=grandfather&position=46&from_view=search&track=sph&uuid=4ced87a1-5484-4450-b1be-27a355954024"
            >Freepik</a
          >
        </div>

        <div class="box">
          <p>아빠+애들 :</p>
          <a
            href="https://www.freepik.com/free-vector/happy-flat-design-father-s-day-family_7709910.htm#query=father&position=0&from_view=search&track=sph&uuid=7a11906a-a809-4aa4-8fd2-623d8126532b"
            >Freepik</a
          >
        </div>

        <div class="box">
          <p>메달사진 :</p>
          <a
            href="https://kr.freepik.com/free-vector/collection-of-top-10-badges_11520190.htm#page=5&query=ranking&position=7&from_view=search&track=ais&uuid=4d05c637-6642-4949-be32-61b9ec501ed2"
            >Freepik</a
          >
        </div>

        <div class="box">
          <p>한반도 :</p>
          <a
            href="https://kr.freepik.com/free-vector/hand-drawn-south-korea-map-illustration_30121023.htm#query=korea%20map&position=3[%E2%80%A6]1-d7b8-4ea4-858a-1c164e88be71"
            >Freepik</a
          >
        </div>

        <div class="box">
          <p>왕관 타이틀 :</p>
          <a
            href="https://kr.freepik.com/free-vector/royal-game-buttons-animation-set_45244416.htm#query=rank%20title&position=0&from_view=search&track=ais&uuid=6c87cbd4-8bdb-4b43-825d-ac4ea5db2383"
            >작가 upklyak onFreepik</a
          >
        </div>
        <div class="box">
          <p>한식 :</p>
          <a
            href="https://www.freepik.com/free-vector/hand-drawn-flat-design-korean-food-illustration_23441691.htm#fromView=search&page=2&position=41&uuid=7d7dab7b-c2e9-4cfb-80f7-10edada39ead"
            >Freepik</a
          >
        </div>
        <div class="box">
          <p>랜드마크 :</p>
          <a
            href="https://www.freepik.com/free-vector/south-korea-tourism-horizontal-composition-with-doodle-style-pictures-traditional-items-cultural-sights-text-illustration_7252487.htm#fromView=search&page=1&position=2&uuid=2d51a138-fa20-4fbf-b36b-2a1f14a7449c"
            >Image by macrovector on Freepik</a
          >
        </div>
      </div>
    </div>
    <!-- 
    <button class="btn btn-primary" v-on:click="testGet()">
      auth 백단 GET 테스트
    </button>

    <button class="btn btn-danger" v-on:click="testGetWithoutAuth()">
      auth 백단 GET 테스트 (authorization 없음)
    </button>
    <div class="dev">
      <div class="forever">
        <button class="btn btn-primary" v-on:click="testGet()">
          search 백단 GET 테스트
        </button>

        <button class="btn btn-success" v-on:click="envTest()">
          login 백단 환경변수 테스트
        </button>

        <button class="btn btn-success" v-on:click="testLambda()">
          람다 테스트
        </button>

        <button class="btn btn-danger" v-on:click="axiosPostTest()">
          login 백단 POST 테스트
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

        <button class="btn btn-success" v-on:click="envTest()">
          login 백단 환경변수 테스트
        </button>

        <button class="btn btn-success" v-on:click="dbTest()">
          login db접근 테스트
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
    </div> -->

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

    <div class="blank"></div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import Loading from "./components/Loading.vue";
import { useRouter } from "vue-router";

const extractPath = () => {
  const currentPathname = window.location.pathname;
  const matchResult = currentPathname.match(/\/([^/]+)/);
  const routePath = matchResult ? matchResult[1] : "home";
  return routePath;
};

export default {
  components: { Loading },
  setup() {
    const router = useRouter();

    const state = reactive({
      mode: process.env.NODE_ENV == "development" ? "dev" : "production",
      isLoading: false,
      nav: extractPath(),
      userInfo: {},
      logOutUrl:
        process.env.NODE_ENV == "development"
          ? "https://test-dom.auth.ap-northeast-2.amazoncognito.com/logout?client_id=6crfr295su16kvf3uta0t29vi9&logout_uri=http://localhost:8080/logout"
          : "https://bam-dom.auth.ap-northeast-2.amazoncognito.com/logout?client_id=1i3jgpcnaf4e29pbe1l723q3ij&logout_uri=https://www.daddygo.vacations/logout",
    });

    const removeUserInfo = () => {
      localStorage.removeItem("userId");
      localStorage.removeItem("idToken");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("email");
      localStorage.removeItem("nickname");
      state.userInfo = {};
    };

    console.log(state.logOutUrl);

    const stateFunction = reactive({
      checkLogin: () => {
        setTimeout(() => {
          try {
            const idToken = localStorage.getItem("idToken");
            const accessToken = localStorage.getItem("accessToken");
            const email = localStorage.getItem("email");
            const nickname = localStorage.getItem("nickname");
            const userId = localStorage.getItem("userId");
            if (idToken && accessToken && email && nickname && userId) {
              const userInfo = {
                idToken,
                accessToken,
                email,
                nickname,
                userId,
              };
              console.log(userInfo);

              axios.post("/api/users/", userInfo).then((res) => {
                // confirm이 false이면 로컬스토리지 다 비우기,
                // confirm이 true이면 state.userInfo를 바꾸기 + 로컬스토리지 세팅
                const answer = JSON.parse(res.data);

                if (answer.confirm) {
                  // confirm이 true이면 state.userInfo를 바꾸기 + 로컬스토리지 세팅
                  localStorage.setItem("userId", answer.userInfo.userId);
                  localStorage.setItem("nickname", answer.userInfo.nickname);
                  localStorage.setItem("email", answer.userInfo.email);
                  state.userInfo.userId = answer.userInfo.userId;
                  state.userInfo.email = answer.userInfo.email;
                  state.userInfo.nickname = answer.userInfo.nickname;
                } else {
                  removeUserInfo();
                }
              });
            } else {
              removeUserInfo();
              console.log("not login");
            }
          } catch (err) {
            console.error(err.message);
          }
        }, 100);
      },
      loadingFunctionStart: () => {
        state.isLoading = true;
      },
      loadingFunctionEnd: (time) => {
        setTimeout(() => {
          state.isLoading = false;
        }, time);
      },
      changeRouter: (routePath) => {
        state.nav = routePath;
        if (routePath == "home") {
          router.push("/");
        } else {
          router.push("/" + routePath);
          window.scrollTo({
            top: 0,
            behavior: "smooth", // 부드러운 스크롤 적용 (선택적)
          });
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
      loginSetting: (nickname) => {
        state.userInfo.nickname = nickname;
      },
      logoutSetting: () => {
        state.userInfo.nickname = null;
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
        return type == "KID"
          ? "https://dgaui.s3.ap-northeast-2.amazonaws.com/emoticon/KID.webp"
          : "https://dgaui.s3.ap-northeast-2.amazonaws.com/emoticon/ELDER.webp";
      },
      goToPost: (postId) => {
        state.isLoading = true;
        setTimeout(() => {
          state.isLoading = false;

          window.location.href = `https://www.daddygo.vacations/api/boards/${postId}`;
        }, 2000);
      },
      removeUserInfo: () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("idToken");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("email");
        localStorage.removeItem("nickname");
        state.userInfo = {};
      },
    });

    stateFunction.checkLogin();

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
        }, 2500);
      },
      warn: (content) => {
        modalState.warn = true;
        modalState.warnMessage = content;
        setTimeout(() => {
          modalState.warn = false;
          modalState.warnMessage = null;
        }, 2500);
      },
      success: (content) => {
        modalState.success = true;
        modalState.successMessage = content;
        setTimeout(() => {
          modalState.success = false;
          modalState.successMessage = null;
        }, 2500);
      },
    });

    //test

    const axiosPostTest = () => {
      axios.post("/api/users/postest", { data: "data" }).then((res) => {
        alert(JSON.stringify(res.data));
      });
    };

    const testLambda = () => {
      axios
        .get(
          "https://b1mnag2yn8.execute-api.ap-northeast-2.amazonaws.com/default/muzzifuc"
        )
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => {
          console.error(err);
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

    const redirectToBoards = () => {
      window.location.href = "https://www.daddygo.vacations/api/boards/page";
    };

    const clickLogOut = () => {
      window.location.href = state.logOutUrl;
    };

    const testGet = () => {
      axios
        .get("/api/users/testget", {
          headers: { Authorization: localStorage.getItem("idToken") },
        })
        .then((res) => {
          alert(res.data);
        });
    };

    const testGetWithoutAuth = () => {
      axios.get("/api/users/testget").then((res) => {
        alert(res.data);
      });
    };

    const redirectTest = () => {
      window.location.href = "https://www.daddygo.vacations/signup";
    };

    const envTest = () => {
      axios.get("/api/searches/envtest").then((res) => {
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
      redirectToBoards,
      testGet,
      redirectTest,
      envTest,
      dbTest,
      testLambda,
      clickLogOut,
      testGetWithoutAuth,
    };
  },
  watch: {
    $route(to, form) {
      if (to.path !== form.path) {
        const path = this.$router.currentRoute.value.path.split("/")[1];
        if (path == "") {
          this.state.nav = "home";
        } else {
          this.state.nav = this.$router.currentRoute.value.path.split("/")[1];
        }
      }
    },
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
  padding: 0;

  .blank {
    width: 100px;
    height: 100px;
  }

  .navTop {
    width: 100vw;
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
      border-radius: 25px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      p {
        margin: 0;
      }
      i {
        margin-right: 15px;
      }

      .logoutBtn {
        display: flex;
        justify-content: center;
        width: 30px;
        padding: 5px;
        margin-left: 5px;
        i {
          padding: 0;
          margin: 0;
        }
      }
    }
  }

  .navBot {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: v-bind("style.colors.blue2");
    border-radius: 40px;
    padding: 5px;
    z-index: 3;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.3);

    .list {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
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

  .copyright {
    width: 100%;
    margin-top: 30px;
    h5 {
      display: flex;
      justify-content: center;
    }

    .boxOut {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .box {
        display: flex;
        border-radius: 5px;
        p {
          color: grey;
          margin: 0;
          margin-right: 10px;
        }
      }
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
