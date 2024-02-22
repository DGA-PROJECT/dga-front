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
      <div class="title_again rank_title">
        <img
          src="https://dgaui.s3.ap-northeast-2.amazonaws.com/rank/title/title_again.webp"
          alt=""
        />
      </div>
      <div class="rankingBox slideLeft revisit">
        <div class="rankingScroll">
          <div
            v-for="(post, idx) in data.rank.revisit"
            :key="post"
            class="card"
            style="width: 18rem"
          >
            <div class="thumbnail">
              <img
                v-if="modifyUrl(idx, 'again')"
                class="rankingBadge"
                :src="modifyUrl(idx, 'again')"
              />
              <img
                :src="post.thumbnail_url"
                class="card-img-top"
                alt=""
                style="height: 12rem"
              />
              <div class="mainText mainTextRevisit floating">
                <i class="fa-solid fa-arrows-rotate"></i>
                <p>
                  총 <span>{{ post.revisit_count }}</span
                  >회 방문했어요
                </p>
              </div>
            </div>

            <div class="card-body">
              <h5 class="card-title">
                {{ stateFunction.truncateText(post.title, 13) }}
              </h5>

              <div class="detail1">
                <div class="areaAndDestiBox poor">
                  <i class="fa-solid fa-map-location"></i>
                  <span>{{ stateFunction.translateArea(post.area) }}의</span>
                  <span>{{ post.desti_name }}</span>
                </div>
              </div>
              <div class="detail2">
                <div class="typeBox">
                  <p class="poor">with</p>

                  <img
                    :src="stateFunction.imgLinkKidOrElder(post.travel_type)"
                    alt=""
                  />
                </div>
                <div class="likeBox">
                  <i class="fa-solid fa-heart"></i>
                  <p>{{ post.like_count }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="title_type rank_title">
        <img
          src="https://dgaui.s3.ap-northeast-2.amazonaws.com/rank/title/title_type.webp"
          alt=""
        />
      </div>
      <ul class="nav nav-tabs">
        <li class="nav-item" v-on:click="mode.travelType = 'kid'">
          <div
            class="nav-link poor"
            :class="mode.travelType == 'kid' ? 'active' : ''"
          >
            <img
              src="https://dgaui.s3.ap-northeast-2.amazonaws.com/emoticon/kid.webp"
              alt=""
            />
            <p>아이랑 여행</p>
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link poor"
            :class="mode.travelType == 'elder' ? 'active' : ''"
            v-on:click="mode.travelType = 'elder'"
          >
            <img
              src="https://dgaui.s3.ap-northeast-2.amazonaws.com/emoticon/elder.webp"
              alt=""
            />
            <p>효도여행</p>
          </div>
        </li>
      </ul>
      <div
        class="rankingBox slideRight kidOrElder"
        v-if="mode.travelType == 'kid'"
      >
        <div class="rankingScroll">
          <div
            v-for="(post, idx) in data.rank.kid"
            :key="post"
            class="card"
            style="width: 18rem"
          >
            <div class="thumbnail">
              <img
                v-if="modifyUrl(idx, 'kid')"
                class="rankingBadge"
                :src="modifyUrl(idx, 'kid')"
              />
              <img
                :src="post.thumbnail_url"
                class="card-img-top"
                alt=""
                style="height: 12rem"
              />
              <div class="mainText mainTextKidOrElder floating">
                <i class="fa-solid fa-heart"></i>
                <p>{{ post.like_count }}명이 좋아합니다</p>
              </div>
            </div>

            <div class="card-body">
              <h5 class="card-title">
                {{ stateFunction.truncateText(post.title, 13) }}
              </h5>

              <div class="detail1">
                <div class="areaAndDestiBox poor">
                  <i class="fa-solid fa-map-location"></i>
                  <span>{{ stateFunction.translateArea(post.area) }}의</span>
                  <span>{{ post.desti_name }}</span>
                </div>
              </div>
              <div class="detail2">
                <div class="revisitBox poor">
                  <i class="fa-solid fa-arrows-rotate"></i>
                  <p>
                    <span>{{ post.revisit_count }}</span
                    >회 방문
                  </p>
                </div>
                <div class="likeBox"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="rankingBox slideRight kidOrElder"
        v-if="mode.travelType == 'elder'"
      >
        <div class="rankingScroll">
          <div
            v-for="(post, idx) in data.rank.elder"
            :key="post"
            class="card"
            style="width: 18rem"
          >
            <div class="thumbnail">
              <img
                v-if="modifyUrl(idx, 'elder')"
                class="rankingBadge"
                :src="modifyUrl(idx, 'elder')"
              />
              <img
                :src="post.thumbnail_url"
                class="card-img-top"
                alt=""
                style="height: 12rem"
              />
              <div class="mainText mainTextKidOrElder floating">
                <i class="fa-solid fa-heart"></i>
                <p>{{ post.like_count }}명이 좋아합니다</p>
              </div>
            </div>

            <div class="card-body">
              <h5 class="card-title">
                {{ stateFunction.truncateText(post.title, 13) }}
              </h5>

              <div class="detail1">
                <div class="areaAndDestiBox poor">
                  <i class="fa-solid fa-map-location"></i>
                  <span>{{ stateFunction.translateArea(post.area) }}의</span>
                  <span>{{ post.desti_name }}</span>
                </div>
              </div>
              <div class="detail2">
                <div class="revisitBox poor">
                  <i class="fa-solid fa-arrows-rotate"></i>
                  <p>
                    <span>{{ post.revisit_count }}</span
                    >회 방문
                  </p>
                </div>
                <div class="likeBox"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="title_area rank_title">
        <img
          src="https://dgaui.s3.ap-northeast-2.amazonaws.com/rank/title/title_area.webp"
          alt=""
        />
      </div>
    </div>
    <h1>leader board wddedddb</h1>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  name: "Leader",
  props: {
    modalFunction: Object,
    stateFunction: Object,
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
      rank: {
        kid: [],
        elder: [],
        like: [],
        revisit: [],
      },
    });

    const mode = reactive({
      travelType: "kid",
    });

    const modifyUrl = (idx, kind) => {
      "https://dgaui.s3.ap-northeast-2.amazonaws.com/rank/again/again1.webp";

      if (idx <= 3) {
        return `https://dgaui.s3.ap-northeast-2.amazonaws.com/rank/${kind}/${kind}${
          idx + 1
        }.webp`;
      } else {
        false;
      }
    };

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

    const getData = () => {
      axios.get("/api/leader/data").then((res) => {
        data.rank.like = res.data.like;
        data.rank.revisit = res.data.revisit;
        data.rank.kid = res.data.kid;
        data.rank.elder = res.data.elder;
      });
      console.log(data.rank);
    };
    getData();

    props;

    return {
      data,
      mode,
      modifyUrl,
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
    .rank_title {
      width: 100%;
      margin-top: 10px;
      border-radius: 30px 30px 0 0;
    }
    .title_again {
      background-color: v-bind("style.colors.lightRed");
    }
    .title_type {
      background-color: v-bind("style.colors.lightYellow");
    }
    .title_area {
      background-color: v-bind("style.colors.lightBlue");
    }
    .rankingBox {
      padding: 10px;
      width: 100vw;
      overflow-x: auto;

      .rankingScroll {
        display: flex;
        gap: 20px;
        .card {
          flex: 0 0 18rem;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        }
        .card-body {
          background-color: v-bind("style.colors.white2");
          padding: 0;
          h5 {
            width: 100%;
            display: flex;
            justify-content: center;
            font-weight: 700;
            padding-top: 10px;
          }
        }
        .thumbnail {
          position: relative;
          .rankingBadge {
            position: absolute;
            width: 40%;
            padding: 5px;
          }
          .mainText {
            position: absolute;
            display: flex;
            align-items: center;
            left: 0;
            bottom: 0;
            width: 100%;
            padding: 5px;
            color: white;
            font-weight: 700;
            font-size: 1.2em;
            p {
              margin: 0;
            }
          }
          .mainTextRevisit {
            i {
              margin-right: 10px;
              color: v-bind("style.colors.blue3");
              font-size: 2em;
            }
            p {
              margin: 0;
              span {
                color: v-bind("style.colors.red1");
                font-size: 1.5em;
              }
            }
          }
          .mainTextKidOrElder {
            i {
              margin-right: 10px;
              color: v-bind("style.colors.red1");
              font-size: 2em;
            }
          }
        }
      }
    }
    .revisit {
      background-color: v-bind("style.colors.lightRed");

      .rankingScroll {
        .card-body {
          .detail1 {
            width: 100%;
            display: flex;
            p {
              margin: 0;
            }
            .areaAndDestiBox {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              font-size: 1.1em;
              span {
                font-size: 1.3em;
              }

              i {
                margin-right: 7px;
                color: v-bind("style.colors.blue2");
              }
            }
          }
          .detail2 {
            display: flex;
            p {
              margin: 0;
            }
            .typeBox {
              padding-left: 10px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 50%;
              font-size: 1.1em;
              p {
                margin-right: 7px;
              }
              img {
                width: 50px;
              }
            }
            .likeBox {
              padding-right: 10px;

              width: 50%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              font-size: 1.3em;
              p {
                margin: 0;
              }
              i {
                color: v-bind("style.colors.red1");
                margin-right: 5px;
              }
            }
          }
        }
        .thumbnail {
          position: relative;
          .rankingBadge {
            position: absolute;
            width: 40%;
            padding: 5px;
          }
        }
      }
    }
    .nav-tabs {
      width: 100%;
      background-color: v-bind("style.colors.lightYellow");
      color: v-bind("style.colors.white1");
      border-radius: 5px 5px 0 0;
      padding-top: 10px;

      .nav-item {
        width: 50%;
        display: flex;
        justify-content: center;
        .nav-link {
          width: 90%;
          display: flex;
          align-content: center;
          color: v-bind("style.colors.blue4");

          img {
            width: 50px;
            margin-right: 5px;
          }
          p {
            margin: 0;
            font-size: 1.1em;
            align-self: center;
          }
        }
      }

      .active {
        background-color: v-bind("style.colors.yellow1");
      }
    }
    .kidOrElder {
      background-color: v-bind("style.colors.lightYellow");

      .rankingScroll {
        .card-body {
          .detail1 {
            width: 100%;
            display: flex;
            p {
              margin: 0;
            }
            .areaAndDestiBox {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              font-size: 1.1em;
              span {
                font-size: 1.3em;
              }

              i {
                margin-right: 7px;
                color: v-bind("style.colors.blue2");
              }
            }
          }
          .detail2 {
            display: flex;
            p {
              margin: 0;
            }
            .revisitBox {
              padding-left: 10px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 50%;
              font-size: 1.1em;
              p {
                margin-right: 7px;
              }
              i {
                font-size: 1.2em;
                margin-right: 5px;
                color: v-bind("style.colors.blue2");
              }
            }
            .likeBox {
              padding-right: 10px;

              width: 50%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              font-size: 1.3em;
              p {
                margin: 0;
              }
              i {
                color: v-bind("style.colors.red1");
                margin-right: 5px;
              }
            }
          }
        }
        .thumbnail {
          position: relative;
          .rankingBadge {
            position: absolute;
            width: 40%;
            padding: 5px;
          }
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
