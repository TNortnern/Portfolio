<template>
  <div class="projects">
    <FilterLanguages />
    <ProjectItems />
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
.projects {
  display: grid;
  grid-template-columns: 20% 80%;
}

</style>
