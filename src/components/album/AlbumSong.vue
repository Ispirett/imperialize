<template>
    <sui-table-row @click="playSong">
        <sui-table-cell>{{title || 'Song title'}}</sui-table-cell>
        <sui-table-cell>{{artist || 'Song Artist'}}</sui-table-cell>
        <sui-table-cell>{{album || 'album name' }}</sui-table-cell>
        <sui-table-cell>{{time || '3:00'}}</sui-table-cell>
    </sui-table-row>
</template>

<script>
    import trackControls from "../../mixins/trackControls";

    export default {
        name: "AlbumSongs",
        mixins:[trackControls],
    }
</script>

<style scoped>

</style>