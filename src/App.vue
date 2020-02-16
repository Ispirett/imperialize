<template>
  <div id="app">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <left-side-bar/>
     <center-container/>
      <side-bar />
      <player-container/>
  </div>
</template>

<script>

// import UserForm from "./components/UserForm.vue";
import SideBar from "./components/sidebar/SideBar";
import LeftSideBar from "./components/sidebar/LeftSideBar";
import PlayerContainer from "./containers/PlayerCotainer";
import store from './store/index'
import CenterContainer from "./containers/CenterContainer";
export default {
  name: 'App',
    store,
  components: {
      CenterContainer,
      PlayerContainer,
      LeftSideBar,
    SideBar
  }
}
</script>

<style lang="scss">
  body{
    margin: 0;
      background: linear-gradient(-90deg, #1d1d1d, #343434,#1d1d1d,) !important;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: lightgray;
  /*background: rgb(30, 35, 41);*/
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
