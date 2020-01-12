<template>
  <div>
    <transition-group name="fade" class="project-items">
      <div
        v-for="(project, key) in filteredProjects"
        :key="key"
        class="card"
        style="width: 23%;"
      >
        <ProjectModal v-if="modalItem" :project="modalItem" />
        <div
          class="card-action"
          href="#modal-sections"
          @click="modalItem = project"
          uk-toggle
        >
          <!-- Click to View -->
        </div>
        <div class="card-image">
          <img :src="project.images[0]" class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <p class="text-center">{{ project.type }}</p>
          <!-- <p class="card-text">
            {{ closeOff(project.description, 80, '...') }}
          </p> -->
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import ProjectModal from "./ProjectModal";
import projects from "../data/projects";
export default {
  components: {
    ProjectModal
  },
  props: {
    included: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    projects: projects,
    modalItem: null
  }),
  methods: {
    closeOff(str, length, ending) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = "...";
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    }
  },
  computed: {
    filteredProjects() {
      if (!this.included.length) {
        return this.projects;
      }
      const names = this.included.flatMap(e => e.name);
      const result = this.projects.filter(({ technologies }) =>
        technologies.some(t => names.includes(t))
      );
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";
.project-items {
  display: flex;
  flex-wrap: wrap;
  //   height: 700px;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  img {
    width: 100%;
  }
}
img {
  height: auto;
  max-height: 150px;
  width: 100%;
}
.card {
  &:hover {
    transform: scale(1.08);
    .card-action {
      opacity: 1;
      height: 100%;
    }
  }
}
.card-action {
  @include main-orange-rgb(0.863);
  height: 0px;
  position: absolute;
  width: 100%;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: $default-timing;
  opacity: 0;
  color: white;
  font-size: 1.5em;
  cursor: zoom-in;
}
.card {
  transition: $default-timing;
  max-height: 320px;
  margin: 15px 7px;
  box-shadow: 0 20px 60px 0 rgba(0, 0, 0, 0.15);
  cursor: zoom-in;
  p {
    color: $orange-color;
    font-size: 1.2em;
  }
}
.w-100 {
  width: 100%;
}
.card-title {
  font-size: 1.6em;
  padding: 8px;
  text-align: center;
  border-top: 1px dotted black;
  border-bottom: 1px dotted black;
}
</style>
