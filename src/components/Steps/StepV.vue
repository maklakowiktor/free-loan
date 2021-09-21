<template>
  <div class="quiz__step">
    <div class="quiz__type-label">Введите ваш телефон</div>
    <div class="quiz__phone-wrapper">
      <input
        type="text"
        class="quiz__phone-input"
        placeholder="8 (___) ___-__-__"
        maxlength="17"
        autocomplete="off"
        @input="isValid"
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
export default {
  name: "StepI",
  props: {
    cacheData: null,
  },
  data() {
    return {
      selectedOptions: [],
      value: "",
    };
  },
  methods: {
    isNumericInput(event) {
      const key = event.keyCode;
      return (
        (key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
      );
    },
    isModifierKey(event) {
      const key = event.keyCode;
      console.log(key);
      return (
        event.shiftKey === true ||
        key === 35 ||
        key === 36 || // Allow Shift, Home, End
        key === 8 ||
        key === 9 ||
        key === 13 ||
        key === 46 || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        // Allow Ctrl/Command + A,C,V,X,Z
        ((event.ctrlKey === true || event.metaKey === true) &&
          (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
      );
    },
    enforceFormat(event) {
      // Input must be of a valid number format or a modifier key, and not longer than ten digits
      if (!this.isNumericInput(event) && !this.isModifierKey(event)) {
        event.preventDefault();
      }
    },
    isValid(event) {
      if (this.isModifierKey(event)) return;

      //8 (999) 250-64-98         // length: 17
      const input = this.value.replace(/\D/g, "").substring(0, 17); // First ten digits of input only
      const phoneNumber = {};

      // Example
      //012345678910
      //89992506498
      phoneNumber.header = input.substring(1, 4); // 999
      phoneNumber.section = input.substring(4, 7); // 250
      phoneNumber.footerI = input.substring(7, 9); // 64
      phoneNumber.footerII = input.substring(9, 11); // 98

      console.log(phoneNumber);

      if (input.length > 9) {
        this.value = `${input[0]} (${phoneNumber.header}) ${phoneNumber.section}-${phoneNumber.footerI}-${phoneNumber.footerII}`;
      } else if (input.length > 6) {
        this.value = `${input[0]} (${phoneNumber.header}) ${phoneNumber.section}-${phoneNumber.footerI}`;
      } else if (input.length > 3) {
        this.value = `${input[0]} (${phoneNumber.header}) ${phoneNumber.section}`;
      } else if (input.length > 0) {
        this.value = `${input[0]} (${phoneNumber.header}`;
      }
    },
    mounted() {

    },
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