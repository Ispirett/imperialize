<template>
    <section id="album-details">
        <top-songs-container/>


        <h1>New albums & Singles</h1>
        <sui-card-group :items-per-row="5" class="card-group"  >

            <album-item v-for="song in music"
                        v-bind:key="song.id"
                        :image="song.image"
                        :mp3="song.mp3"
                        :title="song.title"
                        :artist="song.artist"
                        :album="song.album"
            />

        </sui-card-group>


    </section>

</template>

<script>
    import AlbumItem from "../components/album/AlbumItem";
    import TopSongsContainer from "./TopSongsContainer";

    // import Album from "../components/Album";

    export default {
        name: "AlbumContainer",
        computed:{
            music(){
                console.table(this.$store.state.music)
                return this.$store.state.music
            }
        },
        components: {
            TopSongsContainer,
            AlbumItem

        }
    };
</script>

<style lang="scss" scoped>
    #album-details{

        margin: 0 auto;
        height: 60em;
        max-width: 95em;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .card-group{
        padding: 1em;
    }
    h1{
        padding-top: 2em;
        padding-left: 10px;
    }
</style>