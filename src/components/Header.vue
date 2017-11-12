<template>
  <div class="green-text text-accent-1 " id=header>
    <h1 class="center-align">Movies</h1>
     <div class="row">
       <form  v-on:submit.prevent="search" action="">
          <div class="input-field col s6 offset-s3 myinp">
            <input v-click-outside="closeSuggestions" autocomplete="off" v-model="myinput" :value="myinput" id="search" type="text" class="validate green-text text-accent-1">
            <label for="search">Search movie</label>
            <transition name="fade">
            <ul v-if="showSuggestions" class="suggestions">
              <li @click="selectSuggestion(s.id)" class="suggestion" :key ="s.id" v-for="s in suggestions">
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
      msg: "Welcome to Your Vue.js App",
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
      // this.showSuggestions = true
      this.myinput === ""
        ? (this.showSuggestions = false)
        : (this.showSuggestions = true);
    }
  },
  methods: {
    search() {
      this.axios.get(this.url).then(res => {
        this.gottenID = res.data.results[0].id;
        console.log(this.gottenID);
        this.toMovie();
      });
    },
    toMovie() {
      console.log(this.gottenID);
      this.$router.push({
        name: "movie",
        params: {
          id: this.gottenID
        }
      });
    },
    closeSuggestions() {
      this.showSuggestions = false;
      console.log(this.showSuggestions);
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
  letter-spacing: 3px;
  margin: 0;
  font-weight: bold;
}

ul {
  list-style-type: none;
  position: absolute;
  width: 400px;
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

a {
  color: #42b983;
}
.fade-leave-active {
  transition: opacity .5s
}
.fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0
}
</style>
