export default {
    methods:{
        play(){
            const player  = document.getElementById('i-player')
            player.play();
            console.log('play', player.duration);

        },
        pause() {
            document.getElementById('i-player').pause()
        },
        stop(){
            const player =   document.getElementById('i-player')
            player.pause();
            player.currentTime = 0;
            this.$store.commit('updateCurrentTime', 0 );
            this.$store.commit('updateDuration', 0);
            this.$store.commit('updateShowPlayer', false)

    }

    }
}