<template>
  <div id="center-container">
    <keep-alive>
      <component v-bind:is="centerComponent"></component>
    </keep-alive>
  </div>
</template>

<script>

import AlbumContainer from "./AlbumContainer";
import AllSongsContainer from "./AllSongsContainer";
import HomeContainer from "./HomeContainer";
export default {
  name: "CenterContainer",
  components: {HomeContainer, AllSongsContainer, AlbumContainer},
  computed:{
    centerComponent(){
      return this.$store.state.centerComponent
    }
  }

};
</script>

<style lang="scss" scoped>
  #center-container {
    //grid-column: 2/5;
    grid-area: body;
    /*max-width: 90%;*/
  }


</style>
