<template>
  <div class="app">
      <Navigation />
      <Projects />
     <Parralax img="https://images.unsplash.com/photo-1545875615-86f54b81a82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" />
      <About />
      <Parralax img="https://images.unsplash.com/photo-1520970014086-2208d157c9e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
      <Contact />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Parralax from "./components/Parallax"
export default {
  name: "App",

  components: {
    Navigation,
    Projects,
    About,
    Contact,
    Parralax
  },

  data: () => ({
    //
  })
};
</script>
