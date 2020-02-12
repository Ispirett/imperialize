<template lang="html">
    <div class="itemContainer">
        <h2 class="title">The best New Release</h2>
        <div class="card-container">
        <sui-card-group :items-per-row="6" class="doubling card-group">
            <sui-card class="bg">
                <sui-image src="https://resources.tidal.com/images/632ecaef/a635/4bda/9bbf/d3ee320a7c17/320x320.jpg" />
                <sui-card-content>
                    <sui-card-header class="text-white"> One kool album</sui-card-header>
                    <sui-card-meta class="text-grey">Artist name</sui-card-meta>
                </sui-card-content>

            </sui-card>
            <sui-card class="bg">
                <sui-image src="https://i.pinimg.com/236x/aa/ef/ca/aaefca82ca863724322faf2c4ff3e606--gospel-music-radios.jpg" />
            </sui-card>
            <sui-card class="bg">
                <sui-image src="https://thegospelguru.com/wp-content/uploads/2013/09/unconditional.jpg" />
            </sui-card>
            <sui-card class="bg">
                <sui-image src="https://lh3.googleusercontent.com/proxy/zTTpBINJMlJdpCgs5V3pwfIO6DFZjho2xqyPUC3VcN4V8oUZUcL1NNvvxYRCGrqdLv4mfNv5C0jtiHD7YQ0aHejdATbCJGglffM7fKbTNcn4pDJJUz-9jXnvCvw" />
            </sui-card>
            <sui-card class="bg">
                <sui-image src="https://images-na.ssl-images-amazon.com/images/I/51WPFZZ0BNL._SX425_.jpg" />
            </sui-card>

        </sui-card-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AlbumItemSmall',
    };
</script>

<style scoped>
    .card-container{
        width: 100em;
        padding: .5em;
        overflow-x: auto ;
        overflow-y: hidden;
    }
    .itemContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /*width: 70em;*/
        padding-top: 2em;
        padding-left: 1em;
        padding-right: 1em;
        /*margin: 0 auto;*/
    }
    .card-group {
    }
    .bg{
        background: transparent !important;

    }

    .text-white{
        color: rgba(255, 255, 255, 0.8) !important;
    }
    .text-grey{
        color:gray !important;
    }
</style>