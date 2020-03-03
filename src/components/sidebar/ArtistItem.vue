<template>
    <div class="artist">
        <section class="artist-header">
            <img class="img" :src="image" alt="image">
            <h5 class="artist-name">{{artist}}</h5>
            <small class="artist-song">{{plays}}</small>
        </section>
        <section class="artist-body">
            <h5>{{albumName}}</h5>
            <h6>{{songName}}</h6>
        </section>

    </div>
</template>

<script>
    export default {
        name: "ArtistItem",
        props:{
            artist: String,
            plays: String,
            albumName: String,
            songName:String,
            image:String

        }
    }
</script>

<style scoped>
.artist-header{
    background: black;
    border-radius: 2em;
    padding: 0 1em 0 1em;
    transition: background-color .5s ease-in-out;
}
.artist-header:hover{
    background: linear-gradient(90deg, #ff1400, #00a0ff);
}
.artist-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.artist-body{
    line-height: .1em;
    text-align: center;
    color: #818b89;
}
.img{
    width: 30px;
    height: 30px;
    border-radius:50%;
}
</style>