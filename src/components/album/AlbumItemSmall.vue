<template lang="html">
            <sui-card class="bg">
                <sui-dimmer-dimmable
                        @mouseenter.native="cardOneActive = true"
                        @mouseleave.native="cardOneActive = false"
                >
                    <sui-image :src="image" height="150px" width="100%" />

                    <sui-dimmer blurring :active="cardOneActive">
                        <sui-button @click="swapCenterComponent('AlbumSongsContainer')" inverted>
                            <sui-icon-group size="huge">
                                <sui-icon  name="circle" size="large" outline />
                                <sui-icon name="play" size="small"/>
                            </sui-icon-group>
                        </sui-button>
                    </sui-dimmer>
                </sui-dimmer-dimmable>

                <sui-card-content>
                    <sui-card-header class="text-white">{{ album || 'song title'}}</sui-card-header>
                    <sui-card-meta class="text-grey">{{ artist || 'Artist'}}</sui-card-meta>
                </sui-card-content>

            </sui-card>
</template>

<script>
    import trackControls from "../../mixins/trackControls";
    export default {
        name: 'AlbumItemSmall',
        methods:{
            swapCenterComponent(value){
                this.$store.commit('updateCurrentAlbum', this.$store.album);
                this.$store.dispatch('bindAlbumSongs',this.$props.album);
                this.$store.commit('updateCenterContainer',value)
            }
        },
        mixins: [trackControls]
    };
</script>

<style scoped >
    .bg {
        background: transparent !important;
    }

    .text-white {
        color: rgba(255, 255, 255, 0.8) !important;
    }
    .text-grey {
        color: gray !important;
    }
</style>