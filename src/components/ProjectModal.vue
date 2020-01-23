<template>
  <div>
    <div id="modal-sections" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close @click="$parent.modalItem = null"></button>
        <div class="uk-modal-header">
          <h2 class="uk-modal-title">{{ project.name }}</h2>
        </div>
        <div class="uk-modal-body">
          <ProjectSlider :project="project" :images="project.images" />
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
          <a target="__blank" :href="project.links.hosted" class="uk-button uk-button-primary" type="button">
            View Project
          </a>
          <a target="__blank" :href="project.links.code" class="uk-button uk-button-primary" type="button">
            View Code
          </a>
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
@import '../styles/index.scss';
.uk-button {
  margin: 0px 5px;
   @include small('down') {
     margin: 4px 5px;
  }
}
.uk-body {
    padding: 0px;
}
ul {
   list-style: none;
}

.a.uk-button {
  color: white;
}

.uk-modal {
  z-index: 1500;
}

.uk-modal-dialog {
  @include small('down') {

  }
}

</style>
