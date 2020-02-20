<template>
  <div
    class="uk-position-relative uk-visible-toggle uk-light project-slider"
    tabindex="-1"
    uk-slideshow="autoplay: true; autoplay-interval: 1800"
  >
    <ul :class="project.type === 'Mobile Application' ? 'mobile-project' : ''" class="uk-slideshow-items">
      <li v-for="(image, key) in images" :key="key">
        <img
          :src="image"
          alt=""
          uk-cover
        />
      </li>
    </ul>

    <a
      class="uk-position-center-left uk-position-small uk-hidden-hover slider-action"
      href="#"
      uk-slidenav-previous
      uk-slideshow-item="previous"
    ></a>
    <a
      class="uk-position-center-right uk-position-small uk-hidden-hover slider-action"
      href="#"
      uk-slidenav-next
      uk-slideshow-item="next"
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => {}
    },
    project: {
      type: Object,
      default: () => {}
    },
  }
};
</script>

<style lang="scss">
@import '../styles/index.scss';

.mobile-project img {
  width: 100% !important;
  height: 100% !important;
}
</style>
