<template>
  <div class="containerSignup">
    <Green v-if="stateSignup.stageBg == 'nickname'" />
    <Zoo v-if="stateSignup.stageBg == 'birthdate'" />
    <blue v-if="stateSignup.stageBg == 'confirm'" />

    <!-- 로그인 UI -->
    <!-- 닉네임 -->
    <div class="signupModal fadeInModal" v-if="stateSignup.stage == 'nickname'">
      <div class="content">
        <div class="character">
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/emoji-daughter/normal.webp"
          />
          <div class="talk">
            <p class="poor">닉네임을 정해주세요!</p>
          </div>
        </div>
        <div class="contentBox">
          <div class="input-group input-group-lg">
            <span class="input-group-text noto" id="inputGroup-sizing-lg"
              >닉네임</span
            >
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              v-model="chosenInfo.nickname"
            />
          </div>
          <div class="detail poor">
            <p>한글 숫자만 가능해요!</p>
            <p>닉네임은 3자~8자 범위로 정해주세요.</p>
          </div>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-light next"
            v-on:click="checkNickname()"
          >
            Next
          </button>
          <button
            type="button"
            class="btn btn-light cancel"
            v-on:click="$router.push('/')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <!-- 생일 -->
    <div
      class="signupModal fadeInModal"
      v-if="stateSignup.stage == 'birthdate'"
    >
      <div class="content">
        <div class="character">
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/emoji-daughter/normal.webp"
          />
          <div class="talk">
            <p class="poor">{{ chosenInfo.nickname }}님!</p>

            <p class="poor">생일이 언제신가요?</p>
          </div>
        </div>
        <div class="contentBox">
          <div class="datePicker poor">
            <select
              class="form-select form-select-lg year"
              v-model="chosenInfo.birthdate.year"
              size="5"
            >
              <option selected class="optionTitle">년</option>
              <option
                v-for="year in dateOptions.year"
                :key="year"
                :value="year"
              >
                {{ year }}년
              </option>
            </select>
            <select
              class="form-select form-select-lg month"
              aria-label="Large select example"
              v-model="chosenInfo.birthdate.month"
              size="5"
            >
              <option selected class="optionTitle">월</option>
              <option
                v-for="month in dateOptions.month"
                :key="month"
                :value="month"
              >
                {{ month }}월
              </option>
            </select>
            <select
              class="form-select form-select-lg date"
              aria-label="Large select example"
              v-model="chosenInfo.birthdate.date"
              size="5"
            >
              <option selected class="optionTitle">일</option>
              <option
                v-for="date in dateOptions.date"
                :key="date"
                :value="date"
              >
                {{ date }}일
              </option>
            </select>
          </div>
          <div class="detail poor">
            <p
              v-if="
                chosenInfo.birthdate.year !== '년' &&
                chosenInfo.birthdate.month !== '월' &&
                chosenInfo.birthdate.date !== '일'
              "
            >
              {{
                `${chosenInfo.birthdate.year}년 - ${chosenInfo.birthdate.month}월 - ${chosenInfo.birthdate.date}일`
              }}
            </p>
            <p v-if="chosenInfo.birthdate.year !== '년'">
              당신은 {{ currentYear - chosenInfo.birthdate.year }}살 이시군요!
            </p>
          </div>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-light pre"
            v-on:click="changeStage('nicknamePre')"
          >
            Pre
          </button>
          <button
            type="button"
            class="btn btn-light next"
            v-on:click="checkBirthdate()"
          >
            Next
          </button>
          <button
            type="button"
            class="btn btn-light cancel"
            v-on:click="$router.push('/')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- 컨펌 -->
    <div class="signupModal fadeInModal" v-if="stateSignup.stage == 'confirm'">
      <div class="content">
        <div class="character">
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/emoji-daughter/normal.webp"
          />
          <div class="talk">
            <p class="poor">입력하신 정보가 맞나요?</p>
          </div>
        </div>
        <div class="contentBox">
          <div class="ConfirmContent poor">
            <h5>닉네임은 '{{ chosenInfo.nickname }}'입니다.</h5>
            <h5>
              저는 '{{
                `${chosenInfo.birthdate.year}년 - ${chosenInfo.birthdate.month}월 - ${chosenInfo.birthdate.date}일`
              }}'에 태어났어요.
            </h5>
          </div>

          <div class="detail poor">
            <p>해당 내용이 맞다면 confirm버튼을 눌러 확인해주세요.</p>
          </div>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-light pre"
            v-on:click="changeStage('birthdate')"
          >
            Pre
          </button>
          <button
            type="button"
            class="btn btn-light next"
            v-on:click="signUp()"
          >
            Confirm
          </button>
          <button
            type="button"
            class="btn btn-light cancel"
            v-on:click="$router.push('/')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <!-- 컨펌 끝 -->
    <!-- 로그인 UI -->

    <div class="source">
      <p>디자인 출처</p>
      <a
        href="https://kr.freepik.com/free-vector/hand-drawn-spring-landscape_12239753.htm#query=forest&position=0&from_view=search&track=sph&uuid=9308e5cf-0e60-4775-8bf4-ec5a22d49e32"
        >Freepik</a
      >
      <a
        href="https://kr.freepik.com/free-vector/zoo-or-petting-zoo-cartoon-design-open-zoo-wild-animals-and-visitors_2238486.htm#query=zoo&position=5&from_view=search&track=sph&uuid=67b7dfe4-5d76-4a9b-a9a1-3624a02999a5"
        >작가 vectorpouch</a
      >
      <a
        href="https://kr.freepik.com/free-vector/flat-world-animal-day-background_30591432.htm#query=animals&position=22&from_view=search&track=sph&uuid=ce4e6f9a-4759-4753-b823-220d6af4bca6"
        >Freepik</a
      >

      <a
        href="https://kr.freepik.com/free-vector/beach-from-the-top-in-paper-style_2499260.htm#query=beach&position=0&from_view=search&track=sph&uuid=67d445a0-92e7-4b84-b658-ba994e7b182c"
        >Freepik</a
      >
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import router from "../router";

