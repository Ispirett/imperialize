<template>
    <section class="wrapper">
        <h1>
            All Songs
        </h1>
        <sui-table striped inverted>
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Title</sui-table-header-cell>
                    <sui-table-header-cell>Artist</sui-table-header-cell>
                    <sui-table-header-cell>Album</sui-table-header-cell>
                    <sui-table-header-cell>Time</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <song-row v-for="song in music "
                          v-bind:key="song.id"
                          :mp3="song.mp3"
                          :image="song.image"
                          :title="song.title"
                          :artist="song.artist"
                          :album="song.album"
                          :time="song.time"
                />
            </sui-table-body>
        </sui-table>
    </section>

</template>

<script>
    import trackControls from "../mixins/trackControls";
    import SongRow from "../components/all_songs/songRow";

    export default {
        name: "AllSongsContainer",
        components: {SongRow},
        mixins:[trackControls],
        computed:{
            music(){
                return this.$store.state.music
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        padding: 1em;
    }
    tr,td{
        &:hover{
            background-color: black;
        }
    }
    h1{
        border-bottom: 1px solid gray;
        padding-bottom: 1em;
        margin-bottom: 1em;
    }
</style>