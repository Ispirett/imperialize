<template>
    <div id="wrapper" v-bind:class="{show:showPlayer}">
        <div id='player' >
            <player-audio/>
            <div>
                <h4>Song that's currently playing</h4>
                <small>Yeah that song!</small>
            </div>
<!--            media buttons-->
             <player-buttons/>

            <div>
                <sui-icon name="volume up" v-if="volume >= 0.5" size="large"/>
                <sui-icon name="volume down" v-if="volume < 0.5 & volume > 0.1 " size="large"/>
                <sui-icon name="volume off" v-if="volume < 0.1" size="large"/>
                <input type="range" id="change_vol"  @input="updateVolume($event.target.value)" step="0.01" min="0" max="1" :value="volume">
            </div>


        </div>
    </div>
</template>

<script>
    import PlayerButtons from "../components/media_player/PlayerButtons";
    import playerControls from "../mixins/playerControls";
    import PlayerAudio from "../components/media_player/PlayerAudio";

    export default {
        name:'PlayerContainer',
        computed:{
            showPlayer(){
                // return true
                return this.$store.state.showPlayer
            },
            volume(){
                return this.$store.state.volume
            }
        },
        methods:{
            updateVolume(value){
              this.$store.commit('updateVolume',value);
              document.getElementById('i-player').volume = this.volume;
            }
        },
        components: {PlayerAudio, PlayerButtons},
        mixins: [playerControls]
    }
</script>

<style lang="scss" scoped>
    .show {
        overflow: auto;
        bottom: 0 !important;

    }
    #wrapper
    {
        grid-area: player;
        border-top: 5px solid #003757 !important;
        width:100%;

        position: fixed;
        bottom: -8em;

        overflow: hidden;
        text-align:center;
        padding:0;
        background: linear-gradient(-90deg, #0f0f0f, #343434, #0f0f0f,);
        transition: all 1s ease-in-out;

    }
    #player
    {

        color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding:1em;
        box-sizing:border-box;
    }

    #vol_img
    {
        margin-left:150px;
        width:20px;
    }

    #change_vol{
        outline: none;
        -webkit-appearance: none;
        background: #1d1d1d;
        height: 5px;
        width: 20em;
        border-radius: 1em;
        &::-webkit-slider-thumb {
            box-shadow: 0px 0px 0px #000000;
            border: 0px solid #000000;
            height: 10px;
            width: 40px;
            border-radius: 12px;
            background: rgb(73, 124, 191);
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -3px;
        }
    }



</style>