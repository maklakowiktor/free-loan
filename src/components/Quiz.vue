<template>
  <section class="quiz">
    <div class="quiz__title-container">
      <h1 class="quiz__title">{{ this.title }}</h1>
    </div>
    <div class="quiz__container">
      <div class="quiz__progress">
        <div class="quiz__progress-line" :style="{width: currentStep + 'px'}"></div>
      </div>
      <div class="quiz__flex-container">
        <div class="quiz__column-left">

          <div class="quiz__step one">
            <div class="quiz__type-label">Выберите тип долга</div>

            <label class="quiz__checkbox">
              <input type="checkbox" class="checkbox" name="step_1[value][]" value="Кредит, займ" />
              <span class="quiz__border-checkbox"></span>
              <span class="text">Кредит, займ</span>
            </label>
            <label class="quiz__checkbox">
              <input type="checkbox" class="checkbox" name="step_1[value][]" value="Кредит, займ" />
              <span class="quiz__border-checkbox"></span>
              <span class="text">Коммунальные платежи, налоги</span>
            </label>
            <label class="quiz__checkbox">
              <input type="checkbox" class="checkbox" name="step_1[value][]" value="Кредит, займ" />
              <span class="quiz__border-checkbox"></span>
              <span class="text">Автокредит, ипотека</span>
            </label>
            <label class="quiz__checkbox">
              <input type="checkbox" class="checkbox" name="step_1[value][]" value="Кредит, займ" />
              <span class="quiz__border-checkbox"></span>
              <span class="text">Алименты, ущерб</span>
            </label>
            <div class="quiz__bottom-line"></div>
            <div class="quiz__flex-btn-container">
              <a href="javascript:void(0)" class="quiz__btn">Дальше</a>
            </div>
          </div>
        </div>

        <div class="quiz__column-right">
          <div class="quiz__answer-gift">
            <h3><span style="color: yellow;">За каждый ответ, вы<br>получаете</span> подарок</h3>
            <div class="quiz__gift-block">
              Приведи друга
              <span style="color: #FFE923;">получи 5 000₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Quiz',
  props: {
    title: String
  },
  data() {
    return {
      currentStep: 1,
    }
  },
  methods: {}
}
</script>
<style scoped>
/* ==================================== */
.quiz__gift-block {
  position: relative;
  display: flex;
  text-align: center;
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

.quiz__gift-block:before {
  content: '';
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
    content: '';
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
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }

  .quiz__btn:hover:after {
    background: url("../assets/arrow_dark.svg") no-repeat;
  }

  .quiz__column-left, .quiz__column-right {
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

  .quiz__step {
    /*display: flex;*/
    /*justify-content: center;*/
  }

  .quiz__checkbox {
    display: inline-block;
    font-size: 18px;
    line-height: 24px;
    width: 49%;
    height: 33px;
    max-width: 49%;
    margin-bottom: 100px;
    vertical-align: top;
    cursor: pointer;
  }

  .quiz__checkbox .checkbox {
    display: none;
  }

  .quiz__border-checkbox {
    display: inline-block;
    width: 24px;
    height: 24px;
    cursor: pointer;
    border: 3px solid #FFE923;
    border-radius: 2px;
    position: relative;
    margin-top: -1px;
    left: 0;
    vertical-align: top;
    text-align: justify; 
  }

  .quiz__border-checkbox:before {
    content: "";
    position: absolute;
    display: block;
    width: 24px;
    height: 24px;
    margin-top: 0;
    background-image: url("../assets/select.svg");
    background-repeat: no-repeat;
    background-size: 19px 20px;
    background-position: 3px 2px;
  }

  .quiz__checkbox .text {
    text-transform: uppercase;
    margin-left: 20px;
  }


/* ==================================== */
.quiz__title-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.quiz__title-container h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 21px;
}

.quiz__container {
  margin-left: auto;
  margin-right: auto;
  font-family: "Roboto", sans-serif;
}

.quiz__progress {
  width: 100%;
  margin: 25px 0 25px 0;
  height: 4px;
  border-radius: 5px;
  background-color: #C4C4C4;
}

.quiz__progress-line {
  margin: 25px 0 25px 0;
  width: 0;
  height: 4px;
  border-radius: 5px;
  background-color: #FFE923;
  transition: all .5s ease-in-out;
}

.quiz__progress-line:after {
  content: "";
  display: block;
  position: relative;
  top: -10px;
  width: 24px;
  height: 24px;
  background-color: #FFE923;
  border-radius: 24px;
}

.quiz__flex-container {
  display: flex;
  font-family: "Roboto", sans-serif;
}

.quiz__column-left {
  width: 70%;
}

.quiz__column-right {
  display: block;
  width: 30%;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  min-height: 500px;
  padding: 10px;
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

.quiz__type-label {
  text-transform: uppercase;
  margin-bottom: 95px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 900;
}

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