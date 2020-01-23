<template>
  <div id="contact" class="contact">
    <form
      action="mailto:traynorthern@yahoo.com?subject=Oppurtunity"
      class="container mx-auto"
    >
      <div>
        <div class="form-group mx-auto">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group mx-auto">
          <label for="name">Name</label>
          <input
            type="name"
            class="form-control"
            aria-describedby="name"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group mx-auto">
          <label for="name">Phone Number</label>
          <input
            type="text"
            class="form-control"
            placeholder="Phone Number(optional)"
          />
        </div>
        <div class="form-group mx-auto">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="3"></textarea>
        </div>
        <div class="mx-auto text-center">
          <button type="submit" class="btn btn-primary">Contact</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/1/1a/Abstract-background-white-12.jpg");
  background-size: cover;
  .form-group {
    width: 60%;
  }
}
</style>
