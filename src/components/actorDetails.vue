<template>
<div class="bg">
    <div class="container">
       <a href="http://localhost:8080/#/"><img class="logo" width="100" src="https://www.themoviedb.org/assets/static_cache/9b3f9c24d9fd5f297ae433eb33d93514/images/v4/logos/408x161-powered-by-rectangle-green.png" alt=""></a>
        <img class="picture" :src="actorPicture" alt="">
        <div class="info">
            <div class="name">{{name}}</div>
            <div class="birthday"><b>Born at:</b> {{birthday}}</div>
            <div v-if="deathday"><b>Died at:</b> {{deathday}}</div>
            <div class="bio">{{biography}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      detailsURL:
        "https://api.themoviedb.org/3/person/" +
        this.$route.params.id +
        "?api_key=f6785433329d39cecf1524248ac70a0f&language=en-US",
      biography: null,
      birthday: null,
      deathday: null,
      name: null,
      actorPicture: null
    };
  },
  methods: {
    fetchData() {
      this.axios.get(this.detailsURL).then(res => {
        console.log(res);
        let r = res.data;
        this.biography = r.biography;
        this.deathday = r.deathday;
        this.birthday = r.birthday;
        this.name = r.name;
        this.actorPicture = "https://image.tmdb.org/t/p/h632" + r.profile_path;
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
.bg {
  background: rgba(80,120,80,0.2);
}
.logo{
  margin-left:71%;
  padding-top: 10px;
  position: fixed;
  z-index: 100;
}
.container {
  background: rgba(50, 50, 50, 0.8);
  display: flex;
  justify-content: space-around;
  width: 80%;
}
.picture {
  border-radius: 20px;
  max-width:421px;
  max-height: 632px;
  align-self: top;
  margin-top: 20px;
}
.info {
  flex-basis: 50%;
  text-align: center;
  margin-top: 30px;
}
.name {
  color: greenyellow;
  font-size: 24px;
  letter-spacing: 3px;
  font-weight: bold;
  margin-top: 20px;
}
.birthday {
  color: yellowgreen;
}
.bio {
  color: white;
  margin-top: 25px;
  line-height: 200%;
  letter-spacing: 1px;
  text-align: left;
}
@media (max-width:1100px){
  .container{
    width: 90%;
  }
}
@media (max-width:950px){
  .container{
    flex-direction: column;
  }
  .picture{
    align-self: center;
  }
  .bio{
    width: 97%;
    margin-left: 5px;
  }
}
@media (max-width:500px){
  .container{
    width: 100%;
  }
  .picture{
    width: 300px;
  }
}
@media (max-width:365px){
  .logo{
    margin-left: 65%;
  }
}
</style>