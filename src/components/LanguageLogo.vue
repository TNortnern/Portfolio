<template>
  <div :class="containerstyle">
      <img :width="width" :height="height" :class="styles" class="language-logo" v-if="language == 'HTML/CSS'" src="http://www.bobbyberberyan.com/wp-content/uploads/2012/03/HTML5CSS3Logos.svg" alt="">
      <img :width="width" :height="height" :class="styles" class="language-logo" v-if="language == 'Vanilla JavaScript'" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png" alt="">
      <img :width="width" :height="height" :class="styles" class="language-logo" v-if="language == 'Vanilla PHP'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png" alt="">
      <img :width="width" :height="height" :class="styles" class="language-logo" v-if="language == 'Laravel'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LaravelLogo.png/800px-LaravelLogo.png" alt="">
      <img :width="width" :height="height" :class="styles" class="language-logo" v-if="language == 'Vue'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="">
      <img :width="width" :height="height" :class="styles" class="language-logo" v-if="language == 'React'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="">
      <img :width="width" :height="height" :class="styles" class="language-logo" v-if="language == 'React Native'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="">
      <img :width="width" :height="height" :class="styles" class="language-logo" v-if="language == 'SCSS'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2000px-Sass_Logo_Color.svg.png" alt="">
  </div>
</template>

<script>
export default {
 props: {
     language: {
         type: String,
         default: () => {}
     },
     height: {
         type: String,
         default: () => {}
     },
     width: {
         type: String,
         default: () => {}
     },
     styles: {
         type: String,
         default: () => {}
     },
     containerstyle: {
         type: String,
         default: () => {}
     }
 }
}
</script>

<style lang="scss" scoped>
@import '../styles';
.center {
    text-align: center;
}
.language-logo {
    margin-left: 8px;
    margin-right: 8px;
}
</style>