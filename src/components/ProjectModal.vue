<template>
  <div>
    <div id="modal-sections" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close @click="$parent.modalItem = null"></button>
        <div class="uk-modal-header">
          <h2 class="uk-modal-title">{{ project.name }}</h2>
        </div>
        <div class="uk-modal-body">
          <ProjectSlider :images="project.images" />
        </div>
        <div class="uk-modal-footer uk-text-center">
          <p>Technologies:</p>
          <ul class="d-flex">
            <li class="project-tech" v-for="(t, key) in project.technologies" :key="key">
              {{ t }} <LanguageLogo :containerstyle="'d-flex justify-content-center'" :styles="'language-logo-sm'" :language="t" />
            </li>
          </ul>
          <p>Description:</p>
          <p>
            {{ project.description }}
          </p>
          <button class="uk-button uk-button-primary" type="button">
            View Project
          </button>
          <button class="uk-button uk-button-primary" type="button">
            View Code
          </button>
          <button
            class="uk-button uk-button-default uk-modal-close"
            type="button"
            @click="$parent.modalItem = null"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectSlider from "./ProjectSlider";
import LanguageLogo from './LanguageLogo'
export default {
  components: {
    ProjectSlider,
    LanguageLogo
  },
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.uk-button {
  margin: 0px 5px;
}
.uk-body {
    padding: 0px;
}
ul {
   list-style: none;
}

</style>
