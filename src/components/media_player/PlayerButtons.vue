<template>
  <div id="media-container">
    <div id="media-buttons">

      <input
        type="image"
        src="https://pngimage.net/wp-content/uploads/2018/05/button-stop-png.png"
        v-on:click="stop()"
        id="stop_button"
      />

      <input
              type="image"
              v-bind:src="playStateImage"
              v-on:click="playPause"
              id="play_button"
      />

      <button id="repeat-button" @click="repeat()" v-bind:class="buttonActive">
        <sui-icon name="repeat" size="large"/>
      </button>



    </div>
    <div id="media-seek">
      <span id="seek-current-time">
       0 : {{currentTime}}
      </span>
      <input type="range" id="seek" step="0.01" min="0" :max="trackDuration" :value="currentTime" />
      <span id="seek-duration">0 : {{trackDuration}}</span>
    </div>
  </div>
</template>

<script>
import playerControls from "../../mixins/playerControls";
export default {
  name: "PlayerButtons",
  computed:{
    currentTime(){
      return this.$store.state.currentTime
    },
    trackDuration(){
      return this.$store.state.trackDuration
    },
    buttonActive(){
      if(this.$store.state.playerControls.repeat){
        return "active"
      }
      else{
        return ""
      }
    },
    playStateImage(){
      return this.$store.state.playerControls.playStateImage
    }

  },
  mixins:[playerControls],
};
</script>

<style lang="scss" scoped>
  .active{
    color: #155480 !important;
  }
#media-container {
  /*margin-left: 5em;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #media-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
  }

  #seek {
    outline: none;
    -webkit-appearance: none;
    background: #1d1d1d;
    height: 8px;
    width: 70em;
    border-radius: 1em;
    &::-webkit-slider-thumb {
      box-shadow: 0px 0px 0px #000000;
      border: 0 solid #000000;
      height: 5px;
      width: 8px;
      border-radius: 12px;
      background: rgba(82, 157, 225, 0.96);
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -3px;
    }
  }
}
#seek-current-time{
  margin-right: 1em;
}
#seek-duration{
  margin-left: 1em;
}
input[type="image"]
{
  float:left;
  height:35px;
  margin-left:2px;
  margin-right:5px;
  margin-top:2px;
}
  #play_button{
    height: 40px;
  }

  #repeat-button{
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }
</style>
