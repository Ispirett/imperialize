<template>
    <sui-card class="rating-bg">
        <sui-image :src="image" />
        <sui-card-content class="rating-bg" extra >
<!--            Rating:  <sui-rating :rating="4" :max-rating="5" />-->
            <sui-card-header class="text-white">Name of song</sui-card-header>
                <sui-card-meta class="text-grey">Artist name</sui-card-meta>
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
    .rating-bg{
        background: transparent !important;

    }
    .text-white{
        color: rgba(255, 255, 255, 0.8) !important;
    }
    .text-grey{
        color:gray !important;
    }
</style>