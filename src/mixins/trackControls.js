export default {
  data() {
    return {
      cardOneActive: false,
      cardTwoActive: false
    };
  },
  props: {
    image: String,
    mp3: String,
    title: String,
    artist: String,
    album:String,
    time:String,
  },
  methods: {
    playSong() {
      const { commit, state } = this.$store;
      const player = document.getElementById("i-player");
      const playerContainer = document.getElementById("player");
      playerContainer.classList.add("show");
      // store update
      commit('updateCurrentTrack',this.$props);
      commit("updateShowPlayer", true);
      commit("loadSong", this.$props.mp3);
      commit("updateSideBarArtistImage", this.$props.image);
      commit("updateCurrentTime", player.currentTime);
      commit('updatePlayStateImage','https://upload.wikimedia.org/wikipedia/commons/d/dd/Crystal_Project_Player_pause.png')
      const seeker = setInterval(() => {
        console.log("current time");
        commit("updateCurrentTime", player.currentTime);

        if (state.trackDuration === 0) {
          clearInterval(seeker);
          commit('updateIsPlaying')
        }
      }, 1000);

      commit("updateDuration", player.duration);

      player.load();
      player.play();
    },
    title_short(){
      const title = this.$props.title;
      if(title.length > 10){
       return  title.slice(0, 10)
      }
    }
  }
};
