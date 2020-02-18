import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import {db} from "../utilities/firebase";
import {vuexfireMutations,firebaseAction} from "vuexfire";



export default new Vuex.Store({
  state: {
    centerComponent: 'HomeContainer',
    fileSource: 'https://cdns-preview-e.dzcdn.net/stream/c-e1b78fb28633b45fd0a4b35478386198-7.mp3',
    currentTime: 0,
    trackDuration: 0,
    volume: 1,
    leftSideBar: {
      artistImage:'https://thegospelguru.com/wp-content/uploads/2017/06/81VIIvooGL._SL1500_.jpg'
    },
    showPlayer: false,

    music:[
      // {
      //   id:1,
      //   image: 'https://resources.tidal.com/images/632ecaef/a635/4bda/9bbf/d3ee320a7c17/320x320.jpg',
      //   mp3:'https://cdns-preview-e.dzcdn.net/stream/c-e1b78fb28633b45fd0a4b35478386198-7.mp3',
      //   title: '',
      //   artist:'',
      //   album:'',
      //   time: ''
      // },
      // {
      //   id:2,
      //   image: 'https://thegospelguru.com/wp-content/uploads/2017/06/81VIIvooGL._SL1500_.jpg',
      //   mp3:'https://cdns-preview-f.dzcdn.net/stream/c-ff9f084e407a0a52c42cc61d3700e629-8.mp3',
      //   title: '',
      //   artist:'',
      //   album:'',
      //   time: ''
      // },
      // {
      //   id:3,
      //   image: 'https://thegospelguru.com/wp-content/uploads/2017/06/600x600bb-2.jpg',
      //   mp3:'https://cdns-preview-6.dzcdn.net/stream/c-68b713c1b295d08eff48ef73a331bc8c-5.mp3',
      //   title: '',
      //   artist:'',
      //   album:'',
      //   time: ''
      // },
      // {
      //   id:4,
      //   image: 'https://thegospelguru.com/wp-content/uploads/2012/08/309251_378998475505018_1040037128_n.jpg',
      //   mp3:'https://cdns-preview-4.dzcdn.net/stream/c-4afe9f585865cbfa80283c06064c1da2-4.mp3',
      //   title: '',
      //   artist:'',
      //   album:'',
      //   time: ''
      // },
      // {
      //   id:5,
      //   image: 'https://lasentinel.net/wp-content/uploads/sites/5/2016/02/rel-deonkipping-album-cover.jpg',
      //   mp3:'https://cdns-preview-c.dzcdn.net/stream/c-c3135df9d27931726c4a003a27e8773e-6.mp3',
      //   title: '',
      //   artist:'',
      //   album:'',
      //   time: ''
      // },
      // {
      //   id:6 ,
      //   image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/367760d4-aa89-46bb-988a-3e82ee97a9f7/d5gya4r-9342fbf5-2d56-439e-8771-6e23bd6be4f5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2Nzc2MGQ0LWFhODktNDZiYi05ODhhLTNlODJlZTk3YTlmN1wvZDVneWE0ci05MzQyZmJmNS0yZDU2LTQzOWUtODc3MS02ZTIzYmQ2YmU0ZjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BntD9nv2OALUkm91DHkOopfy1a9n4CvUNmbnXqiPOtk',
      //   mp3:'https://cdns-preview-9.dzcdn.net/stream/c-9d2d2c50be5d0980b9123d79056b5815-6.mp3',
      //   title: 'Never Ending',
      //   artist:'Rihanna',
      //   album:'',
      //   time: ''
      // },

    ]
  },
  mutations: {
    ...vuexfireMutations,
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
    },
    updateVolume(state,value){
      state.volume = value
    },
    updateCenterContainer(state,value){
      state.centerComponent = value
    },
    updateMusic(state, songs){
      state.music = songs
    }

  },
  actions: {
    bindMusicRef: firebaseAction(({bindFirebaseRef}) => {
     return bindFirebaseRef('music', db.collection('music'))
    })
  },
  modules: {
  }
})
