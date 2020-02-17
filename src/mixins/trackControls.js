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

      commit("updateShowPlayer", true);
      commit("loadSong", this.$props.mp3);
      commit("updateSideBarArtistImage", this.$props.image);
      commit("updateCurrentTime", player.currentTime);

      const seeker = setInterval(() => {
        console.log("current time");
        commit("updateCurrentTime", player.currentTime);

        if (state.trackDuration === 0) {
          clearInterval(seeker);
        }
      }, 1000);

      commit("updateDuration", player.duration);
      player.load();
      player.play();
    }
  }
};
