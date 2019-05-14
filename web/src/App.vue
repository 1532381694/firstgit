<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @font-face{
    font-family: 'fz';
    src: url('./assets/font/方正锐正圆字体.TTF');
  }
  @font-face{
    font-family: 'hw';
    src: url('./assets/font/NanumBarunGothic.ttf');
  }
 #app {
   min-width: 960px;
   width: 100%;
   font-family: fz;
 }
</style>
