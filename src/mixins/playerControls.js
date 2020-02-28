export default {
  methods: {
    play() {
      const player = document.getElementById("i-player");
      player.play();
      this.$store.commit(
        "updatePlayStateImage",
        "https://upload.wikimedia.org/wikipedia/commons/d/dd/Crystal_Project_Player_pause.png"
      );
      console.log("play", player.duration);
    },
    pause() {
      this.$store.commit(
        "updatePlayStateImage",
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Crystal_Project_Player_play.png"
      );
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
    playPause() {
      const player = document.getElementById("i-player");
      if (player.paused) {
        this.play();
        this.$store.commit("updateIsPlaying");
      } else {
        this.pause();
        this.$store.commit("updateIsPlaying");
      }
    },
    repeat() {
      const player = document.getElementById("i-player");
      this.$store.commit("updateRepeat");
      player.loop = this.$store.state.playerControls.repeat;
      console.info(this.$store.state.playerControls.repeat);
    }
  }
};
