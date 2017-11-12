<template>
<div :style="{backgroundImage: 'url(' + background + ')'}" class='bg'>
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
        "https://api.themoviedb.org/3/movie/popular?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&page=1"
    };
  },
  methods: {
    getPopular() {
      this.axios.get(this.url).then(res => {
        this.background =
          "https://image.tmdb.org/t/p/original" +
          res.data.results[0].backdrop_path;
        console.log(res.data.results[0].backdrop_path);
      });
    }
  },
  created() {
    this.getPopular();
  }
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
  left: 0;
  overflow: hidden;
}
.container{
  padding: 0;
  margin: 0;
}
</style>