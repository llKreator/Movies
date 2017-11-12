<template>
    <div :style="{backgroundImage: 'url('+movieInfo.backdrop+')'}" class="bg row">
        <div class="col s10 offset-s1 container">
          <div class="mainInfo">
            <a target="_blank" class=" poster" :href="movieInfo.homepage"> <img :src="movieInfo.poster" alt="poster" width="400"></a>
            <div class="info">
                <h1>{{movieInfo.title}}</h1>
                <ul>
                    <li >
                        <div class="infoName"><pre>Genre:   </pre></div>
                        <div class="infoValue"> {{movieInfo.genres}}</div>
                    </li>
                    <li>
                      <div class="infoName"><pre>Director:   </pre></div>
                      <div class="infoValue">{{movieInfo.directors}}</div>
                    </li>
                    <li>
                      <div class="infoName"><pre>Writers:   </pre></div>
                      <div class="infoValue">{{movieInfo.writers}}</div>
                    </li>
                    <li v-if="movieInfo.directorsOfPhotography">
                      <div class="infoName"><pre>Cinematographer:   </pre></div>
                      <div class="infoValue">{{movieInfo.directorsOfPhotography}}</div>
                    </li>
                    <li>
                      <div class="infoName"><pre>Composers:   </pre></div>
                      <div class="infoValue">{{movieInfo.composers}}</div>
                    </li>
                    <li>
                      <div class="infoName"><pre>Budget:   </pre></div>
                      <div class="infoValue">{{movieInfo.budget}}</div>
                    </li>
                    <li>
                      <div class="infoName"><pre>Revenue:   </pre></div>
                      <div class="infoValue">{{movieInfo.revenue}}</div>
                    </li>
                    <li>
                      <div class="infoName"><pre>Runtime:   </pre></div>
                      <div class="infoValue">{{movieInfo.runtime}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="additionalInfo">
            <div class="overview">{{movieInfo.overview}}</div>
            <div v-if="movieInfo.cast.length">
              <div class="word">Cast</div>
              <carousel v-if="movieInfo.cast" :perPageCustom="[[1220,5],[970,4],[300,3]]" :scrollPerPage="true">
                <slide :key="index" v-for="(actor, index) in movieInfo.cast" class="carousel-item">
                  <div class="myImgAndVid"><img class="myImg" @click="toActorDetails(actor.id)" :title="actor.name + ' - ' + actor.character" :src="actor.profile" alt=""></div>
                </slide>
              </carousel>
            </div>

            <div v-if="movieInfo.posters.length">
              <div class="word">Posters</div>
              <carousel v-if="movieInfo.posters" :perPageCustom="[[1220,5],[970,4],[300,3]]" :scrollPerPage="true">
                <slide :key="index" v-for="(poster, index) in movieInfo.posters" class="carousel-item">
                  <div class="myImgAndVid"><img class="myImg" :src="poster" alt=""></div>
                </slide>
              </carousel>
            </div>

            <div v-if="movieInfo.backdrops.length">
              <div class="word">Backdrops</div>
              <carousel :perPageCustom="[[100,3]]" :scrollPerPage="true">
                <slide :key="index" v-for="(backdrop, index) in movieInfo.backdrops" class="carousel-item images">
                  <div class="myImgAndVid"><div class="myBackdrop"><img :src="backdrop" alt=""></div></div>
                </slide>
              </carousel>
            </div>
            <div v-if="movieInfo.videos.length">
              <div class="word">Videos</div>
              <carousel :perPage="2" :scrollPerPage="true">
                <slide :key="index" v-for="(link, index) in movieInfo.videos">
                  <div class="myImgAndVid"> <iframe :src="link" frameborder="10" width="500" height="250" allowfullscreen></iframe></div>
                </slide>
              </carousel>
            </div>
            <!-- <iframe id=video-about width="910" height="315" src="https://www.youtube.com/embed/bLHW78X1XeE" frameborder="0" allowfullscreen></iframe> -->
        </div>
    </div>
</div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
      urlToGetMovie:
        "https://api.themoviedb.org/3/movie/" +
        this.$route.params.id +
        "?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US&append_to_response=videos,images,credits&include_image_language=en,null",
      movieInfo: {
        poster: null,
        title: null,
        overview: null,
        releaseDate: null,
        runtime: null,
        voteAverage: null,
        voteCount: null,
        revenue: null,
        budget: null,
        genres: null,
        homepage: null,
        originalLanguage: null,
        backdrop: null,
        directors: null,
        writers: null,
        directorsOfPhotography: null,
        composers: null,
        cast: [],
        backdrops: [],
        posters: [],
        videos: []
      }
    };
  },
  methods: {
    fetchData() {
      this.axios.get(this.urlToGetMovie).then(res => {
        let arr = res.data;
        console.log(arr);
        this.movieInfo.poster =
          "https://image.tmdb.org/t/p/w780" + arr.poster_path;
        this.movieInfo.title = arr.title;
        this.movieInfo.releaseDate = arr.release_date;
        this.movieInfo.overview = arr.overview;
        this.movieInfo.runtime =
          parseInt(arr.runtime / 60) + "h " + arr.runtime % 60 + "m";
        this.movieInfo.voteAverage = arr.vote_average;
        this.movieInfo.voteCount = arr.vote_count;
        this.movieInfo.revenue = arr.revenue.toLocaleString() + " $";
        this.movieInfo.budget = arr.budget.toLocaleString() + " $";
        this.movieInfo.genres = arr.genres.map(g => g.name).join(", ");
        this.movieInfo.homepage = arr.homepage;
        this.movieInfo.originalLanguage = arr.original_language;
        this.movieInfo.backdrop =
          "https://image.tmdb.org/t/p/original" + arr.backdrop_path;
        let dirs = "",
          wrs = "",
          dops = "",
          comps = "";
        arr.credits.crew.map(member => {
          if (member.job === "Director") {
            dirs === "" ? (dirs = member.name) : (dirs += ", " + member.name);
          }
          if (member.department === "Writing") {
            if (wrs.indexOf(member.name) === -1) {
              wrs === "" ? (wrs = member.name) : (wrs += ", " + member.name);
            }
          }
          if (member.job === "Director of Photography") {
            dops === "" ? (dops = member.name) : (dops += ", " + member.name);
          }
          if (
            member.job === "Original Music Composer" ||
            member.job === "Music"
          ) {
            comps === ""
              ? (comps = member.name)
              : (comps += ", " + member.name);
          }
        });
        this.movieInfo.directors = dirs;
        this.movieInfo.writers = wrs;
        this.movieInfo.directorsOfPhotography = dops;
        this.movieInfo.composers = comps;
        arr.credits.cast.forEach(actor => {
          if (actor.profile_path) {
            this.movieInfo.cast.push({
              character: actor.character,
              name: actor.name,
              profile: "https://image.tmdb.org/t/p/w185" + actor.profile_path,
              id: actor.id
            });
          }
        });
        arr.images.backdrops.forEach(img => {
          this.movieInfo.backdrops.push(
            "https://image.tmdb.org/t/p/w300" + img.file_path
          );
        });
        arr.images.posters.forEach(img => {
          this.movieInfo.posters.push(
            "https://image.tmdb.org/t/p/w185" + img.file_path
          );
        });
        arr.videos.results.map(video => {
          this.movieInfo.videos.push(
            "https://www.youtube.com/embed/" + video.key
          );
        });
        console.log(this.movieInfo);
      });
    },
    toActorDetails(id) {
      console.log("ETO ID = " + id);
      this.$router.push({ name: "actorDetails", params: { id } });
    }
  },
  created() {
    this.fetchData();
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
.bg {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  left: 0;
}
.row {
  margin: 0;
}
.container {
  background: rgba(50, 50, 50, 0.8);
}
.mainInfo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 10px;
  padding-top: 20px;
  margin: 0;
  width: 100%;
}

