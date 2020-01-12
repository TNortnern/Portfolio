<template>
  <div
    class="uk-position-relative uk-visible-toggle uk-light"
    tabindex="-1"
    uk-slideshow
  >
    <ul class="uk-slideshow-items">
      <li v-for="(image, key) in images" :key="key">
        <img
          :src="image"
          alt=""
          uk-cover
        />
      </li>
    </ul>

    <a
      class="uk-position-center-left uk-position-small uk-hidden-hover"
      href="#"
      uk-slidenav-previous
      uk-slideshow-item="previous"
    ></a>
    <a
      class="uk-position-center-right uk-position-small uk-hidden-hover"
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
    }
  }
};
</script>

<style></style>
