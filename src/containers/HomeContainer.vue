<template>
  <section id="wrapper">
    <h1>
      Home
    </h1>
    <hr />

    <div class="music-sections">
      <section class="top-rated">
        <h4>Tops Rated</h4>
        <top-rated
          v-for="song in music"
          v-bind:key="song.id"
          :image="song.image"
          :mp3="song.mp3"
          :title="song.title"
        />
      </section>

      <section class="top-songs">
        <h4>Tops Songs</h4>
        <top-songs
          v-for="song in music"
          v-bind:key="song.id"
          :image="song.image"
          :mp3="song.mp3"
          :title="song.title"
        />
      </section>
    </div>

    <div class="music-sections">
      <section class="new-songs">
        <h4>New Songs</h4>
        <new-songs
          v-for="song in music"
          v-bind:key="song.id"
          :image="song.image"
          :mp3="song.mp3"
          :title="song.title"
        />
      </section>

      <section class="most-played">
        <h4>Most Played</h4>
        <most-played
          v-for="song in music"
          v-bind:key="song.id"
          :image="song.image"
          :mp3="song.mp3"
          :title="song.title"
        />
      </section>
    </div>
  </section>
</template>

<script>
import trackControls from "../mixins/trackControls";
import TopRated from "../components/home/TopRated";
import TopSongs from "../components/home/TopSongs";
import MostPlayed from "../components/home/MostPlayed";
import NewSongs from "../components/home/NewSongs";
export default {
  name: "HomeContainer",
  components: { NewSongs, MostPlayed, TopSongs, TopRated },
  mixins: [trackControls],
  computed: {
    music() {
      return this.$store.state.music;
    }
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  height: 60em;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1em;

  hr {
    margin-bottom: 2em;
  }
}

.top-songs{
    h4{
        color: peru;
    }
}
.top-rated{
    h4{
        color: lightseagreen;
    }
}
.new-songs{
    h4{
        color: lightcoral;
    }
}
.most-played{
    h4{
        color: purple;
    }
}



.music-sections {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid rgba(211, 211, 211, 0.15);
  margin-bottom: 2em;
  padding-bottom: 2em;
}
</style>
