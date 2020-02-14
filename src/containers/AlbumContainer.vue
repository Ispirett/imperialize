<template>
  <div id="albums">
    <album-item-small/>
    <h1>New albums & Singles</h1>

    <sui-card-group :items-per-row="5" class="card-group" v-for="song in music" v-bind:key="song.id" >
      <album-item :image="song.image" :mp3="song.mp3"/>
<!--      <album-item image="https://thegospelguru.com/wp-content/uploads/2017/06/81VIIvooGL._SL1500_.jpg"/>-->
<!--      <album-item image="https://thegospelguru.com/wp-content/uploads/2017/06/600x600bb-2.jpg"/>-->
<!--      <album-item image="https://thegospelguru.com/wp-content/uploads/2012/08/309251_378998475505018_1040037128_n.jpg"/>-->
<!--      <album-item image="https://lasentinel.net/wp-content/uploads/sites/5/2016/02/rel-deonkipping-album-cover.jpg"/>-->

<!--      <album-item image="https://resources.tidal.com/images/632ecaef/a635/4bda/9bbf/d3ee320a7c17/320x320.jpg"/>-->
<!--      <album-item image="https://thegospelguru.com/wp-content/uploads/2017/06/81VIIvooGL._SL1500_.jpg"/>-->
<!--      <album-item image="https://thegospelguru.com/wp-content/uploads/2017/06/600x600bb-2.jpg"/>-->
<!--      <album-item image="https://thegospelguru.com/wp-content/uploads/2012/08/309251_378998475505018_1040037128_n.jpg"/>-->
<!--      <album-item image='https://i.pinimg.com/236x/aa/ef/ca/aaefca82ca863724322faf2c4ff3e606&#45;&#45;gospel-music-radios.jpg'/>-->

<!--      <album-item image="https://resources.tidal.com/images/632ecaef/a635/4bda/9bbf/d3ee320a7c17/320x320.jpg"/>-->
<!--      <album-item image="https://thegospelguru.com/wp-content/uploads/2017/06/81VIIvooGL._SL1500_.jpg"/>-->
<!--      <album-item image="https://thegospelguru.com/wp-content/uploads/2017/06/600x600bb-2.jpg"/>-->
<!--      <album-item image="https://thegospelguru.com/wp-content/uploads/2012/08/309251_378998475505018_1040037128_n.jpg"/>-->
<!--      <album-item image='https://i.pinimg.com/236x/aa/ef/ca/aaefca82ca863724322faf2c4ff3e606&#45;&#45;gospel-music-radios.jpg'/>-->



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
