<template>
  <div class="containerSignup">
    <p>{{ data.toggle }}</p>
    <!-- <div class="testToggle">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        value="1"
        v-model="data.toggle"
      />
      <label class="form-check-label" for="inlineRadio1">1</label>
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        value="2"
        v-model="data.toggle"
      />
      <label class="form-check-label" for="inlineRadio1">2</label>
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        value="3"
        v-model="data.toggle"
      />
      <label class="form-check-label" for="inlineRadio1">3</label>
    </div> -->
    <Green v-if="data.toggle == '1'" />
    <Zoo v-if="data.toggle == '2'" />
    <blue v-if="data.toggle == '3'" />

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
        v-on:click="modalFunction.normal('안녕?')"
      >
        하잉
      </button>
      <button class="btn btn-danger" v-on:click="modalFunction.warn('안녕?')">
        하잉
      </button>
      <button class="btn btn-light" v-on:click="modalFunction.success('안녕?')">
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
    const data = reactive({
      toggle: "1",
    });

    //1. 토큰을 찢어서 백단에 보냄
    //2. 응답을 받아서
    //   - 토큰이 존재한다면? -> was에서 유저정보(이메일 등등) 받아서 스토리지에 토큰 저장한 후, /로 리다이렉션
    //   - 토큰이 없다면? -> 일단 프론트에서 access토큰 저장후, id토큰과 access 토큰을 was로 보냄
    //                      was에서 토큰 파싱 한 후, 이메일을 응답으로 보냄.
    //                      이메일 받고 js메모리에 저장한다음, router로 /signup으로 컴포넌트 바꿈(토큰 get에서 지우려는거임)
    //                      첫번째 닉네임, 생일 성별 각각 blue zoo green컴포넌트에서 모달식으로 받음
    //                      다 저장되면 was에 보내고 was에서 user row 생성.
    //                      응답으로 닉네임, 이메일, 생일, 성별 값을 줌.
    //                      프론트에 userState를 'login'으로 바꿈

    // props.modalFunction.alert("안녕?");

    return {
      data,
    };
  },
};
</script>

<style lang="scss">
.containerSignup {
  margin: 0;
  height: 100vh;
  .testToggle {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 30px;
    background-color: grey;
    z-index: 10;
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
