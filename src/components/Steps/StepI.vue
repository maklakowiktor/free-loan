<template>
  <div class="quiz__step">
    <div class="quiz__type-label">Выберите тип долга</div>
    <CustomCheckbox
      name="step_1_1"
      value="Алименты, ущерб"
      :selectOption="selectOption"
    />
    <CustomCheckbox
      name="step_1_2"
      value="Кредит, займ"
      :selectOption="selectOption"
    />
    <CustomCheckbox
      name="step_1_3"
      value="Автокредит, ипотека"
      :selectOption="selectOption"
    />
    <CustomCheckbox
      name="step_1_4"
      value="Коммунальные платежи, налоги"
      :selectOption="selectOption"
    />
  </div>
</template>

<script>
import CustomCheckbox from "../CustomElements/CustomCheckbox.vue";

export default {
  name: "StepI",
  props: {
    cacheData: null
  },
  components: {
    CustomCheckbox,
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
      console.log(this.selectedOptions);
      
      this.cacheData(this.selectedOptions, "I");
    },
  },
};

</script>

<style scoped>
.quiz__type-label {
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  height: 115px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 900;
}
</style>