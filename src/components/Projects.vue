<template>
  <div class="projects">
    <FilterLanguages />
    <!-- {{included}} -->
    <!-- {{ filteredProjects }} -->
    <!-- <button class="button button-primary" @click="checkProjs">check projs</button> -->
    <div class="project-items">
        
      <div
        v-for="(project, key) in projects"
        :key="key"
        class="card"
        style="width: 18rem;"
      >
        <div class="card-image">
          <img :src="project.images[0]" class="card-img-top" alt="..." />
          <div class="card-action" style="">Click to View</div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <p class="card-text">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import FilterLanguages from "./FilterLanguages";

export default {
  components: {
    FilterLanguages
  },
  data: () => ({
    languages: [
      { name: "HTML/CSS", image: "/" },
      { name: "Vanilla JavaScript", image: "/" },
      { name: "Vanilla PHP", image: "/" },
      { name: "Laravel", image: "/" },
      { name: "Vue", image: "/" },
      { name: "React", image: "/" },
      { name: "React Native", image: "/" },
      { name: "SCSS", image: "/" }
    ],
    projects: [
      {
        name: "Northern's Factory",
        description: "lorem ipsum",
        images: [
          "https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png",
          "https://vuejsexamples.com/content/images/2017/10/Vue-Awesome.gif"
        ],
        technologies: ["PHP", "HTML/CSS", "Vanilla JavaScript"]
      },
      {
        name: "Northern's Factory",
        description: "lorem ipsum",
        images: [
          "https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png",
          "https://vuejsexamples.com/content/images/2017/10/Vue-Awesome.gif"
        ],
        technologies: ["PHP", "HTML/CSS", "Vanilla JavaScript"]
      },
      {
        name: "Northern's Factory",
        description: "lorem ipsum",
        images: [
          "https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png",
          "https://vuejsexamples.com/content/images/2017/10/Vue-Awesome.gif"
        ],
        technologies: ["PHP", "HTML/CSS", "Vanilla JavaScript"]
      },
      {
        name: "Northern's Factory",
        description: "lorem ipsum",
        images: [
          "https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png",
          "https://vuejsexamples.com/content/images/2017/10/Vue-Awesome.gif"
        ],
        technologies: ["PHP", "HTML/CSS", "Vanilla JavaScript"]
      },
      {
        name: "Northern's Factory",
        description: "lorem ipsum",
        images: [
          "https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png",
          "https://vuejsexamples.com/content/images/2017/10/Vue-Awesome.gif"
        ],
        technologies: ["PHP", "Laravel", "Vanilla JavaScript"]
      },
      {
        name: "Northern's Factory",
        description: "lorem ipsum",
        images: [
          "https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png",
          "https://vuejsexamples.com/content/images/2017/10/Vue-Awesome.gif"
        ],
        technologies: ["PHP", "HTML/CSS", "Vanilla JavaScript"]
      },
      {
        name: "Northern's Factory",
        description: "lorem ipsum",
        images: [
          "https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png",
          "https://vuejsexamples.com/content/images/2017/10/Vue-Awesome.gif"
        ],
        technologies: ["PHP", "Vanilla JavaScript"]
      },
      {
        name: "Northern's Factory",
        description: "lorem ipsum",
        images: [
          "https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png",
          "https://vuejsexamples.com/content/images/2017/10/Vue-Awesome.gif"
        ],
        technologies: ["Vanilla PHP", "HTML/CSS", "Vanilla JavaScript"]
      },
      {
        name: "Northern's Factory",
        description: "lorem ipsum",
        images: [
          "https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png",
          "https://vuejsexamples.com/content/images/2017/10/Vue-Awesome.gif"
        ],
        technologies: ["PHP", "HTML/CSS", "Vanilla JavaScript"]
      }
      //   {
      //     name: "Portfolio1",
      //     description: "lorem ipsum",
      //     images: ["img1, img2"],
      //     technologies: ["VueJS", "HTML/CSS", "SCSS"]
      //   }
    ],
    included: []
  }),
  methods: {
    removeAsFilter(language) {
      this.included = this.included.filter(lang => lang.name != language.name);
    },
    checkProjs () {
        const projs = this.included.forEach(i => {
            // const found = .some(r=> arr2.indexOf(r) >= 0)
            // console.log(found)
            // console.log(p.technologies)
        //    if (i.name(t => this.included.includes(t))) {
        //        return i
        //    }
        this.projects.forEach(p => {
            p.technologies.forEach(t => {
                if (t == i.name) {
                    return p
                }
            })
        });
       })
       return projs
    }
  },
  computed: {
    filteredProjects() {
    //    let items = []
       const projs = this.projects.forEach(p => {
           if (p.technologies.some(t => this.included.includes(t))) {
               return p
           }
       })
       return projs
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";
.projects {
  display: grid;
  grid-template-columns: 20% 80%;
}
.project-items {
  display: flex;
  flex-wrap: wrap;
  img {
    width: 100%;
  }
}
img {
  height: 100px;
  width: 100px;
}
.card-image {
  &:hover {
    .card-action {
      opacity: 1;
    }
  }
}
.card-action {
  background-color: rgba(20, 20, 20, 0.596);
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: $default-timing;
  opacity: 0;
  color: white;
  font-size: 20px;
  cursor: pointer;
}
</style>
