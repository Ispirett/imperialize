<template>
    <div id="wrapper">
        <div id='player'>
            <audio id="music_player">
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"/>
            </audio>

            <div>
                <h4>Song that's currently playing</h4>
                <small>Yeah that song!</small>
            </div>
            <div id="media-container">

                <div id="media-buttons">
                    <input type="image" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Crystal_Project_Player_play.png" onclick="play_aud()" id="play_button">
                    <input type="image" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Crystal_Project_Player_pause.png" onclick="pause_aud()" id="pause_button">
                    <input type="image" src="https://pngimage.net/wp-content/uploads/2018/05/button-stop-png.png" onclick="stop_aud()" id="stop_button">
                </div>
                <div id="media-seek">
                    <input type="range" id="seek"  step="0.01" min="0" max="1">
                </div>

            </div>

            <div>
                <img src="https://img.favpng.com/0/18/16/volume-computer-icons-sound-icon-blue-orange-png-favpng-XqsMMyAsWPv0vQjgRR8a8ddDe.jpg" id="vol_img">
                <input type="range" id="change_vol" onchange="change_vol()" step="0.05" min="0" max="1" value="1">
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name:'PlayerContainer'
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
        background: linear-gradient(-90deg, #1d1d1d, #343434);
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
    input[type="image"]
    {
        float:left;
        height:40px;
        margin-left:2px;
        margin-right:5px;
        margin-top:2px;
    }
    #vol_img
    {
        margin-left:150px;
        width:20px;
    }

    #media-container{
        margin-left: 10em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #media-buttons{
        margin-bottom: 1em;
    }
    #seek{
        outline: none;
        -webkit-appearance: none;
        background: #1d1d1d;
        height: 8px;
        width: 70em;
        border-radius: 1em;
        &::-webkit-slider-thumb {
            box-shadow: 0px 0px 0px #000000;
            border: 0 solid #000000;
            height: 5px;
            width: 8px;
            border-radius: 12px;
            background: rgba(82, 157, 225, 0.96);
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -3px;
        }

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