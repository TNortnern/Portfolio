<template>
  <div id="about" class="about">
    <div class="container">
      <h1 data-aos="zoom-in">About</h1>
      <div>
        <div data-aos="fade-in" class="about__text">
         Hello I'm Trayvon Northern, the Web Developer. I'm a <a href="#awards" class="scrollactive-item">award winning</a> Computer Science graduate. I enjoy programming and solving problems. I prefer the frontend as
         I'm more of a visual person but definitely not limited to only frontend. I want to keep growing as a Developer so in my free time, I create side-projects to learn new technologies.
        </div>
      </div>
      <div class="d-flex justify-content-center about__experience">
        <div>
          <div data-aos="fade-left" class="about__experience-item">
            <div>
              <img
                src="https://i.imgur.com/OO5J9Yo.png"
                alt="professional"
              />
            </div>
            <div>
              <h2>Professional Experience</h2>
              <p>- 6 months internship at Marlin Network</p>
            </div>
          </div>
          <div data-aos="fade-right" class="about__experience-item">
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
          <div id="awards" data-aos="fade-up" class="about__experience-item">
            <div >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Circle-icons-trophy_%28dark%29.svg/512px-Circle-icons-trophy_%28dark%29.svg.png"
                alt=""
              />
            </div>
            <div >
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
  padding-bottom: 30px;
  background-color: #232122;
  color: white;
  h2,
  h1 {
    color: white;
  }
  h2 {
    border: none;
    padding-left: 25px;
  }
  a {
    color: white;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
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
