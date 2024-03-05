<template>
  <div class="containerSearch">
    <div class="searchInfo" v-if="mode.isSearching">
      <div class="blank"></div>

      <div class="titleBox poor">
        <h2>어느도시로 가시나요?</h2>
      </div>
      <div class="area">
        <button
          class="btn btn-light areaBtn"
          v-on:click="selectArea('all')"
          :class="isAreaActive('all') ? 'pulseSelected' : ''"
        >
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/search/destiType/ALL.webp"
            alt=""
          />
          <p class="poor">어디든지</p>
        </button>
        <button
          class="btn btn-light areaBtn"
          v-for="area in mode.areaArr"
          :key="area"
          v-on:click="selectArea(area)"
          :class="isAreaActive(area) ? 'pulseSelected' : ''"
        >
          <img
            :src="`https://dgaui.s3.ap-northeast-2.amazonaws.com/search/area/${area}.webp`"
            alt=""
            :class="isAreaActive(area) ? 'pulseSelected' : ''"
          />
          <p class="poor">{{ stateFunction.translateArea(area) }}</p>
        </button>
      </div>
      <div class="titleBox poor">
        <h2>누구랑 가시나요?</h2>
      </div>

      <div class="travelType">
        <button
          class="btn btn-light"
          v-on:click="selected.travelType = 'all'"
          :class="isTravelTypeActive('all') ? 'pulseSelected' : ''"
        >
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/search/destiType/ALL.webp"
            alt=""
          />
          <p class="poor">누구든지</p>
        </button>
        <button
          class="btn btn-light"
          v-on:click="selected.travelType = 'KID'"
          :class="isTravelTypeActive('KID') ? 'pulseSelected' : ''"
        >
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/emoticon/KID.webp"
            alt=""
          />
          <p class="poor">아이랑</p>
        </button>
        <button
          class="btn btn-light"
          v-on:click="selected.travelType = 'ELDER'"
          :class="isTravelTypeActive('ELDER') ? 'pulseSelected' : ''"
        >
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/emoticon/ELDER.webp"
            alt=""
          />
          <p class="poor">아빠랑</p>
        </button>
      </div>
      <div class="titleBox poor">
        <h2>어떤곳으로 가시나요?</h2>
      </div>
      <div class="destiType">
        <button
          class="btn btn-light destiBtn"
          :class="isDestiTypeActive('all') ? 'pulseSelected' : ''"
          v-on:click="selected.destiType = 'all'"
        >
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/search/destiType/ALL.webp"
            alt=""
          />
          <p class="poor">상관없어요</p>
        </button>
        <button
          class="btn btn-light destiBtn"
          :class="isDestiTypeActive('LANDMARK') ? 'pulseSelected' : ''"
          v-on:click="selected.destiType = 'LANDMARK'"
        >
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/search/destiType/LANDMARK.webp"
            alt=""
          />
          <p class="poor">랜드마크로</p>
        </button>
        <button
          class="btn btn-light destiBtn"
          :class="isDestiTypeActive('RESTAURANT') ? 'pulseSelected' : ''"
          v-on:click="selected.destiType = 'RESTAURANT'"
        >
          <img
            src="https://dgaui.s3.ap-northeast-2.amazonaws.com/search/destiType/RESTAURANT.webp"
            alt=""
          />
          <p class="poor">맛집으로</p>
        </button>
        <button
          class="btn btn-light destiBtn"
          :class="isDestiTypeActive('MARKET') ? 'pulseSelected' : ''"
          v-on:click="selected.destiType = 'MARKET'"
        >
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
        <button
          class="btn btn-light newest"
          :class="isFilterActive('newest') ? 'pulseSelected' : ''"
          v-on:click="selected.filter = 'newest'"
        >
          <i class="fa-solid fa-down-long"></i>
          <p>최신순</p>
        </button>
        <button
          class="btn btn-light like"
          :class="isFilterActive('like') ? 'pulseSelected' : ''"
          v-on:click="selected.filter = 'like'"
        >
          <i class="fa-solid fa-heart"></i>
          <p>좋아요순</p>
        </button>
        <button
          class="btn btn-light revisit"
          :class="isFilterActive('revisit') ? 'pulseSelected' : ''"
          v-on:click="selected.filter = 'revisit'"
        >
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
            <label for="floatingInputGroup1">제목+내용에서 검색할 단어</label>
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
            <label for="floatingInputGroup1">작성자를 입력해주세요</label>
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
            <label for="floatingInputGroup1">태그 입력해주세요</label>
          </div>
        </div>
      </div>
      <div class="submit">
        <button v-on:click="submit()" class="btn btn-primary submit">
          검색
        </button>
      </div>
    </div>
    <div class="blank"></div>

    <div class="result" v-if="!mode.isSearching">
      <div class="noData" v-if="mode.noData">
        <!-- 여기에 데이터 없을경우 이미지, 버튼도 만들어서 다시 검색하기 돌아가는거. -->
      </div>
      <div
        class="card"
        v-for="post in data.posts.slice(mode.pgIdx * 10, (mode.pgIdx + 1) * 10)"
        :key="post"
      >
        <div class="card-body post">
          <div class="row">
            <div class="imgBox col-4">
              <img :src="post.thumbnail_url" class="img-fluid rounded-start" />
              <div class="likeAndRevisitcontainer">
                <div class="likeBox">
                  <i class="fa-solid fa-heart"></i>
                  <p>{{ post.like_count }}</p>
                </div>
                <div class="revisitBox">
                  <i class="fa-solid fa-arrows-rotate"></i>
                  <p>{{ post.revisit_count }}</p>
                </div>
              </div>
            </div>
            <div class="postInfo col-8">
              <div class="titleBox">
                <h5 class="title">
                  {{ stateFunction.truncateText(post.title, 13) }}
                </h5>
              </div>
              <div class="contentBox">
                <div class="areaBox">
                  <i class="fa-solid fa-map-location"></i>
                  <p>
                    <span>{{ stateFunction.translateArea(post.area) }}의 </span>
                    <span>{{ post.desti_name }}</span>
                  </p>
                </div>
              </div>
              <div class="etcBox">
                <div class="writerBox">
                  <i class="fa-solid fa-user"></i>
                  <p>{{ post.nickname }}</p>
                </div>
                <div class="withBox">
                  <img
                    :src="stateFunction.imgLinkKidOrElder(post.travel_type)"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="..." class="page">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" v-on:click="changePgPN('pre')">이전</a>
          </li>
          <li
            class="page-item"
            :class="idx == mode.pgIdx ? 'active' : ''"
            v-for="idx in Array.from(
              { length: mode.maxPgIdx + 1 },
              (_, index) => index
            )"
            :key="idx"
          >
            <a class="page-link" href="#" v-on:click="changePg(idx)">{{
              idx + 1
            }}</a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#" v-on:click="changePgPN('next')"
              >다음</a
            >
          </li>
        </ul>
      </nav>
    </div>

    <!-- {{ selected }} -->

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
import axios from "axios";

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
      posts: [],
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
      area: ["all"],
      travelType: "all",
      destiType: "all",
      filter: "newest",
      titleContent: "",
      writer: "",
      tag: "",
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
      isResult: false,
      maxIdx: 0,
      pgIdx: 0,
      maxPgIdx: 0,
      pageArr: 1,
      isSearching: true,
      noData: false,
    });

    const selectArea = (area) => {
      if (!Array.isArray(selected.area)) {
        selected.area = [];
      }

      if (!selected.area.includes(area)) {
        if (selected.area.includes("all") && area !== "all") {
          // "all"이 이미 있는 경우 다른 값을 추가하지 않음
          selected.area = [area];
        } else if (area == "all") {
          selected.area = ["all"];
        } else {
          // "all"이 없는 경우 새로운 지역을 추가
          selected.area.push(area);
        }
      }
    };

    const isAreaActive = (area) => {
      if (selected.area.includes(area)) {
        return true;
      } else {
        return false;
      }
    };

    const isTravelTypeActive = (travelType) => {
      if (selected.travelType == travelType) {
        return true;
      } else {
        return false;
      }
    };

    const isDestiTypeActive = (destiType) => {
      if (selected.destiType == destiType) {
        return true;
      } else {
        return false;
      }
    };

    const isFilterActive = (filter) => {
      if (selected.filter == filter) {
        return true;
      } else {
        return false;
      }
    };

    const changePg = (idx) => {
      mode.pgIdx = idx - 1;
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 부드러운 스크롤 적용 (선택적)
      });
      console.log(mode.pgIdx);
      console.log(mode.maxPgIdx);
      if (mode.pgIdx > mode.maxPgIdx) {
        console.log(mode.pgIdx);
        console.log(mode.maxPgIdx);
        props.modalFunction.warn("최대페이지에요");
        mode.pgIdx--;
      } else if (mode.pgIdx < -1) {
        props.modalFunction.warn("최소페이지에요");
        console.log(mode.pgIdx, "페이지 인덱스");
        console.log(idx, "그냥인덱스");
        mode.pgIdx = 0;
      } else {
        mode.pgIdx++;
        window.scrollTo({
          top: 0,
          behavior: "smooth", // 부드러운 스크롤 적용 (선택적)
        });
      }
    };

    const changePgPN = (para) => {
      if (para == "next") {
        if (mode.pgIdx == mode.maxPgIdx) {
          props.modalFunction.warn("최대페이지에요");
        } else {
          mode.pgIdx++;
          window.scrollTo({
            top: 0,
            behavior: "smooth", // 부드러운 스크롤 적용 (선택적)
          });
        }
      } else {
        if (mode.pgIdx - 1 < 0) {
          props.modalFunction.warn("최소페이지에요");
        } else {
          mode.pgIdx--;
          window.scrollTo({
            top: 0,
            behavior: "smooth", // 부드러운 스크롤 적용 (선택적)
          });
        }
      }
    };

    const testRouter = () => {
      router.push("/search?text=muzzi");
    };

    const testParams = () => {
      router.push({
        name: "Query",
        params: { text: "example", size: "medium" },
      }); // params 사용
    };

    const submit = () => {
      props.stateFunction.loadingFunctionStart();
      axios
        .post("/api/searches", { maxIdx: mode.maxIdx, selected: selected })
        .then((res) => {
          data.posts = res.data.posts;
        })
        .catch((error) => {
          // 요청이 실패한 경우 실행되는 로직
          console.error("Error:", error);
        })
        .finally(() => {
          // 요청이 완료된 후 항상 실행되는 로직
          props.stateFunction.loadingFunctionEnd(2000);
          setTimeout(() => {
            mode.isSearching = false;
            mode.maxIdx++;
            window.scrollTo({
              top: 0,
              behavior: "smooth", // 부드러운 스크롤 적용 (선택적)
            });
          }, 500);
        });
    };

    // const paging = (idx) => {};

    console.log(router.currentRoute.value.path);
    console.log(router.currentRoute.value.params); // router.currentRoute.value.params로 변경

    return {
      data,
      mode,
      selected,
      selectArea,
      testRouter,
      testParams,
      isAreaActive,
      isTravelTypeActive,
      isDestiTypeActive,
      isFilterActive,
      submit,
      changePg,
      changePgPN,
    };
  },
  watch: {
    "data.posts.length": function () {
      this.mode.maxPgIdx = Math.floor(this.data.posts.length / 10);
      // this.mode.pageArr = Array.from({ length: this.mode.maxPgIdx + 1 }, (_, index) => index)
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
.containerSearch {
  width: 100%;

  .input-group-text {
    width: 20%;
    display: flex;
    justify-content: center;
  }
  label {
    z-index: 0;
  }

  .submit {
    width: 100%;
    height: 50px;
  }
  .blank {
    height: 50px;
  }

  .searchInfo {
    width: 100%;

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
        width: 20%;
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
    .page {
      margin-top: 10px;
    }
  }
}
</style>
