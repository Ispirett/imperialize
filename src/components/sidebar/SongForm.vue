<template>
  <div>
    <sui-button @click.native="toggle" slot="trigger" icon="add" size="mini" />

    <sui-modal v-model="open">
      <sui-modal-header>ADD SONG</sui-modal-header>
      <sui-modal-content scrolling image>
        <sui-image wrapped size="medium" :src="image" />
        <sui-modal-description>
          <sui-header>Add a Song</sui-header>

          <sui-form
            enctype="multipart/form-data"
            size="mini"
            v-on:submit.prevent="handleSubmit"
          >
            <sui-form-fields fields="two">
              <sui-form-field>
                <label>SONG TITLE</label>
                <input v-model="title" type="text" placeholder="title" required />
              </sui-form-field>
              <sui-form-field>
                <label>ARTIST</label>
                <input v-model="artist" type="text" placeholder="artist" required/>
              </sui-form-field>
            </sui-form-fields>
            <sui-form-fields fields="two">
              <sui-form-field>
                <label>ALBUM</label>
                <input v-model="album" type="text" placeholder="Album" required />
              </sui-form-field>
              <sui-form-field>
                <label>Image</label>
                <input v-model="image" type="text" placeholder="Image url" required />
              </sui-form-field>
            </sui-form-fields>
            <sui-form-field>
              <label> Add mp3 file</label>
              <input @change="mp3Preview" type="file" />
            </sui-form-field>
            <sui-button type="submit">Submit</sui-button>
          </sui-form>

          <div class="progress">
            <sui-progress
              progress
              :percent="progress"
              v-if="progress < 100 && progress > 0"
            />
            <sui-progress
              state="success"
              progress
              :percent="100"
              v-if="progress === 100"
              label="your song has been uploaded"
            />
          </div>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button positive @click.native="toggle">
          OK
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import {db, storageUploader } from "../../utilities/firebase";

export default {
  name: "SongForm",
  data() {
    return {
      open: false,
      title: "",
      album: "",
      artist: "",
      mp3Url: "",
      image: "https://cdn.wallpapersafari.com/59/59/w3Y0Nx.jpg",
      progress: 0,
      mp3: {}
    };
  },
  methods: {
    handleSubmit() {
      storageUploader(
        { filePath: `all_songs/${this.mp3.name}`,mp3:this.mp3 },
        progress => this.progress = progress,
        url => {
          this.mp3Url = url;
          db.collection("music").add({
            title: this.title,
            artist: this.artist,
            image: this.image,
            album: this.album,
            mp3: this.mp3Url
          });
        }
      );
      this.$store.dispatch('bindMusic')
    },
    mp3Preview(e) {
      this.mp3 = e.target.files[0];
      console.table(this.mp3);
    },
    toggle() {
      this.open = !this.open;
    },
    mp3Duration(duration) {
      let time = "";
      let hours = duration.hours();
      if (hours > 0) {
        time = hours + ":";
      }
      time = time + duration.minutes() + ":" + duration.seconds();
      return time;
    }
  }
};
</script>

<style scoped>
.progress {
  margin-top: 2em;
}
</style>
