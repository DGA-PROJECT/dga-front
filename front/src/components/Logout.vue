<template>
  <div class="container">
    <h1>logout web</h1>
  </div>
</template>

<script>
import { reactive } from "vue";
import router from "../router";

export default {
  name: "Success",
  props: {
    stateFunction: Object,
    modalFunction: Object,
    style: Object,
  },

  setup(props) {
    const data = reactive({});
    // 토큰을 백단에 보내는 함수.
    const nickname = localStorage.getItem("nickname");

    const logOut = () => {
      props.modalFunction.success(`${nickname}님! 로그아웃 되었습니다!`);

      props.stateFunction.removeUserInfo();

      router.push("/");
    };

    logOut();

    return {
      data,
    };
  },
};
</script>

<style lang="scss">
#app {
  width: 100vw;
}
body {
  margin: 0;
}
.container {
}
</style>
