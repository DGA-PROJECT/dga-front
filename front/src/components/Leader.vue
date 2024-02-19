<template>
  <div class="container">
    <div class="bgBox">
      <div
        v-if="data.currentBgIdx == 0"
        class="bg fadeInOut"
        :style="{
          'background-image': 'url(' + data.bgImg[0] + ')',
        }"
      >
        <div class="overlay1"></div>
        <div class="overlay2"></div>
      </div>

      <div
        v-if="data.currentBgIdx == 1"
        class="bg fadeInOut"
        :style="{
          'background-image': 'url(' + data.bgImg[1] + ')',
        }"
      >
        <div class="overlay1"></div>
        <div class="overlay2"></div>
      </div>

      <div
        v-if="data.currentBgIdx == 2"
        class="bg fadeInOut"
        :style="{
          'background-image': 'url(' + data.bgImg[2] + ')',
        }"
      >
        <div class="overlay1"></div>
        <div class="overlay2"></div>
      </div>

      <div
        v-if="data.currentBgIdx == 3"
        class="bg fadeInOut"
        :style="{
          'background-image': 'url(' + data.bgImg[3] + ')',
        }"
      >
        <div class="overlay1"></div>
        <div class="overlay2"></div>
      </div>

      <div
        v-if="data.currentBgIdx == 4"
        class="bg fadeInOut"
        :style="{
          'background-image': 'url(' + data.bgImg[4] + ')',
        }"
      >
        <div class="overlay1"></div>
        <div class="overlay2"></div>
      </div>

      <div class="hightLight floating">하이라이트</div>
    </div>

    <div class="content">
      <h5>또 간집 랭킹</h5>
      <div class="rankingBox slideLeft">
        <div class="rankingScroll">
          <div class="card" style="width: 18rem">
            <img
              src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/3.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">나는 여기에 갔어용</p>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img
              src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/1.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">나는 여기에 또 갔어용</p>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img
              src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/5.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">나는 여기에 또 갔어용</p>
            </div>
          </div>
        </div>
      </div>

      <div class="rankingBox slideRight">
        <h5>효도 여행 랭킹</h5>
        <div class="rankingScroll">
          <div class="card" style="width: 18rem">
            <img
              src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/1.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">나는 여기에 갔어용</p>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img
              src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/2.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">나는 여기에 또 갔어용</p>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img
              src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/3.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">나는 여기에 또 갔어용</p>
            </div>
          </div>
        </div>
      </div>
      <div class="rankingBox">
        <h5>키즈 여행 랭킹</h5>
        <div class="rankingScroll">
          <div class="card" style="width: 18rem">
            <img
              src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/4.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">나는 여기에 갔어용</p>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img
              src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/5.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">나는 여기에 또 갔어용</p>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img
              src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/3.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">나는 여기에 또 갔어용</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1>leader board web</h1>
    <i class="fa-solid fa-right-from-bracket"></i>
    <i class="fa-solid fa-right-from-bracket"></i>
    <i class="fa-solid fa-right-from-bracket"></i>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Leader",
  props: {
    modalFunction: Object,
    style: Object,
  },

  setup(props) {
    // const state = reactive({});
    const data = reactive({
      bgImg: [
        "https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/1.jpg",
        "https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/2.jpg",
        "https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/3.jpg",
        "https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/4.jpg",
        "https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/5.jpg",
      ],
      currentBgIdx: 0,
    });

    const bgImgInterval = () => {
      setInterval(() => {
        if (data.currentBgIdx == data.bgImg.length - 1) {
          data.currentBgIdx = 0;
        } else {
          data.currentBgIdx++;
        }
      }, 5000);
    };
    bgImgInterval();

    props;

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
  width: 100%;

  .bgBox {
    width: 100%;
    overflow: hidden;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    position: relative;
    .bg {
      position: absolute;
      top: 0;
      width: 100%;
      height: 500px;
      background-size: cover;
      background-position: center; /* 이미지를 가운데 정렬 */
      background-repeat: no-repeat; /* 이미지 반복 없음 */
      position: relative;
      .overlay1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%; /* 아랫부분의 높이 조정 */
        background: rgba(0, 0, 0, 0.3);
      }
      .overlay2 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%; /* 아랫부분의 높이 조정 */
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(255, 255, 255, 1)
        );
      }
    }
    .hightLight {
      align-self: center;
      position: absolute;
      bottom: -0px;
      width: 95%;
      height: 200px;

      display: flex;
      justify-content: center;
      color: white;
      background-color: v-bind("style.colors.red2");
      border-radius: 10px;
      box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.3);
    }
  }
  .content {
    .rankingBox {
      padding: 10px;
      width: 100vw;
      overflow-x: auto; /* 가로 스크롤 활성화 */

      .rankingScroll {
        display: flex;
        gap: 20px; /* 요소들 사이의 간격 설정 (선택사항) */
        .card {
          flex: 0 0 18rem; /* 카드의 너비를 고정 */
          /* 다른 스타일들 */
        }
      }
    }
  }
}
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
