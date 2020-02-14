<template>
    <audio id="i-player" >
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

<!--<style scoped>-->

<!--</style>-->