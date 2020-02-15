<template lang="html">
            <sui-card class="bg">
                <sui-dimmer-dimmable
                        @mouseenter.native="cardOneActive = true"
                        @mouseleave.native="cardOneActive = false"
                >
                    <sui-image :src="image" />
                    <sui-dimmer blurring :active="cardOneActive">

                        <sui-button @click="playSong" inverted>
                            <sui-icon-group size="huge">
                                <sui-icon  name="circle" size="large" outline />
                                <sui-icon name="play" size="small"/>
                            </sui-icon-group>
                        </sui-button>
                    </sui-dimmer>
                </sui-dimmer-dimmable>

                <sui-card-content>
                    <sui-card-header class="text-white">{{ title || 'song title'}}</sui-card-header>
                    <sui-card-meta class="text-grey">{{ Artist || 'Artist'}}</sui-card-meta>
                </sui-card-content>

            </sui-card>
</template>

<script>
    import trackControls from "../../mixins/trackControls";
    export default {
        name: 'AlbumItemSmall',
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