<template>
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
</template>

<script>
export default {
    data: () => ({
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
    ],
    })
}
</script>

<style lang="scss" scoped>
@import "../styles";
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