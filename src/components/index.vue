<template>
  <div :style="{backgroundImage: isMobile ? '' : 'url(' + background + ')'}" :class="['bg', isMobile ? 'bgMobile' : 'bgDesktop']">
    <div class="row">
      <div class="container col m10 s12 offset-m1 ">
        <my-header></my-header>
        <my-main></my-main>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./Header";
import MyMain from "./Main";

export default {
  name: "index",
  components: {
    MyHeader,
    MyMain
  },
  data() {
    return {
      background: null,
      url:
        "https://api.themoviedb.org/3/movie/popular?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&page=1",
      isMobile: window.innerWidth < 700
    };
  },
  methods: {
    getPopular() {
      this.axios.get(this.url).then(res => {
        this.background =
          "https://image.tmdb.org/t/p/original" +
          res.data.results[0].backdrop_path;
      });
    }
  },
  created() {
    if (!this.isMobile) {
      this.getPopular();
    }
  }
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  left: 0;
  overflow: hidden;
}
.bgDesktop{
  background-size: cover;
  background-attachment: fixed;
}
.bgMobile{
  background: #28292b;
}
.container {
  padding: 0;
  margin: 0;
}
</style>