import Green from "./signup/Green.vue";
import Zoo from "./signup/Zoo.vue";
import Blue from "./signup/Blue.vue";

export default {
  name: "Signup",
  components: { Green, Zoo, Blue },
  props: {
    modalFunction: Object,
    style: Object,
  },

  setup(props) {
    const stateSignup = reactive({
      stage: null,
      stageBg: "nickname",
    });

    const chosenInfo = reactive({
      nickname: null,
      birthdate: {
        year: "년",
        month: "월",
        date: "일",
      },
    });

    //date
    const currentYear = new Date().getFullYear();
    const dateOptions = reactive({
      year: Array.from(
        { length: currentYear - 1930 + 1 },
        (_, index) => currentYear - index
      ),
      month: Array.from({ length: 12 }, (_, index) => index + 1),
      date: Array.from({ length: 31 }, (_, index) => index + 1),
    });

    //date

    const changeStage = (stageName) => {
      if (stageName == "nickname") {
        setTimeout(() => {
          stateSignup.stage = stageName;
        }, 1000);
      } else if (stageName == "nicknamePre") {
        stateSignup.stage = null;
        stateSignup.stageBg = "nickname";
        setTimeout(() => {
          stateSignup.stage = "nickname";
        }, 1000);
      } else {
        stateSignup.stageBg = stageName;
        stateSignup.stage = null;
        setTimeout(() => {
          stateSignup.stage = stageName;
        }, 1000);
      }
    };

    changeStage("nickname");

    const checkNickname = () => {
      const idToken = localStorage.getItem("idToken");
      const accessToken = localStorage.getItem("accessToken");
      const regex = /^[가-힣0-9]{3,8}$/;
      if (!regex.test(chosenInfo.nickname)) {
        props.modalFunction.warn("닉네임 형식에 맞게 적어주세요");
      } else {
        //db에 있는 닉네임인지 체크후,
        axios
          .post(
            "/api/nickname",
            { accessToken: accessToken, nickname: chosenInfo.nickname },
            {
              headers: { Authorization: idToken },
            },
            { withCredentials: true }
          )
          .then((res) => {
            const response = JSON.parse(res.data);
            if (response.isExist) {
              //있다면 다시 정하게 하구,
              props.modalFunction.warn(
                `${response.nickname}은 이미 사용중인 닉네임이에요ㅠ`
              );
            } else {
              //없으면 다음 스테이지.
              chosenInfo.nickname = response.nickname;
              changeStage("birthdate");
            }
          });
      }
    };

    function isValidDate(dateString) {
      const regex = /^\d{4}-\d{1,2}-\d{1,2}$/;

      if (!regex.test(dateString)) {
        return false;
      }

      const parts = dateString.split("-");
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const day = parseInt(parts[2], 10);

      const dateObject = new Date(year, month - 1, day);

      const currentdate = new Date();

      // 현재 날짜보다 이전 또는 같은 경우에만 유효한 것으로 간주
      const isValid =
        dateObject.getFullYear() === year &&
        dateObject.getMonth() === month - 1 &&
        dateObject.getDate() === day &&
        dateObject <= currentdate;

      return isValid;
    }

    const checkBirthdate = () => {
      const date = `${chosenInfo.birthdate.year}-${chosenInfo.birthdate.month}-${chosenInfo.birthdate.date}`;

      const isDateValid = isValidDate(date);
      if (isDateValid) {
        //여기서 다음페이지 넘기기
        changeStage("confirm");
      } else {
        props.modalFunction.warn(`${date} 날짜는 불가능한 날짜입니다ㅠ`);
      }
    };

    const signUp = () => {
      const idToken = localStorage.getItem("idToken");
      const accessToken = localStorage.getItem("accessToken");
      //백단에 넣어서 db에 row 추가

      const birthdateString = `${chosenInfo.birthdate.year}-${chosenInfo.birthdate.month}-${chosenInfo.birthdate.date}`;

      const signupUserInfo = {
        nickname: chosenInfo.nickname,
        birthdate: birthdateString,
      };

      const regexNickname = /^[가-힣0-9]{3,8}$/;
      if (!regexNickname.test(signupUserInfo.nickname)) {
        props.modalFunction.warn(`닉네임 다시 정해주세요.`);
      } else if (!isValidDate(signupUserInfo.birthdate)) {
        props.modalFunction.warn(`생일이 이상해요.`);
      } else {
        axios
          .post(
            "/api/newbie",
            { accessToken: accessToken, signupUserInfo: signupUserInfo },
            {
              headers: { Authorization: idToken },
            },
            { withCredentials: true }
          )
          .then((res) => {
            if (res.status == 200) {
              props.modalFunction.success(
                `${signupUserInfo.nickname}님! 환영합니다.`
              );
              router.push("/");
            }
            const response = JSON.parse(res.data);
            console.log(response);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    };

    return {
      stateSignup,
      chosenInfo,
      dateOptions,
      currentYear,
      checkNickname,
      checkBirthdate,
      changeStage,
      signUp,
    };
  },
};
</script>

<style lang="scss">
.containerSignup {
  margin: 0;
  height: 100vh;

  .displayNone {
    display: none;
  }

  .signupModal {
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
      flex-direction: column;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0px 0px 5px #444;
      .character {
        display: flex;
        align-items: center;
        img {
          padding-right: 10px;
        }
        .talk {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          background-color: v-bind("style.normalModal.btnCancel");
          padding: 10px;

          p {
            margin: 0;
          }
        }
      }

      .contentBox {
        width: 100%;
        padding: 10px;
        .ConfirmContent {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          h5 {
            width: 100%;
            text-align: center;
          }
        }
        .detail {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 10px;
          text-align: center;
        }
        .datePicker {
          display: flex;
          width: 100%;
          .optionTitle {
            display: flex;
            justify-content: center;
          }

          .year {
            width: 40%;
          }
          .month {
            width: 30%;
          }
          .date {
            width: 30%;
          }
        }
      }
      .btn-group {
        width: 100%;
        height: 50px;

        .pre {
          width: 20%;
          background-color: v-bind("style.normalModal.btnCancel");
          color: v-bind("style.normalModal.btnText");
        }

        .next {
          width: 50%;

          background-color: v-bind("style.normalModal.btn");
          color: v-bind("style.normalModal.btnText");
        }
        .cancel {
          width: 30%;

          background-color: v-bind("style.normalModal.btnCancel");
          color: v-bind("style.normalModal.btnText");
        }
      }
      p {
        margin: 0;
      }
    }
  }
  .source {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100vh;
    z-index: 10;
    background-color: v-bind("style.normalModal.bg");
    padding-top: 10px;
  }
  .fadeInModal {
    animation: fadeInModal 1s ease-in-out 1;
  }

  @keyframes fadeInModal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
