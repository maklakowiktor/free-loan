<template>
  <section class="quiz">
    <div class="quiz__title-container">
      <h1 class="quiz__title">{{ this.title }}</h1>
    </div>
    <div class="quiz__container">
      <div class="quiz__progress">
        <div
          class="quiz__progress-line"
          :style="{ width: calcProgressWidth }"
        ></div>
      </div>
      <div class="quiz__flex-container">
        <div class="quiz__column-left">
          <!-- Step .. -->
          <StepI v-show="currentStep === 1" :cached-data="cacheData" />
          <StepII @next="nextStep" v-show="currentStep === 2" :cached-data="cacheData" />

          <div class="quiz__bottom-line"></div>

          <div class="quiz__flex-btn-container">
            <a
              v-if="currentStep === 1"
              href="javascript:void(0)"
              class="quiz__btn"
              @click="nextStep"
              >Дальше</a
            >
            <a
              v-else
              href="javascript:void(0)"
              class="quiz__prev-btn"
              @click="previousStep"
              >назад</a
            >
          </div>
        </div>

        <div class="quiz__column-right">
          <div class="quiz__answer-gift">
            <h3>
              <span style="color: yellow">
                За каждый ответ, вы<br />получаете</span
              >
              подарок
            </h3>
            <div class="quiz__gift-row" style="display: inline">
              <div class="quiz__gift-block">
                {{ giftLabel[currentStep - 1].label }}
                <span class="gift-scaling-animation" style="color: #ffe923">{{
                  giftLabel[currentStep - 1].topic
                }}</span>
              </div>
            </div>
            <div class="quiz__gift-tasks">
              <span class="fade-in">{{
                giftLabel[currentStep - 1].cases
              }}</span>
              <div>Подобных дел</div>
            </div>

            <GiftBar :currentStep="currentStep" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import StepI from "./Steps/StepI.vue";
import StepII from "./Steps/StepII.vue";
import GiftBar from "./GiftBar.vue";

