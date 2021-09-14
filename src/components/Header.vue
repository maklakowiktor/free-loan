<template>
  <header>
    <div class="header__container">
      <div class="header__left_column">
        <a href="/">
          <img src="../assets/logo.svg" alt="Институт Финансового Оздоровления">
        </a>
      </div>
      <div class="header__right_column">
        <a class="header__phone" href="/">
          +7 (921) <span>921-21-21</span>
        </a>
        <a href="/" class="header__callback">перезвоните</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      state: 1
    }
  },
  methods: {
    
  }
}
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
    font-family: 'Montserrat', sans-serif;
  }

  .header__right_column a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  .header__right_column>a>span {
    font-size: 24px;
    font-weight: 700;
  }

  .header__right_column .header__callback {
    font-style: normal;
    font-weight: 500;
    text-decoration-line: underline;
    padding: 10px 0 0 0;
    color: #6D6D6D;
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

  /*.btn__next {*/
  /*  background-color: #42b983;*/
  /*  border: 1px solid transparent;*/
  /*  border-radius: 10px;*/
  /*  color: white;*/
  /*  padding: 15px 32px;*/
  /*  text-align: center;*/
  /*  text-decoration: none;*/
  /*  display: inline-block;*/
  /*  font-size: 16px;*/
  /*  transition: border 0.4s, background-color 0.4s, box-shadow 0.4s;*/
  /*}*/

  /*.btn__next:hover {*/
  /*  border: 1px solid black;*/
  /*  background-color: #53d298;*/
  /*  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);*/
  /*}*/

</style>
