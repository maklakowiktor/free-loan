<template>
  <div class="quiz__step">
    <div class="quiz__type-label">Выберите количество кредитов</div>
    <CustomButton
      name="step_3"
      value="1"
      :selectOption="selectOption"
    />
    <CustomButton
      name="step_3"
      value="2"
      :selectOption="selectOption"
    />
    <CustomButton
      name="step_3"
      value="3"
      :selectOption="selectOption"
    />
    <CustomButton
      name="step_3"
      value="Более 3"
      :selectOption="selectOption"
    />
  </div>
</template>

<script>
import CustomButton from "../CustomElements/CustomButton.vue";

export default {
  name: "StepI",
  props: {
    cacheData: null
  },
  components: {
    CustomButton,
  },
  data() {
    return {
      selectedOptions: [],
    };
  },
  methods: {
    selectOption(e) {
      const value = e.target.value;
      const isSelected = e.target.checked;
      let tempOptions = this.selectedOptions;

      if (isSelected) {
        tempOptions.push(value);
      } else {
        tempOptions.forEach(function (item, i) {
          if (item === value) {
            tempOptions.splice(i, 1);
          }
        });
      }

      this.selectedOptions = tempOptions;
      
      this.cacheData(this.selectedOptions, "II");

      this.$emit("next");
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

.quiz__step {
  /* display: flex; */
  /* justify-content: center; */
}
</style>