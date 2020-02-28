<template>
    <audio id="i-player" class="hide" >
        <source :src="fileSource" id="file-source"/>
    </audio>

</template>

<script>
    export default {
        name: "PlayerAudio",
        computed:{
            fileSource(){
                return this.$store.state.fileSource
            },
        }

    }
</script>

<style scoped>
 .hide{
     display: none;
 }
</style>