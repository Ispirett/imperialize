<template>
  <div id="app">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <left-side-bar/>
    <side-bar />
<!--    <user-form/>-->
   <AlbumContainer/>
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

<style>
  body{
    margin: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*margin-top: 60px;*/
  color: white;
  background: rgb(30, 35, 41);
  height: 100vh;

}
.main-bg{
  background: black;
}
</style>
