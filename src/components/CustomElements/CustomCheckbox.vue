<template>
  <label class="quiz__checkbox">
    <input
      type="checkbox"
      class="checkbox"
      :name="name"
      :value="value"
      @click="selectOption($event); selectLoan()"
    />
    <span class="quiz__border-checkbox"></span>
    <span :class="{ text: true, selected: this.checked }">{{ value }}</span>
  </label>
</template>

<script>
export default {
  name: "CustomCheckbox",
  props: {
    name: String,
    value: String,
    selectOption: null,
  },
  data() {
    return {
      checked: false
    };
  },
  methods: {
    selectLoan() {
      this.checked = !this.checked;
    }
  },
};
</script>

<style scoped>
.quiz__checkbox {
  display: inline-block;
  font-size: 18px;
  line-height: 24px;
  height: 33px;
  margin-bottom: 100px;
  vertical-align: top;
  cursor: pointer;
}

.quiz__checkbox:hover {
  color: #FFE923;
  text-shadow: 2px 2px 15px rgba(255,233,35,0.6); 
  transition: 0.2s ease-in-out;
}

.quiz__checkbox .checkbox {
  display: none;
}

.quiz__border-checkbox {
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 3px solid #ffe923;
  border-radius: 2px;
  position: relative;
  margin-top: -1px;
  left: 0;
  vertical-align: top;
  text-align: justify;
}

input[type="checkbox"]:checked + .quiz__border-checkbox:before {
  content: "";
  position: absolute;
  display: block;
  width: 24px;
  height: 24px;
  margin-top: 0;
  background-image: url("../../assets/select.svg");
  background-repeat: no-repeat;
  background-size: 19px 20px;
  background-position: 3px 2px;
}

.quiz__checkbox .text {
  text-transform: uppercase;
  margin-left: 20px;
}

.selected {
  color: #FFE923;
}

</style>