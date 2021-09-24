<template>
  <div class="quiz__step">
    <div class="quiz__step-title">{{ currentStepObj.title }}</div>
    <div class="quiz__step-option" v-for="(option, idx) in currentStepObj.options" :key="idx" >
      <!-- if type === 'single' -->
      <CustomButton
        v-if="currentStepObj.type === 'single'"
        :name="`step_${quizStep}`"
        :value="option"
        :selectOption="selectOption"
      />

      <!-- if type === 'mutiple' -->
      <CustomCheckbox
        v-else
        :name="`step_${quizStep}_${idx}`"
        :value="option"
        :selectOption="selectOption"
      />
    </div>
  </div>
</template>

<script>
import CustomCheckbox from "./CustomElements/CustomCheckbox.vue";
import CustomButton from "./CustomElements/CustomButton.vue";

export default {
  name: "Step",
  props: ["currentStepObj", "quizStep", "cacheData"],
  components: {
    CustomCheckbox,
    CustomButton,
  },
  data() {
    return {
      selectedOptions: []
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
      console.log(this.selectedOptions);
      
      this.cacheData(this.selectedOptions, this.quizStep);

      this.$emit("next");
    }
  },
  mounted() {
    console.log(this.currentStepObj, this.quizStep);
  }
};
</script>

<style>
.quiz__step {
  display: flex;
  flex-wrap: wrap;
}

.quiz__step-title {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  height: 115px;
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 900;
}

.quiz__step-option {
  width: 49%;
}
</style>