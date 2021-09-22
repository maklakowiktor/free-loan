<template>
  <div class="quiz__step">
    <div class="quiz__type-label">Введите ваш телефон</div>
    <div class="quiz__phone-wrapper">
      <input
        type="tel"
        class="quiz__phone-input"
        placeholder="8 (___) ___-__-__"
        maxlength="18"
        autocomplete="off"
        v-model="value"
      />
    </div>
    <div class="quiz__agreement-wrapper">
      <label class="quiz__agreement-label">
        <input
          type="checkbox"
          name=""
          class="quiz__agreement-input"
          value="Y"
          checked="checked"
        />
        Нажимая, на кнопку «Узнать результат»,<br />я даю свое согласие на
        обработку моих персональных данных</label
      >
    </div>
  </div>
</template>

<script>
import PhoneMask from "../../lib/phone_mask";

export default {
  name: "StepI",
  props: {
    cacheData: null,
  },
  data() {
    return {
      selectedOptions: [],
      value: "",
      phoneMask: null,
    };
  },
  methods: {},
  mounted() {
    const $phoneNumberInput = document.querySelector("input[type=tel]");
    this.phoneMask = new PhoneMask({
      el: $phoneNumberInput,
      country: "ru",
      noMask: false,
    });
  },
};
</script>

<style scoped>
.quiz__type-label {
  text-transform: uppercase;
  height: 115px;
  display: flex;
  align-items: center;
  font-size: 32px;
  line-height: 40px;
  font-weight: 900;
}

.quiz__phone-wrapper {
  position: relative;
}

.quiz__phone-input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.quiz__phone-wrapper:before {
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  position: absolute;
  z-index: 1;
  top: calc(50% - 7px);
  left: 18px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("../../assets/phone-icon.svg");
}

.quiz__phone-input {
  padding-left: 40px;
  margin-top: 65px;
  width: 40%;
  box-shadow: 0 7px 64px rgb(0 0 0 / 7%);
}

.quiz__phone-input:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
}

.quiz__agreement-wrapper {
  display: inline-block;
  margin-top: 1rem !important;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.58);
}
</style>