<template>
  <div class="containerSignup">
    <p>{{ data.toggle }}</p>
    <div class="testToggle">
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
    </div>
    <Green v-if="data.toggle == '1'" />
    <Zoo v-if="data.toggle == '2'" />
  </div>
</template>

<script>
import { reactive } from "vue";
import Green from "./signup/Green.vue";
import Zoo from "./signup/Zoo.vue";

export default {
  name: "Signup",
  components: { Green, Zoo },

  setup() {
    const data = reactive({
      toggle: "1",
    });

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
    .nav_top {
    }
  }
}
</style>
