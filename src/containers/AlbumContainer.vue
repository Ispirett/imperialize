<template>
  <div id="albums">
    <album-item-small/>
    <h1>New albums & Singles</h1>

    <sui-card-group :items-per-row="5" class="card-group"  >
      <album-item v-for="song in music"
                  v-bind:key="song.id"
                  :image="song.image"
                  :mp3="song.mp3"
                  :title="song.title"
                  :artist="song.artist"
      />




    </sui-card-group>


  </div>
</template>

<script>
// import {mapGetters, mapActions} from 'vuex'
import AlbumItem from "../components/AlbumItem";
import AlbumItemSmall from "../components/sidebar/AlbumItemSmall";

// import Album from "../components/Album";

export default {
  name: "AlbumContainer",
  computed:{
    music(){
      console.table(this.$store.state.music)
      return this.$store.state.music
    }
  },
  props: {
    user: Object
  },
  components: {
    AlbumItemSmall,
    AlbumItem



  }
};
</script>

<style scoped>
  #albums {
    max-width: 62%;
    margin: 0 auto;
    height: 60em;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .card-group{
    padding: 1em;
  }
 h1{
   padding-top: 2em;
 }

</style>
