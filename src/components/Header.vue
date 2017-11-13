<template>
  <div class="green-text text-accent-1 " id=header>
    <!-- <h1 class="center-align">Movies</h1> -->
    <a href="#"><img class="logo" width="100" src="https://www.themoviedb.org/assets/static_cache/9b3f9c24d9fd5f297ae433eb33d93514/images/v4/logos/408x161-powered-by-rectangle-green.png" alt=""></a>
    <h1>Movies</h1>
     <div class="row">
       <form  v-on:submit.prevent="search" action="">
          <div class="input-field col m6 s12 offset-m3 myinp">
            <input v-click-outside="closeSuggestions" autocomplete="off" v-model="myinput" :value="myinput" id="search" type="text" class="validate green-text text-accent-1">
            <label for="search">Search movie</label>
            <transition name="fade">
            <ul v-if="showSuggestions">
              <li @click="selectSuggestion(s.id)"  :key ="s.id" v-for="s in suggestions">
                <img :src="s.poster" width="70px" height="100px" alt=""><div class="titleSuggestion">{{s.title}}</div>
              </li>
            </ul>
            </transition>
            <button class="btn waves-effect waves-light" type="submit" name="action">Search
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
        
      </div>
            
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "Header",
  data() {
    return {
      myinput: "",
      gottenID: null,
      suggestions: [],
      showSuggestions: false
    };
  },
  computed: {
    url: function() {
      return (
        "https://api.themoviedb.org/3/search/movie?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&query=" +
        this.myinput +
        "&page=1&include_adult=true"
      );
    }
  },
  watch: {
    url: function(newURL) {
      this.suggestions = [];
      this.axios.get(newURL).then(res => {
        let r = res.data.results;
        for (let i = 0; i < 5; i++) {
          if (r[i] && r[i].title) {
            this.suggestions.push({
              title: r[i].title,
              poster: "https://image.tmdb.org/t/p/w92" + r[i].poster_path,
              id: r[i].id
            });
          }
        }
      });
      this.myinput === ""
        ? (this.showSuggestions = false)
        : (this.showSuggestions = true);
    }
  },
  methods: {
    search() {
      this.axios.get(this.url).then(res => {
        this.gottenID = res.data.results[0].id;
        this.toMovie();
      });
    },
    toMovie() {
      this.$router.push({
        name: "movie",
        params: {
          id: this.gottenID
        }
      });
    },
    closeSuggestions() {
      this.showSuggestions = false;
    },
    selectSuggestion(id) {
      this.gottenID = id;
      this.toMovie();
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style scoped>
#header {
  background: rgba(30, 30, 30, 0.7);
}
.myinp {
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: relative;
}
.row {
  margin: 0;
}
h1 {
  letter-spacing: 5px;
  margin: 0;
  font-weight: bold;
  text-align: center;
  padding-top: 40px;
}

ul {
  list-style-type: none;
  position: absolute;
  width: 72%;
  max-height: 510px;
  overflow: hidden;
  top: 50px;
  margin: 0;
  right: 26%;
  z-index: 10;
  background: rgba(50, 50, 50, 0.7);
  border-radius: 5px;
}

li {
  z-index: 10;
  display: flex;
  border-bottom: 2px solid black;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
  letter-spacing: 3px;
}
li:hover {
  background: rgba(50, 50, 50, 0.4);
  color: greenyellow;
}
.titleSuggestion {
  align-self: center;
  margin-left: 20px;
}
img {
  z-index: 10;
}
.logo{
  margin-left:10px;
  padding-top: 10px;
  position: fixed;
}
a {
  color: #42b983;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
@media (max-width: 600px) {
  ul {
    max-height: 306px;
    overflow-y: scroll;
  }
}
</style>
