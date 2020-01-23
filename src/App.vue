<template>
  <div>
      <Navigation />
      <Projects />
      <About />
      <Contact />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default {
  name: "App",

  components: {
    Navigation,
    Projects,
    About,
    Contact
  },

  data: () => ({
    //
  })
};
</script>
