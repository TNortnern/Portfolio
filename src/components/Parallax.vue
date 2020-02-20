<template>
  <div
    class="uk-height-large uk-background-cover uk-light uk-flex"
    uk-parallax="bgy: -300"
    :style="`background-image: url('${img}'); height: 600px`"
  ></div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ""
    }
  }
};
</script>

<style></style>
