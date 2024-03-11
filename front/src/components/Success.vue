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
  props: {
    stateFunction: Object,
    modalFunction: Object,
    style: Object,
  },

  setup(props) {
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

    const passLogin = (response) => {
      //로그인 되었을경우 동작
      localStorage.setItem("email", response.result.email);
      localStorage.setItem("nickname", response.result.nickname);
      localStorage.setItem("userId", response.result.user_id);
      props.stateFunction.emitUserInfo(response.result);
      props.modalFunction.success(
        `${response.result.nickname}님! 로그인이 되었습니다!`
      );

      props.stateFunction.loginSetting(response.result.nickname);
      router.push("/");
    };

    const goToSignUp = (email) => {
      //회원가입 진행
      //응답 받은 데이터에서 이메일 주소를 로컬스토리지에 저장함 (할지말지)
      localStorage.setItem("email", email);
      //리다이렉션
      router.push("/signup");
    };

    const goToError = () => {
      router.push("/");
      props.modalFunction.warn(`비정상적인 접근입니다.`);
    };

    // 토큰을 백단에 보내는 함수.
    const checkNewbie = () => {
      const tokenObj = parsingToken();
      const idToken = tokenObj.id_token;
      const accessToken = tokenObj.access_token;

      //토큰 저장

      localStorage.setItem("idToken", idToken);
      localStorage.setItem("accessToken", accessToken);

      //먼저 백단으로 해당 유저가 있는지 체크

      try {
        axios
          .post(
            "/api/users/login",
            {
              accessToken: accessToken,
              idToken: idToken,
            },
            {
              headers: { Authorization: idToken },
            },
            { withCredentials: true }
          )
          .then((res) => {
            // const response = JSON.parse(res.data);
            const response = JSON.parse(res.data);

            if (response.error) {
              throw new Error(res.data.error.message);
            } else {
              //신규회원일경우
              if (response.newbie) {
                // console.log(response.newbie);
                // console.log(response.email);
                goToSignUp(response);
              } else {
                // console.log(response.email);
                passLogin(response);
              }
            }
          })
          .catch((error) => {
            // 에러 처리
            console.error("에러 발생:", error.message);
            props.modalFunction.warn(
              `에러가 발생했어요 ㅠ 잠시 후 다시 시도해주세요.`
            );
            goToError();
          });
      } catch (err) {
        console.log(err.message);
      }
    };

    checkNewbie();

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
