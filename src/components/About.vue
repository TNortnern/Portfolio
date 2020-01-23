<template>
  <div id="about" class="about">
    <div class="container">
      <h1>About</h1>
      <div>
        <div class="about__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat vitae
          consequatur expedita ab labore iusto culpa nostrum incidunt, illum
          atque suscipit reiciendis? Animi quidem, ad ducimus repellat cum
          accusantium deleniti et nemo dicta, sed inventore sunt quasi,
          distinctio dignissimos deserunt? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis, quis praesentium beatae ipsa
          sit debitis accusantium quam eligendi totam quo qui magni,
          voluptatibus quod aliquam laboriosam magnam optio recusandae hic
          repellat quos sapiente minima. Repellendus nesciunt consectetur quos
          id! Ipsa?
        </div>
      </div>
      <div class="d-flex justify-content-center about__experience">
        <div>
          <div class="about__experience-item">
            <div>
              <img
                src="http://res.publicdomainfiles.com/pdf_view/95/13946356211860.png"
                alt=""
              />
            </div>
            <div>
              <h2>Professional Experience</h2>
              <p>- 6 months internship at Marlin Network</p>
            </div>
          </div>
          <div class="about__experience-item">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2012/04/28/18/48/mark-43972_960_720.png"
                alt=""
              />
            </div>
            <div>
              <h2>Certifications</h2>
              <ul>
                <li>- 98-383:MTA Programming using HTML and CSS</li>
                <li>- 98-384:MTA Programming use JavaScript</li>
                <li>- 98-386:MTA: Programming using MySQL</li>
              </ul>
            </div>
          </div>
          <div class="about__experience-item">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Circle-icons-trophy_%28dark%29.svg/512px-Circle-icons-trophy_%28dark%29.svg.png"
                alt=""
              />
            </div>
            <div>
              <h2>Awards</h2>
              <p>- Hack 4 Good MO 1st place</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";
.about {
  background-color: $theme-color;
  color: white;
  h2,
  h1 {
    color: white;
  }
  h2 {
    border: none;
    padding-left: 25px;
  }
  img {
    // border-radius: 50%;
    //   width: 80%;
  }
}
.about__experience {
  margin-top: 40px;
  ul {
    list-style: none;
  }
}
.about__experience-item {
  display: flex;
  margin-top: 20px;
  p {
    padding-left: 20px;
  }
  img {
    width: 300px;
  }
  @include medium("down") {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
