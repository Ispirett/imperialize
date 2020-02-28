import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import { db } from "../utilities/firebase";
import { vuexfireMutations, firestoreAction } from "vuexfire";

export default new Vuex.Store({
  state: {
    centerComponent: "HomeContainer",
    fileSource: "",
    currentTime: 0,
    trackDuration: 0,
    volume: 1,
    leftSideBar: {
      artistImage:
        "https://thegospelguru.com/wp-content/uploads/2017/06/81VIIvooGL._SL1500_.jpg"
    },
    currentAlbum:{
      name:''
    },
    playerControls:{
      repeat: false
    },
    currentTrack: {
      image: "",
      mp3: "",
      title: "",
      artist: "",
      album: "",
      time: ""
    },
    showPlayer: false,

    music: [
      // {
      //   id:1,
      //   image: 'https://resources.tidal.com/images/632ecaef/a635/4bda/9bbf/d3ee320a7c17/320x320.jpg',
      //   mp3:'https://cdns-preview-e.dzcdn.net/stream/c-e1b78fb28633b45fd0a4b35478386198-7.mp3',
      //   title: '',
      //   artist:'',
      //   album:'',
      //   time: ''
      // },
    ],
    album: [],
    albumSongs: []
  },
  mutations: {
    ...vuexfireMutations,
    loadSong(state, file) {
      state.fileSource = file;
    },
    updateSideBarArtistImage(state, image) {
      state.leftSideBar.artistImage = image;
    },
    updateCurrentTime(state, value) {
      state.currentTime = Math.round(value);
    },
    updateDuration(state, value) {
      state.trackDuration = Math.round(value);
    },
    updateShowPlayer(state, value) {
      state.showPlayer = value;
    },
    updateVolume(state, value) {
      state.volume = value;
    },
    updateCenterContainer(state, value) {
      state.centerComponent = value;
    },
    updateMusic(state, songs) {
      state.music = songs;
    },
    updateCurrentTrack(state, track) {
      state.currentTrack = track;
    },
    updateCurrentAlbum(state, name){
      state.currentAlbum.name = name
    },
    updateRepeat(state){
      state.playerControls.repeat = !state.playerControls.repeat
      console.log(state.playerControls.repeat)
    }
  },
  actions: {
    bindMusic: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("music", db.collection("music"));
    }),
    bindAlbumSongs: firestoreAction(({ bindFirestoreRef },albumName) => {
      return bindFirestoreRef("albumSongs", db.collection("music").where('album','==',albumName));
    })

  },
  modules: {}
});
