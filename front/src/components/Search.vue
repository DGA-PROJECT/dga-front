<template>
  <div class="containerSearch">
    <div class="searchInfo">
      <div class="blank"></div>

      <div class="titleBox poor">
        <h2>어디로 가시나요?</h2>
      </div>
      <div class="area">
        <button
          class="btn btn-light areaBtn"
          v-for="area in mode.areaArr"
          :key="area"
        >
          <img
            :src="`https://dgaui.s3.ap-northeast-2.amazonaws.com/search/area/${area}.webp`"
            alt=""
          />
          <p class="poor">{{ stateFunction.translateArea(area) }}</p>
        </button>
      </div>
      <div class="titleBox poor">
        <h2>누구랑 가시나요?</h2>
      </div>

      <div class="travelType">
        <button class="btn btn-light" v-on:click="selected.travelType = 'KID'">
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/emoticon/KID.webp"
            alt=""
            :class="selected.travelType == 'KID' ? 'pulse' : ''"
          />
          <p class="poor">아이랑</p>
        </button>
        <button
          class="btn btn-light"
          v-on:click="selected.travelType = 'ELDER'"
        >
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/emoticon/ELDER.webp"
            alt=""
            :class="selected.travelType == 'ELDER' ? 'pulse' : ''"
          />
          <p class="poor">아빠랑</p>
        </button>
      </div>
      <div class="titleBox poor">
        <h2>어떤곳으로 가시나요?</h2>
      </div>
      <div class="destiType">
        <button class="btn btn-light destiBtn">
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/search/destiType/ALL.webp"
            alt=""
          />
          <p class="poor">상관없어요</p>
        </button>
        <button class="btn btn-light destiBtn">
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/search/destiType/LANDMARK.webp"
            alt=""
          />
          <p class="poor">랜드마크로</p>
        </button>
        <button class="btn btn-light destiBtn">
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/search/destiType/RESTAURANT.webp"
            alt=""
          />
          <p class="poor">맛집으로</p>
        </button>
        <button class="btn btn-light destiBtn">
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/search/destiType/MARKET.webp"
            alt=""
          />
          <p class="poor">쇼핑하러</p>
        </button>
      </div>
      <div class="titleBox poor">
        <h2>필터링</h2>
      </div>
      <div class="likeAndRevisit poor">
        <button class="btn btn-light newest">
          <i class="fa-solid fa-down-long"></i>
          <p>최신순</p>
        </button>
        <button class="btn btn-light like">
          <i class="fa-solid fa-heart"></i>
          <p>좋아요순</p>
        </button>
        <button class="btn btn-light revisit">
          <i class="fa-solid fa-arrows-rotate"></i>
          <p>방문횟수순</p>
        </button>
      </div>

      <div class="titleBox poor">
        <h2>제목 + 내용</h2>
      </div>
      <div class="nickname">
        <div class="input-group mb-3">
          <span class="input-group-text">검색어</span>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGroup1"
              placeholder="Username"
              v-model="selected.titleContent"
            />
            <label for="floatingInputGroup1">입력해주세요</label>
          </div>
        </div>
      </div>

      <div class="titleBox poor">
        <h2>작성자</h2>
      </div>
      <div class="nickname">
        <div class="input-group mb-3">
          <span class="input-group-text">작성자</span>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGroup1"
              placeholder="Username"
              v-model="selected.writer"
            />
            <label for="floatingInputGroup1">입력해주세요</label>
          </div>
        </div>
      </div>

      <div class="titleBox poor">
        <h2>태그</h2>
      </div>
      <div class="nickname">
        <div class="input-group mb-3">
          <span class="input-group-text">태그</span>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGroup1"
              placeholder="Username"
              v-model="selected.tag"
            />
            <label for="floatingInputGroup1">입력해주세요</label>
          </div>
        </div>
      </div>
      {{ selected }}
    </div>

    <!-- <div class="result">
      <div class="card">
        <div class="card-body post">
          <div class="row">
            <div class="imgBox col-4">
              <img
                src="https://dgafrontui.s3.ap-northeast-2.amazonaws.com/leaderboard/4.jpg"
                class="img-fluid rounded-start"
              />
              <div class="likeAndRevisitcontainer">
                <div class="likeBox">
                  <i class="fa-solid fa-heart"></i>
                  <p>1</p>
                </div>
                <div class="revisitBox">
                  <i class="fa-solid fa-arrows-rotate"></i>
                  <p>2</p>
                </div>
              </div>
            </div>
            <div class="postInfo col-8">
              <div class="titleBox">
                <h5 class="title">타이틀</h5>
              </div>
              <div class="contentBox">
                <div class="areaBox">
                  <i class="fa-solid fa-map-location"></i>
                  <p>서울의 인천대공원</p>
                </div>
              </div>
              <div class="etcBox">
                <div class="writerBox">
                  <i class="fa-solid fa-user"></i>
                  <p>바보온달</p>
                </div>
                <div class="withBox">
                  <img :src="stateFunction.imgLinkKidOrElder('KID')" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div> -->

    <!-- <div class="dev">
      <button class="btn btn-primary" v-on:click="testRouter()">
        라우터 테스트
      </button>

      <div>
        <h1>쿼리 스트링 불러오기</h1>
        {{ data.query.data }}
      </div>

      <button class="btn btn-light" v-on:click="testParams()">
        라우터 파라미터
      </button>
    </div> -->
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router"; // useRouter 추가

