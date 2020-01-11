<template>
  <div class="custom-nav">
      
    <MobileNavigation />
      <img ref="tester" width="100%" height="100%" src="https://images.unsplash.com/photo-1543013309-0d1f4edeb868?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=723&q=80" alt="">

    <div class="custom-nav__items" ref="desktop">
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
  },
  data: () => ({
      currentScroll: 0
  }),
  methods: {

  },
  computed: {

  },
  mounted () {
      window.document.body.onscroll = () => {
          // eslint-disable-next-line no-console
          console.log(this.$refs.desktop.scrollHeight)
      }
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
    position: fixed;
    z-index: 99;
    top: 0%;
    font-size: 25px;
  @include large("down") {
    display: none;
  }
  display: flex;
  justify-content: center;
  width: 100%;
  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    list-style: none;
    margin-top: 10px;
    li {
        margin: 0px 40px;
    }
  }
}
</style>