.info {
  width: 60%;
}
.poster {
  margin: 0;
  padding: 0;
}
img {
  border-radius: 10px;
  cursor: pointer;
}
.myImgAndVid {
  width: 185px;
  height: 277px;
  display: block;
  margin: auto;
}
.myImg {
  width: auto;
  height: 100%;
  
}

h1 {
  color: yellow;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 3px;
  font-size: 30px;
  font-weight: bold;
}
ul {
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  overflow: hidden;
}
li {
  display: flex;
  align-items: baseline;
  justify-content: left;
  font-weight: bold;
}
.infoName {
  color: greenyellow;
  font-size: 17px;
  font-weight: bold;
}
.infoValue {
  color: yellowgreen;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.additionalInfo {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.overview {
  color: white;
  width: 90%;
  align-self: center;
  letter-spacing: 1px;
  line-height: 170%;
  text-align: center;
}
.word {
  text-align: center;
  margin-top: 40px;
  font-size: 28px;
  color: greenyellow;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 30px;
}
@media (max-width: 1245px) {
  .info {
    width: 50%;
  }
}
@media (max-width: 735px){
  .myImgAndVid{
    height:200px;
    width: 133px;
  }
}
@media(max-width: 540px){
  .myImgAndVid{
    height:110px;
    width: 73px;
  }
}
</style>