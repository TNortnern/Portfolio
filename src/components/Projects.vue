<template>
<div class="projects">
    <h1 class="text-center">Portfolio</h1>
    <p class="text-center">My Projects</p>
  <div class="projects__container">
    <FilterLanguages />
    <ProjectItems :included="included" />
  </div>
</div>
</template>

<script>
/* eslint-disable no-console */
import FilterLanguages from "./FilterLanguages";
import ProjectItems from './ProjectItems';
export default {
  components: {
    FilterLanguages,
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
.projects__container {
//   display: grid;
//   grid-template-columns: 20% 80%;
//   height: 700px;
  justify-content: space-between;
    border: 1px solid gray;

}
p {
    color: gray;
}
h1 {
    border-top: 1px solid gray;
    margin: 0px;
    margin-top: 20px;
//   @include main-orange-rgb(0.9);
    padding: 20px 0px;
    color: gray;
}
.projects {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/1/1a/Abstract-background-white-12.jpg');
    background-size: cover;
}


</style>