export default {
  name: "Search",
  props: {
    modalFunction: Object,
    stateFunction: Object,
    style: Object,
  },

  setup(props) {
    props;
    const router = useRouter(); // useRouter로 router 참조

    const data = reactive({
      params: {
        data: router.currentRoute.value.params,
        text: router.currentRoute.value.params.text,
        size: router.currentRoute.value.params.size,
      },
      query: {
        data: router.currentRoute.value.query.text,
      },
    });

    const selected = reactive({
      area: [],
      travelType: "KID",
      titleContent: null,
      writer: null,
      tag: null,
    });

    const mode = reactive({
      areaArr: [
        "seoul",
        "chungcheong",
        "kangwon",
        "gyeonggi",
        "jeollanam",
        "jeollabuk",
        "gyeongsangbuk",
        "gyeongsangnam",
        "jeju",
      ],
    });

    const testRouter = () => {
      router.push("/search?text=muzzi");
    };

    const testParams = () => {
      router.push({
        name: "Query",
        params: { text: "example", size: "medium" },
      }); // params 사용
    };

    console.log(router.currentRoute.value.path);
    console.log(router.currentRoute.value.params); // router.currentRoute.value.params로 변경

    return {
      data,
      mode,
      selected,

      testRouter,
      testParams,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
.containerSearch {
  width: 100%;

  .searchInfo {
    width: 100%;
    .blank {
      height: 50px;
    }
    .titleBox {
      display: flex;
      justify-content: center;
      width: 100%;
      background-color: v-bind("style.colors.lightBlue");
      border-radius: 10px;
      padding: 2px;
      h2 {
        font-size: 1em;
        margin: 0;
      }
    }
    .area {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .areaBtn {
        width: 33%;
        img {
          width: 80%;
        }
        p {
          margin: 0;
        }
      }
    }
    .travelType {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        width: 50%;
        p {
          margin: 0;
        }
      }
      img {
        width: 70px;
      }
    }
    .destiType {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .destiBtn {
        width: 50%;
        img {
          width: 80%;
        }
        p {
          margin: 0;
        }
      }
    }
    .likeAndRevisit {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      p {
        margin: 0;
      }
      .btn {
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        i {
          font-size: 1.4em;
        }
      }
      .newest {
        i {
          color: v-bind("style.colors.yellow1");
        }
      }
      .like {
        i {
          color: v-bind("style.colors.red2");
        }
      }
      .revisit {
        i {
          color: v-bind("style.colors.blue2");
        }
      }
    }
  }
  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .card {
      height: 100px;
      margin: 5px;
      width: 100%;

      .post {
        width: 100%;
        padding: 0;
        .row {
          width: 100%;

          .imgBox {
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden; /* 이미지가 부모 요소를 넘어가는 것을 숨김 */
            height: 100px;
            position: relative;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover; /* 이미지가 부모 요소에 꽉 차게 유지되도록 함 */
              border-radius: inherit;
            }
            .likeAndRevisitcontainer {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              position: absolute;
              bottom: 0;
              background-color: rgba(0, 0, 0, 0.5);
              p {
                margin: 0;
              }
              .likeBox {
                display: flex;
                align-items: center;
                padding: 3px;
                i {
                  color: v-bind("style.colors.red2");
                  margin-right: 5px;
                }
              }
              .revisitBox {
                display: flex;
                align-items: center;
                padding: 3px;
                i {
                  color: v-bind("style.colors.blue2");
                  margin-right: 5px;
                }
              }
              p {
                color: v-bind("style.colors.white1");
              }
            }
          }
          .postInfo {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            padding: 5px;
            .titleBox {
              display: flex;
              justify-content: space-between;
              align-items: center;

              width: 95%;

              .title {
                font-size: 1.3em;

                width: 100%;
                font-weight: 700;
                margin: 0;
              }
            }

            .contentBox {
              display: flex;
              justify-content: space-between;
              width: 95%;
              font-size: 1.1em;
              .areaBox {
                display: flex;
                justify-content: center;
                i {
                  color: v-bind("style.colors.blue2");
                  margin-right: 5px;
                  display: flex;
                  align-items: center;
                }
              }
            }

            .etcBox {
              display: flex;
              justify-content: space-between;
              width: 95%;
              .writerBox {
                display: flex;
                align-items: center;
                color: v-bind("style.colors.blue4");

                i {
                  margin-right: 5px;
                }
                p {
                  font-size: 0.8em;
                }
              }

              .withBox {
                display: flex;
                justify-content: flex-end;
                width: 47%;
                img {
                  width: 35px;
                }
              }
            }

            p {
              margin: 0;
            }
          }
        }
      }
    }
  }
}
</style>
