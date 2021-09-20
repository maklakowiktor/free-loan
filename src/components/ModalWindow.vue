<template>
  <div class="quiz__modal-window">
    <div class="quiz__modal-content">
      <div class="quiz__btn-wrapper">
        <span class="quiz__btn-close" @click="openModalWindow">&times;</span>
      </div>
      <h1>Введите ваш телефон</h1>
      <input
        type="text"
        placeholder="8 (___) ___-__-__"
        value=""
        maxlength="17"
      />
      <label class="agreement">
        <input
          type="checkbox"
          name="yes_personal"
          class="yes_personal"
          value="Y"
          checked="checked"
        />
        Нажимая, на кнопку «Перезвоните мне»,<br />я даю свое согласие на
        обработку моих персональных данных</label
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {
    openModalWindow: null,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.quiz__modal-window {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgb(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
}

.quiz__modal-content {
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

.quiz__btn-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.quiz__btn-close {
  position: absolute;
  color: #ffe923;
  text-shadow: none;
  opacity: 1;
  font-weight: 300;
  font-size: 40px;
}

.quiz__btn-close:hover,
.quiz__btn-close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>