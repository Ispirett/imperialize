import Vue from 'vue'
import Vuex from 'vuex'
// import player from "./modules/player";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fileSource: 'https://cdns-preview-e.dzcdn.net/stream/c-e1b78fb28633b45fd0a4b35478386198-7.mp3',
    currentTime: 0,
    trackDuration: 0,
    leftSideBar: {
      artistImage:'https://thegospelguru.com/wp-content/uploads/2017/06/81VIIvooGL._SL1500_.jpg'
    },
    showPlayer: false,

    music:[
      {
        id:1,
        image: 'https://resources.tidal.com/images/632ecaef/a635/4bda/9bbf/d3ee320a7c17/320x320.jpg',
        mp3:'https://cdns-preview-e.dzcdn.net/stream/c-e1b78fb28633b45fd0a4b35478386198-7.mp3',
        title: '',
        artist:''
      },
      {
        id:2,
        image: 'https://thegospelguru.com/wp-content/uploads/2017/06/81VIIvooGL._SL1500_.jpg',
        mp3:'https://cdns-preview-f.dzcdn.net/stream/c-ff9f084e407a0a52c42cc61d3700e629-8.mp3',
      },
      {
        id:3,
        image: 'https://thegospelguru.com/wp-content/uploads/2017/06/600x600bb-2.jpg',
        mp3:'https://cdns-preview-6.dzcdn.net/stream/c-68b713c1b295d08eff48ef73a331bc8c-5.mp3',
      },
      {
        id:4,
        image: 'https://thegospelguru.com/wp-content/uploads/2012/08/309251_378998475505018_1040037128_n.jpg',
        mp3:'https://cdns-preview-4.dzcdn.net/stream/c-4afe9f585865cbfa80283c06064c1da2-4.mp3',
      },
      {
        id:5,
        image: 'https://lasentinel.net/wp-content/uploads/sites/5/2016/02/rel-deonkipping-album-cover.jpg',
        mp3:'https://cdns-preview-c.dzcdn.net/stream/c-c3135df9d27931726c4a003a27e8773e-6.mp3',
      },

    ]
  },
  mutations: {
    loadSong(state,file){
      state.fileSource = file
    },
    updateSideBarArtistImage(state,image){
      state.leftSideBar.artistImage = image
    },
    updateCurrentTime(state,value){
      state.currentTime = Math.round(value)
    },
    updateDuration(state,value){
      state.trackDuration = Math.round(value)
    },
    updateShowPlayer(state,value){
      state.showPlayer = value
    }
  },
  actions: {
  },
  modules: {
  }
})
