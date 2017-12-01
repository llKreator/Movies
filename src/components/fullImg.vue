<template>
    <modal :clickToClose="false" name='modal' width="100%" height="100%">
        <img :src="$route.params.link" alt="" class="img">
    </modal>
</template>

<script>
export default {
  mounted() {
    this.$modal.show("modal");
  }
};
</script>

<style scoped>
.img {
  max-height: 100vh;
  max-width: 100vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>