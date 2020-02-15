<template>
  <div id="app">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <left-side-bar/>
     <AlbumContainer/>
      <side-bar />
      <player-container/>
  </div>
</template>

<script>
import AlbumContainer from "./containers/AlbumContainer";
// import UserForm from "./components/UserForm.vue";
import SideBar from "./components/sidebar/SideBar";
import LeftSideBar from "./components/sidebar/LeftSideBar";
import PlayerContainer from "./containers/PlayerCotainer";
import store from './store/index'
export default {
  name: 'App',
    store,
  components: {
      PlayerContainer,
      LeftSideBar,
    AlbumContainer,
    SideBar
  }
}
</script>

<style lang="scss">
  body{
    margin: 0;
    /*max-height: 100vh;*/
   background: rgb(30, 35, 41) !important;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
  background: rgb(30, 35, 41);
  display: grid;

    grid-template-columns: 20em 97em 20em;
    grid-template-areas:
            'leftsidebar  body   sidebar'
            'leftsidebar  body sidebar'
            /*'player player player ';*/



}
.main-bg{
  background: black;
}
</style>
