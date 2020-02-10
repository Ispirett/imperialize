<template>
    <div class="artist">
        <section class="artist-header">
            <img class="img" src="https://2.bp.blogspot.com/-2HDpDzR0hDA/UPlsuG5N0wI/AAAAAAAAE7o/bCkI_NMgADA/s640/IMG_0376.JPG" alt="image">
            <h5 class="artist-name">Brother D</h5>
            <span class="artist-song">20</span>
        </section>
        <section class="artist-body">
            <h5>name of album</h5>
            <h6>name of song</h6>
        </section>

    </div>
</template>

<script>
    export default {
        name: "ArtistItem"
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