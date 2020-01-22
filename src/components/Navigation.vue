<template>
  <div class="navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-orange fixed-top">
  <a class="navbar-brand" href="#">TN</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>

<script>
// import MobileNavigation from "./MobileNavigation";
export default {
  components: {
    // MobileNavigation
  },
  data: () => ({
      currentScroll: 0
  }),
  methods: {

  },
  computed: {

  },
  mounted () {
      // window.document.body.onscroll = () => {
      //     // eslint-disable-next-line no-console
      //     console.log(this.$refs.desktop.scrollHeight)
      // }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";
.navigation {
  .nav-link {
    font-size: 17px;
  }
  a, .nav-link {
    color: rgba(0, 0, 0, 0.719);
    &:hover {
      color: darken(black, 18%);
    }
  }
}
.custom-nav {
  a {
    color: #fff;
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
.bg-orange {
  background-color: #fc7b48;
}
</style>
