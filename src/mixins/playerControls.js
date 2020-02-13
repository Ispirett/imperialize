
export default {
    data () {
       return {
           fileSource: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
           playerRef: ''
       }
    },

    methods:{
        play(){
           console.log('play');
            document.getElementById('i-player').play()

        },
        pause() {
            document.getElementById('i-player').pause()
        },
        stop(){
            document.getElementById('i-player').pause()
            document.getElementById('i-player').currentTime = 0;
        }

    }
}