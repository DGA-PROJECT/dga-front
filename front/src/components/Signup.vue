<template>
  <div class="containerSignup">
    <Green v-if="stateSignup.stage == '1'" />
    <Zoo v-if="stateSignup.stage == '2'" />
    <blue v-if="stateSignup.stage == '3'" />

    <!-- 로그인 UI -->
    <div class="signupModal normal_bg" v-if="stateSignup.stage == 1">
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
            />
          </div>
          <div class="detail poor">
            <p>한글 숫자만 가능해요!</p>
            <p>8자 이하로 정해주세요.</p>
          </div>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-light next">Next</button>
          <button type="button" class="btn btn-light cancel">Cancel</button>
        </div>
      </div>
    </div>
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

      <button
        class="btn btn-primary"
        v-on:click="modalFunction.normal('노멀 모달이야')"
      >
        하잉
      </button>
      <button
        class="btn btn-danger"
        v-on:click="modalFunction.warn('경고 모달이야')"
      >
        하잉
      </button>
      <button
        class="btn btn-light"
        v-on:click="modalFunction.success('성공 모달이야')"
      >
        하잉
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
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
    props;
    const stateSignup = reactive({
      stage: "1",
    });

    return {
      stateSignup,
    };
  },
};
</script>

<style lang="scss">
.containerSignup {
  margin: 0;
  height: 100vh;

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
          justify-content: center;
          border-radius: 7px;
          background-color: v-bind("style.normalModal.btnCancel");

          p {
            padding: 10px;
          }
        }
      }

      .contentBox {
        width: 100%;
        padding: 10px;
        .detail {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 10px;
        }
      }
      .btn-group {
        width: 100%;
        .next {
          width: 70%;
          background-color: v-bind("style.normalModal.btn");
          color: v-bind("style.normalModal.btnText");
        }
        .cancel {
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
    z-index: 5;
    background-color: v-bind("style.normalModal.bg");
    padding-top: 10px;
  }
}
</style>
