<template>
  <div>
    <transition-group name="fade" class="project-items">
      <div v-for="(project, key) in filteredProjects" :key="key" class="card">
        <ProjectModal v-if="modalItem" :project="modalItem" />
        <div
          class="card-action"
          href="#modal-sections"
          @click="modalItem = project"
          uk-toggle
        >
          <span class="project-items-click-text">
          Press Again to View
          </span>
        </div>
        <div class="card-image">
          <img :src="project.images[0]" class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <h5 class="text-center project-subtitle">Type:</h5>
          <p class="text-center project-type">{{ project.type }}</p>
          <h5 class="text-center project-subtitle">Technologies:</h5>
          <div class="d-flex justify-content-center align-content-center">
            <span
              v-for="(tech, key) in project.technologies"
              :key="key"
              class="text-center"
              >{{ tech }}
            </span>
          </div>
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
.project-subtitle {
  font-size: 1.3em;
}

.card-action {
  @include theme-color-rgb(0.863);
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
  width: 24%;
  &:hover {
    transform: scale(1.02);
    .card-action {
      opacity: 1;
      height: 100%;
    }
  }
  transition: $default-timing;
  height: 500px;
  margin: 15px 7px;
  box-shadow: 0 20px 60px 0 rgba(0, 0, 0, 0.15);
  cursor: zoom-in;
  .project-type {
    color: $theme-color;
    font-size: 1.1em;
  }
  @include large("down") {
    min-width: 46%;
    height: 600px;
  }
  @include small("down") {
    width: 70%;
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
p,
span {
  color: $theme-color;
}
span {
  margin: 0px 5px;
}
.project-items-click-text {
  opacity: 0;
  @include medium('down') {
    opacity:1;
    color: white;
  }
}
</style>
