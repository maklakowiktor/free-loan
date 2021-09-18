<template>
  <label class="quiz__button">
    <input
      class="radio"
      type="radio"
      :name="name"
      :value="value"
      @click="selectOption"
    />
    <span class="quiz__content">{{ value }}</span>
  </label>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    name: String,
    value: String,
    selectOption: null,
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    selectLoan() {
      this.checked = !this.checked;
    },
  },
};
</script>

<style scoped>
input[type="radio"] {
  box-sizing: border-box;
  position: absolute;
  padding: 0;
  opacity: 0;
  width: 0;
  height: 0;
}

/* span */
.quiz__content {
  display: inline-block;
  width: calc(100% - 15px);
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  line-height: 24px;
  cursor: pointer;
  padding: 28px 0;
  height: auto;
  border: 3px solid #ffffff;
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  -ms-border-radius: 13px;
  border-radius: 13px;
}

/* label */
.quiz__button {
  display: inline-block;
  padding: 20px 0;
  line-height: 28px;
  height: 33px;
  width: 49%;
  max-width: 49%;
  vertical-align: top;
  margin-bottom: 80px;
  cursor: pointer;
}

input[type=radio] + .quiz__content:hover {
  background-color: #fff;
  color: #23272c;
  transition: 0.2s ease-in-out;
}

input[type=radio]:checked + .quiz__content {
    background-color: #e2e2e2;
    color: #23272c;
    box-shadow: inset 0 4px 4px rgb(0 0 0 / 25%) !important;
}

.quiz__button .radio {
  display: none;
}
</style>