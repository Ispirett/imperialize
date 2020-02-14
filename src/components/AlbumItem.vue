<template>
    <sui-card class="rating-bg" v-on:click="playSong">
        <sui-image :src="image" />
        <sui-card-content class="rating-bg" extra >
<!--            Rating:  <sui-rating :rating="4" :max-rating="5" />-->
            <sui-card-header class="text-white">Name of song</sui-card-header>
                <sui-card-meta class="text-grey">Artist name</sui-card-meta>
        </sui-card-content>
    </sui-card>
</template>

<script>
    export default {
        name: 'AlbumItem',
        props:{
            image:String,
            mp3:String,
        },
        methods:{
            playSong(){

                const {commit, state} = this.$store
                const player =  document.getElementById('i-player');
                const playerContainer = document.getElementById('player');
                playerContainer.classList.add('show');

                commit('updateShowPlayer', true);
                commit('loadSong',this.$props.mp3);
                commit('updateSideBarArtistImage', this.$props.image);
                commit('updateCurrentTime', player.currentTime );


               const seeker = setInterval(()=>{
                    console.log('current time');
                    commit('updateCurrentTime', player.currentTime );

                    if(state.trackDuration === 0){
                        clearInterval(seeker)
                    }
                },1000);

                commit('updateDuration', player.duration);
                player.load();
                player.play();
            }

        }
    }
</script>
<style scoped>
    h1 {
        color: #155480;
    }
    .rating-bg{
        background: transparent !important;

    }
    .text-white{
        color: rgba(255, 255, 255, 0.8) !important;
    }
    .text-grey{
        color:gray !important;
    }
</style>