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
                <img src="https://img.favpng.com/0/18/16/volume-computer-icons-sound-icon-blue-orange-png-favpng-XqsMMyAsWPv0vQjgRR8a8ddDe.jpg" id="vol_img">
                <input type="range" id="change_vol"  @input="tester($event.target.value)" step="0.05" min="0" max="1" :value="volume">
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
                return this.$store.state.showPlayer
            },
            volume(){
                return this.$store.state.volume
            }
        },
        methods:{
            tester(value){
              this.$store.commit('updateVolume',value);
              document.getElementById('i-player').volume = this.volume;
                console.log(this.volume)
            }
        },
        components: {PlayerAudio, PlayerButtons},
        mixins: [playerControls]
    }
</script>

<style lang="scss" scoped>

    body
    {
        margin:0 auto;
        padding:0px;
        font-family:helvetica;

    }

    .show{
        bottom: 0 !important;
        transition: all 1ms ease-in-out;
    }

    #wrapper
    {
        width:100vw;
        height: 8em;
        position: fixed;
        bottom: -8em;
        text-align:center;
        margin:0 auto;
        padding:0;
        background: linear-gradient(-90deg, #1d1d1d, #343434,#1d1d1d,);
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