<template>
  <ul class="quiz__gift-step">
    <li v-for="i in 4" :key="i">
      <img 
        :src="getImgUrl(currentStep, i)"
        :class="{'quiz_gift-item': true, 'quiz_gift-current': i === currentStep, 'quiz_gift-disabled': i > currentStep}"
        style="width: 50px; height: 47px" />
    </li>
  </ul>
</template>
    
<script>
export default {
  name: "GiftBar",
  props: {
    currentStep: Number,
  },
  data() {
    return {};
  },
  methods: {
    getImgUrl(currentStep, idx) {
      if (currentStep === idx) {
        return require(`../assets/steps/active/step_${idx}.svg`);
      }

      return require(`../assets/steps/next/step_${idx}.svg`);
    },
  },
};
</script>

<style>
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

.quiz_gift-item {
  width: 50px;
  height: 47px;
}

.quiz_gift-disabled {
  opacity: 0.2;
}
</style>