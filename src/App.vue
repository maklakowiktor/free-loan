<template>
  <div id="app" >
    <Header />
    <Quiz title="Узнайте, можно ли списать ваш долг?"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Quiz from './components/Quiz.vue'

export default {
  name: 'App',
  components: {
    Header,
    Quiz
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  /* Сброс всех дефолтных стилей, установленных браузером */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  /* Для древних браузеров */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }

  body {
    height: 100vh;
    color: #fff;
    font-family: "Roboto", sans-serif;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url('assets/background.png');
  }

  body:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(22, 22, 22, .8);
    z-index: -1;
  }

</style>
