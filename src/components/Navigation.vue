<template>
  <div class="custom-nav">
    <MobileNavigation />
    <div class="custom-nav__items">
      <ul>
        <li><a href="">About</a></li>
        <li><a href="">Portfolio</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import MobileNavigation from "./MobileNavigation";
export default {
  components: {
    MobileNavigation
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";
.custom-nav {
  a {
    color: $orange-color;
    &:hover {
      color: lighten($orange-color, 8%);
    }
  }
}
.custom-nav__items {
  @include large("down") {
    display: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 30%;
    list-style: none;
    margin-top: 10px;
    margin: 0 auto;
  }
}
</style>
