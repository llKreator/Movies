<template>
<div class="bg">
    <div class="col s10 offset-s1 container">
        <img :src="actorPicture" alt="">
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
.container {
  background: rgba(50, 50, 50, 0.8);
  display: flex;
  justify-content: space-around;
}
img {
  border-radius: 20px;
  max-height: 632px;
}
.info {
  flex-basis: 50%;
  text-align: center;
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
}
</style>