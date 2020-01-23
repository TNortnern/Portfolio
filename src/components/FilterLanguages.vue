<template>
  <div class="filter-languages">
    <h4 class="text-center">Languages</h4>
    <ul>
      <div>
        <li @click="included = [], $parent.included = []" class="projects__filter-name">
          <div>All</div>
           <div>
            <span
              @click="included = [], $parent.included = []"
              v-if="included.length"
              ><i class="far fa-square"></i></span
            >
          </div>
          <div>
            <span
              v-if="!included.length"
              ><i class="fas fa-square"></i></span
            >
          </div>
        </li>
      </div>
      <div v-for="(language, key) in languages" :key="key">
        <li>
          <div
            @click="included = [...included, language], $parent.included = [...$parent.included, language]"
            class="projects__filter-name"
          >
            {{ language.name }}
          </div>
          <div>
            <span
              @click="included = [...included, language], $parent.included = [...$parent.included, language]"
              v-if="included.indexOf(language) == -1"
              ><i class="far fa-square"></i></span
            >
          </div>
          <div>
            <span
              @click="removeAsFilter(language)"
              v-if="included.indexOf(language) !== -1"
              ><i class="fas fa-square"></i></span
            >
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
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
    included: []
  }),
  methods: {
    removeAsFilter(language) {
      this.included = this.included.filter(lang => lang.name != language.name);
      this.$parent.included = this.$parent.included.filter(lang => lang.name != language.name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";
ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
li {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 12px;
  font-size: 20px;
  span {
    @include close-button;
    padding-right: 7px;
  }
}
.projects__filter-name {
  @include clickable;
}
.filter-languages {
    // border: 1px solid gray;
}
h4 {
    font-size: 1.5em;
    padding: 10px;
}
</style>
