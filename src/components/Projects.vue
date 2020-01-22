<template>
<div class="projects">
    <h1 class="text-center">Portfolio</h1>
    <h2 class="text-center">My Projects</h2>
  <div class="projects__container">
    <!-- <FilterLanguages /> -->
    <ProjectItems :included="included" />
  </div>
</div>
</template>

<script>
/* eslint-disable no-console */
// import FilterLanguages from "./FilterLanguages";
import ProjectItems from './ProjectItems';
export default {
  components: {
    // FilterLanguages,
    ProjectItems
  },
  data: () => ({
    included: []
  }),
  methods: {
    removeAsFilter(language) {
      this.included = this.included.filter(lang => lang.name != language.name);
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";



</style>
