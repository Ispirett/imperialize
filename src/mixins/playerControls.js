export default {
  methods: {
    play() {
      const player = document.getElementById("i-player");
      player.play();
      this.$store.commit('updateIsPlaying');
      console.log("play", player.duration);
    },
    pause() {
      document.getElementById("i-player").pause();
    },
    stop() {
      const player = document.getElementById("i-player");
      player.pause();
      player.currentTime = 0;
      this.$store.commit("updateCurrentTime", 0);
      this.$store.commit("updateDuration", 0);
      this.$store.commit("updateShowPlayer", false);
    },
    repeat(){
      const player = document.getElementById('i-player');
      this.$store.commit('updateRepeat');
      player.loop = this.$store.state.playerControls.repeat;
      console.info(this.$store.state.playerControls.repeat)
    }
  }
};
