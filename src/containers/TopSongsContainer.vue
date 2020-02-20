<template>
  <div class="itemContainer">
    <h2 class="title">The best New Release</h2>
    <div class="card-container">
      <sui-card-group :items-per-row="6" class="doubling card-group">
        <album-item-small
          v-for="song in music"
          v-bind:key="song.id"
          :image="song.image"
          :title="song.title"
          :artist="song.artist"
          :mp3="song.mp3"
          :album="song.album"
        />
      </sui-card-group>
    </div>
  </div>
</template>

<script>
import AlbumItemSmall from "../components/AlbumItemSmall";
export default {
  name: "TopSongsContainer",
  computed: {
    music() {
      return this.$store.state.music;
    }
  },
  components: { AlbumItemSmall }
};
</script>

<style scoped>
.card-container {
  width: 100em;
  padding: 0.5em;
  overflow-x: auto;
  overflow-y: hidden;
}
.itemContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /*width: 70em;*/
  padding-top: 2em;
  padding-left: 1em;
  padding-right: 1em;
  /*margin: 0 auto;*/
}
.card-group {
}

</style>