export default {
  name: "Quiz",
  props: {
    title: String,
  },
  components: {
    StepI,
    StepII,
    GiftBar,
  },
  data() {
    return {
      currentStep: 1,
      giftLabel: [
        { label: "Чек лист", topic: '"Как отшить коллекторов"', cases: 700 },
        { label: "Приведи друга", topic: "Получи 5 000₽", cases: 850 },
        {
          label: "Бесплатное",
          topic: "Повышение уровня специалиста",
          cases: 879,
        },
        { label: "Бесплатное такси", topic: "до офиса", cases: 1302 },
        { label: "Вы собрали все доступные", topic: "подарки", cases: 1302 },
      ],
      progressBar: {
        DOM: null,
        value: null,
      },
      result: {
        stepI: [],
        stepII: [],
        stepIII: [],
        stepIV: [],
      },
    };
  },
  mounted() {
    this.progressBar.DOM = document.querySelector(".quiz__progress"); // Получаю доступ к DOM-элементу прогрессбара
    this.progressBar.value = this.progressBar.DOM.clientWidth; // Извлекаю ширину прогрессбара

    window.addEventListener("resize", this.resizeProgressBar);
  },
  destroyed() {
    // Очистка памяти
    this.progressBar.DOM.removeEventListener("resize", this.resizeProgressBar);
  },
  methods: {
    resizeProgressBar() {
      this.progressBar.value = this.progressBar.DOM.clientWidth;
    },
    nextStep() {
      this.currentStep++;
    },
    previousStep() {
      this.currentStep--;
    },
    cacheData(data, stepNumber) {
      switch (stepNumber) {
        case "I":
          this.result.stepI.push(data);
        break;
        case "II":
          this.result.stepI.push(data);
        break;
        case "III":
          this.result.stepI.push(data);
        break;
        case "IV":
          this.result.stepI.push(data);
        break;
        default:
          
        break;
      }
      console.log(this.result);
    },
  },
  computed: {
    calcProgressWidth() {
      return ((this.currentStep - 1) * this.progressBar.value) / 4 + "px";
    },
  },
};
</script>
<style>
.fade-in {
  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 2s;
  -moz-animation: fadeIn ease 2s;
  -o-animation: fadeIn ease 2s;
  -ms-animation: fadeIn ease 2s;
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.quiz__prev-btn {
  /* arrow-back.svg */
  display: block;
  text-align: center;
  font-size: 24px;
  line-height: 24px;
  margin-top: 25px;
  width: 20%;
  text-decoration: none;
  color: #fff;
  background: transparent;
  transition: color 0.15s ease-in-out;
}

.quiz__prev-btn:hover {
  color: #23272c;
  background: transparent;
}

.quiz__prev-btn:before {
  content: "";
  display: inline-block;
  background: url("../assets/arrow-back.svg") no-repeat;
  width: 35px;
  height: 25px;
  margin-right: 10px;
  vertical-align: middle;
}

.quiz__prev-btn:hover:before {
  background: url("../assets/arrow-back-dark.svg") no-repeat;
}

/* ==================================== */
.quiz__gift-tasks {
  position: relative;
  width: 159px;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  text-transform: lowercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 97px auto;
  margin-bottom: 0;
  text-align: center;
}

.quiz__gift-tasks:before {
  content: "";
  position: absolute;
  display: block;
  width: 159px;
  height: 159px;
  margin-top: 0;
  margin-left: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url("../assets/ellipse.svg");
}

/* ==================================== */
.quiz__flex-btn-container {
  display: flex;
  width: 100%;
}

.quiz__btn {
  display: inline-block;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  padding: 24px 25px;
  text-transform: uppercase;
  text-decoration: none;
  width: 40%;
  color: #fff;
  background: transparent;
  border: 3px solid #fff;
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  -ms-border-radius: 13px;
  border-radius: 13px;
  cursor: pointer;
}

.quiz__btn:after {
  content: "";
  display: inline-block;
  background: url("../assets/arrow.svg") no-repeat;
  width: 35px;
  height: 25px;
  margin-top: -4px;
  margin-left: 10px;
  vertical-align: middle;
}

.quiz__btn:hover {
  background: #fff;
  color: #23272c;
  outline: none;
  box-shadow: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.quiz__btn:hover:after {
  background: url("../assets/arrow_dark.svg") no-repeat;
}

.quiz__column-left,
.quiz__column-right {
  padding-right: 15px;
  padding-left: 15px;
}

.quiz__bottom-line {
  margin-top: -40px;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid rgba(214, 214, 214, 0.1);
  margin-bottom: 3rem;
}

/* TITLE */
.quiz__title-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.quiz__title-container h1 {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  line-height: 21px;
}

/* MAIN CONTAINER */
.quiz__container {
  margin-left: auto;
  margin-right: auto;
  font-family: "Roboto", sans-serif;
}

/* PROGRESSBAR */
.quiz__progress {
  width: 100%;
  margin: 25px 0 25px 0;
  height: 4px;
  border-radius: 5px;
  background-color: #c4c4c4;
  position: relative;
}

.quiz__progress-line {
  margin: 25px 0 25px 0;
  width: 0;
  height: 4px;
  border-radius: 5px;
  background-color: #ffe923;
  transition: all 0.5s ease-in-out;
}

.quiz__progress-line:after {
  content: "";
  display: block;
  position: relative;
  top: -10px;
  width: 24px;
  height: 24px;
  background-color: #ffe923;
  border-radius: 24px;
}

/* MAIN SUBCONTAINER */
.quiz__flex-container {
  display: flex;
  font-family: "Roboto", sans-serif;
}

/* COLUMN LEFT */
.quiz__column-left {
  width: 70%;
}

/* COLUMN RIGHT */
.quiz__column-right {
  display: block;
  width: 30%;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  min-height: 500px;
  padding: 10px;
}

.quiz__answer-gift {
  position: relative;
  display: block;
  position: relative;
  min-height: 500px;
  margin-top: -23px;
}

.quiz__answer-gift h3 {
  margin-top: 39px;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
}

.quiz__title {
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
}

.quiz__gift-block {
  position: relative;
  text-align: center;
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 50%;
  width: 111px;
  height: 111px;
  margin: 72px auto;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 14px;
}

.gift-scaling-animation {
  animation: gift-scaling 0.7s ease-in-out alternate;
}

@keyframes gift-scaling {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.quiz__gift-block:before {
  content: "";
  position: absolute;
  display: block;
  width: 167px;
  height: 197px;
  margin-top: -17px;
  margin-left: -6px;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url("../assets/gift.png");
}

.quiz__gift-step {
  position: absolute;
  right: 0px;
  top: 84px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48px;
  list-style: none;
}

/* GIFTS ICONS */
.quiz__gift-tasks span {
  font-size: 36px;
  line-height: 42px;
  font-weight: 500;
  font-style: normal;
}

/* ===================================== */
/* MEDIA QUERIES */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .quiz__container {
    min-width: 600px;
  }

  .quiz__column-left {
    width: 100%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .quiz__container {
    max-width: 600px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .quiz__container {
    max-width: 768px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .quiz__container {
    max-width: 992px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .quiz__container {
    max-width: 1000px;
  }
}
</style>