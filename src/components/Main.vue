<template>
    <div id='Main' >
      <!-- <div class="col s10 offset-s1"> -->
        <nav>
            <div class="nav-wrapper">
                <ul>
                    <li @click="changeFilter" :class="{active: filter.popular}"><a href="#">Popular</a></li>
                    <li @click="changeFilter" :class="{active: filter.upcoming}"><a href="#">Upcoming</a></li>
                    <li @click="changeFilter" :class="{active: filter.inTheaters}"><a href="#">In Theaters</a></li>
                </ul>
            </div>
        </nav>
        
        <div class="movies"> 
            <div @click="toMovie(movie.id)" :key="index" v-for="(movie, index) in selected" class="movie" :style="{'background': 'url('+movie.poster+')'}"></div>
        </div>
        
      <!-- </div> -->
    </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      filter: { popular: true, upcoming: false, inTheaters: false },
      urls: {
        popular:
          "https://api.themoviedb.org/3/movie/popular?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&page=1",
        upcoming:
          "https://api.themoviedb.org/3/movie/upcoming?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&page=1",
        inTheaters:
          "https://api.themoviedb.org/3/movie/now_playing?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&page=1"
      },
      popular: [],
      upcoming: [],
      inTheaters: [],
      selected: []
    };
  },
  computed: {},
  methods: {
    changeFilter(elem) {
      switch (elem.target.innerHTML) {
        case "Popular":
          this.filter.popular = true;
          this.filter.upcoming = false;
          this.filter.inTheaters = false;
          this.selected = this.popular;
          break;
        case "Upcoming":
          this.filter.popular = false;
          this.filter.upcoming = true;
          this.filter.inTheaters = false;
          this.selected = this.upcoming;
          break;
        case "In Theaters":
          this.filter.popular = false;
          this.filter.upcoming = false;
          this.filter.inTheaters = true;
          this.selected = this.inTheaters;
          break;
      }
    },
    fetchData() {
      this.axios.get(this.urls.popular).then(res => {
        this.infoFromFetchedData("popular", res.data.results);
      });
      this.axios.get(this.urls.upcoming).then(res => {
        this.infoFromFetchedData("upcoming", res.data.results);
      });
      this.axios.get(this.urls.inTheaters).then(res => {
        this.infoFromFetchedData("inTheaters", res.data.results);
      });
    },
    infoFromFetchedData(key, arr) {
      arr.forEach(movie => {
        this[key].push({
          id: movie.id,
          title: movie.title,
          poster: "https://image.tmdb.org/t/p/w342" + movie.poster_path,
          releaseDate: movie.release_date
        });
      });
    },
    toMovie(id) {
      this.$router.push({ name: "movie", params: { id: id } });
    }
  },

  created() {
    this.fetchData();
    this.selected = this.popular;
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  margin: 0;
}
li {
  flex-grow: 1;
  text-align: center;
}
.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: rgba(30, 30, 30, 0.7);
  margin-top: 10px;
}
.movie {
  width: 342px;
  height: 513px;
  transition: 0.2s all;
  border-radius: 20px;
  margin-top: 10px;
}
.movie:hover {
  box-shadow: 0 0 20px black;
  cursor: pointer;
}
</style>