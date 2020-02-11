<template>
    <sui-card>
        <sui-image :src="image" />
        <sui-card-content extra>
            Rating:  <sui-rating :rating="4" :max-rating="5" />
        </sui-card-content>
    </sui-card>
</template>

<script>
    export default {
        name: 'AlbumItem',
        props:{
            image:String
        }
    }
</script>
<style scoped>
    h1 {
        color: #155480;
    }
</style>