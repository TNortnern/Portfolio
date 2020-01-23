<template>
  <div class="mobile-navigation">
    <div class="mobile-navigation__hamburger">
      <v-app-bar-nav-icon @click="openNav = true" v-if="!openNav" />
      <!-- <i @click="openNav = true" v-if="!openNav" class="fas fa-arrow-right"></i> -->
      <i @click="openNav = false" v-if="openNav" class="fas fa-arrow-left"></i>
    </div>
    <transition name="slide">
      <div v-if="openNav" class="mobile-navigation__items">
        <ul>
          <li><a>About</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openNav: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";
.mobile-navigation {
  ul {
    position: absolute;
    list-style: none;
    border: 1px solid black;
    display: block;
    padding: 0px;
    width: 100%;
    text-align: center;
    li {
      border: 1px solid black;
      width: 100%;
      display: block;
      padding: 7px;
      font-size: 20px;
      a {
        color: $theme-color;
        &:hover {
            color: lighten($theme-color, 8%);
        }
      }
    }
  }
  @include large("up") {
    display: none;
  }
}
.mobile-navigation__hamburger {
  color: $theme-color;
  margin-top: 2px;
  font-size: 25px;
  text-align: center;
  i {
    cursor: pointer;
    box-shadow: 2px 2px black;
    border: 1px solid black;
    padding: 7px;
  }
}
</style>
