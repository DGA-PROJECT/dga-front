<template>
  <div class="container">
    <h1>success web</h1>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import router from "../router";

export default {
  name: "Success",

  setup() {
    const data = reactive({});

    //토큰 파싱 및 객체화 함수

    const getParametersFromHash = (hash) => {
      // 해시 문자열에서 #을 제거
      const hashWithoutHashSymbol = hash.replace(/^#/, "");

      // &를 기준으로 문자열을 나누고 각각의 토큰을 객체에 저장
      const paramsArray = hashWithoutHashSymbol.split("&");
      const paramsObject = {};

      paramsArray.forEach((param) => {
        const [key, value] = param.split("=");
        paramsObject[key] = value;
      });

      return paramsObject;
    };

    const parsingToken = () => {
      const url = window.location.href;

      const url1 = new URL(url);
      const tokenHash = url1.hash;
      const tokenObj = getParametersFromHash(tokenHash);

      if (!tokenObj.id_token) {
        throw new Error("id token is null!!!");
      } else if (!tokenObj.access_token) {
        throw new Error("access token is null!!!");
      } else {
        return getParametersFromHash(tokenHash);
      }
    };

    const passLogin = () => {
      //로그인 되었을경우 동작
      router.push("/");
    };

    const signUp = () => {
      //회원가입 진행
      router.push("/signup");
    };
    signUp;

    // 토큰을 백단에 보내는 함수.
    const sendToken = () => {
      const tokenObj = parsingToken();
      const idToken = tokenObj.id_token;
      const accessToken = tokenObj.access_token;

      //응답 받은 데이터에서 이메일 주소를 로컬스토리지에 저장함
      // localStorage.setItem("idToken", idToken);
      localStorage.setItem("accessToken", accessToken);

      axios
        .post(
          "/api/token",
          { idToken: idToken },
          {
            headers: { Authorization: accessToken },
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.error) {
            throw new Error(res.data.error.message);
          } else {
            //신규회원일경우
            if (res.data.newbie) {
              //응답 받은 데이터에서 이메일 주소를 로컬스토리지에 저장함
              localStorage.setItem("email", res.data.email);
              signUp();
            } else {
              let data = JSON.parse(res.data);
              alert(data.message);
              //리다이렉션
              passLogin();
            }
          }
        });
    };

    sendToken();

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
