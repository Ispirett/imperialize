<template>
    <div id="wrapper">
        <div id='player'>
            <audio id="i-player" >
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"/>
            </audio>

            <div>
                <h4>Song that's currently playing</h4>
                <small>Yeah that song!</small>
            </div>
<!--            media buttons-->
             <player-buttons/>

            <div>
                <img src="https://img.favpng.com/0/18/16/volume-computer-icons-sound-icon-blue-orange-png-favpng-XqsMMyAsWPv0vQjgRR8a8ddDe.jpg" id="vol_img">
                <input type="range" id="change_vol" onchange="change_vol()" step="0.05" min="0" max="1" value="1">
            </div>


        </div>
    </div>
</template>

<script>
    import PlayerButtons from "../components/media_player/PlayerButtons";
    import playerControls from "../mixins/playerControls";
    export default {
        name:'PlayerContainer',
        components: {PlayerButtons},
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
    #wrapper
    {
        width:100vw;
        height: 8em;
        position: fixed;
        bottom:0;
        text-align:center;
        margin:0 auto;
        padding:0;
        background: linear-gradient(-90deg, #1d1d1d, #343434,#1d1d1d,);
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