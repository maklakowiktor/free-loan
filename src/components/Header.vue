<template>
  <header>
    <div class="header__container">
      <div class="header__left_column">
        <a href="/">
          <img
            src="../assets/logo.svg"
            alt="Институт Финансового Оздоровления"
          />
        </a>
      </div>
      <div class="header__right_column">
        <a class="header__phone" href="/"> +7 (921) <span>921-21-21</span> </a>
        <a href="javascript:void(0)" class="header__callback" @click="openModalWindow">перезвоните</a>
      </div>
    </div>
    <ModalWindow v-show="this.modalState" :openModalWindow="openModalWindow" />
  </header>
</template>

<script>
import ModalWindow from "./ModalWindow.vue";

export default {
  name: "Header",
  components: {
    ModalWindow
  },
  data() {
    return {
      modalState: false
    };
  },
  methods: {
    openModalWindow() {
      this.modalState = !this.modalState;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header__container {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 34px 0px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.header__left_column {
  width: 75%;
}

.header__right_column {
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 25%;
  font-family: "Montserrat", sans-serif;
}

.header__right_column a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.header__right_column > a > span {
  font-size: 24px;
  font-weight: 700;
}

.header__right_column .header__callback {
  font-style: normal;
  font-weight: 500;
  text-decoration-line: underline;
  padding: 10px 0 0 0;
  color: #6d6d6d;
}

.header__right_column .header__callback:before {
  content: "";
  position: absolute;
  margin: -4px 0 0 -35px;
  width: 24px;
  height: 24px;
  /*display: block;*/
  background: url("../assets/bx_bxl-whatsapp.svg") no-repeat center;
  background-size: contain;
}

@media only screen and (min-width: 768px) {
  .header__container {
    max-width: 768px;
  }
}

/* ===================================== */
/* MEDIA QUERIES */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .header__container {
    min-width: 600px;
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
  .header__container {
    max-width: 768px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .header__container {
    max-width: 992px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .header__container {
    max-width: 1000px;
  }
}
</style>
