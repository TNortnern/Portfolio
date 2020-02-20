<template>
  <scrollactive
    active-class="active-nav"
    :offset="80"
    :duration="800"
    bezier-easing-value=".5,0,.35,1"
    class="navigation"
  >
    <div class="navigation__caption">
      <div>
        <div data-aos="fade-right">
          <img
            src="https://u5u9p8d6.stackpathcdn.com/wp-content/uploads/2019/05/042.jpg"
          />
        </div>
        <h1 data-aos="fade-left">Web Developer</h1>
        <div data-aos="fade-up" class="navigation__caption__links">
          <a href="https://docdro.id/pLITdUe">
            <i class="fas fa-file"></i>
          </a>
          <a href="https://github.com/TNortnern">
            <i class="fab fa-github-square" id="githubIcon"></i>
          </a>
        </div>
      </div>
    </div>
    <nav
      :class="scrolledBy ? 'bg-theme' : 'bg-transparent'"
      class="navbar navbar-expand-lg fixed-top"
    >
      <a class="navbar-brand" href="#">TN</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon navigation-toggle--white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link scrollactive-item" href="#portfolio"
              >Portfolio</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link scrollactive-item" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollactive-item" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </scrollactive>
</template>

<script>
// import MobileNavigation from "./MobileNavigation";
export default {
  components: {
    // MobileNavigation
  },
  data: () => ({
    // scrolledBy: false,
    scrollPosition: null
  }),
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  computed: {
    scrolledBy() {
      if (this.scrollPosition > 715) {
        return true;
      }
      return false;
    }
  },
  mounted() {
    // window.document.body.onscroll = () => {
    //     // eslint-disable-next-line no-console
    //     console.log(this.$refs.desktop.scrollHeight)
    // }
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";
$active: white;
$white-color: rgba(255, 255, 255, 0.555);

.navigation {
  background-image: url("https://trayvonnorthern.com/portfolio1/images/pg2.jpeg");
  height: 100vh;
  background-size: cover;
  .navigation-toggle--white {
    background-image: url("https://img.icons8.com/cotton/2x/menu.png");
  }
  .nav-link {
    font-size: 23px;
  }
  a,
  .nav-link {
    color: $white-color;
    &:hover {
      color: white;
    }
  }
}
.bg-theme {
  background-color: rgba(0, 0, 0, 0.89);
  animation: fade-in .7s;
  a {
    color: $white-color;
    transition: .15s ease-in;
    &:hover {
      color: white;
    }
  }
}
.bg-transparent {
  background-color: rgba(0, 0, 0, 0.2);
}
.active-nav {
  // text-decoration: underline;
  color: $active !important;
  font-weight: bold;
  transform: translateY(-3px);
}

.navigation__caption {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    border: 3px white dotted;
  }
  h1 {
    color: white;
    text-align: center;
    background-color: rgba(36, 36, 36, 0.877);
    border-radius: 14px;
    padding: 10px 0px;
  }
}
.navbar-nav {
  justify-content: center;
  width: 100%;
}
.navigation__caption__links {
  font-size: 60px;
  text-align: center;
  i {
    color: white;
    margin: 0 5px;
    transition: $default-timing;
    &:hover {
      color: #1379d8;
    }
  }
}
</style>
