<template>
  <sui-card class="rating-bg">
    <sui-dimmer-dimmable
      @mouseenter.native="cardOneActive = true"
      @mouseleave.native="cardOneActive = false"
    >
      <sui-image :src="image" />
      <sui-dimmer blurring :active="cardOneActive">
        <sui-button @click="playSong" inverted>
          <sui-icon-group size="huge">
            <sui-icon name="circle" size="big" outline />
            <sui-icon name="play" size="small" />
          </sui-icon-group>
        </sui-button>
      </sui-dimmer>
    </sui-dimmer-dimmable>

    <sui-card-content class="rating-bg" extra>
      <!--            Rating:  <sui-rating :rating="4" :max-rating="5" />-->
      <sui-card-header class="text-white">{{
        title || "Name of Song"
      }}</sui-card-header>
      <sui-card-meta class="text-grey">{{ artist || "Artist" }}</sui-card-meta>
    </sui-card-content>
  </sui-card>
</template>

<script>
import trackControls from "../mixins/trackControls";
export default {
  name: "AlbumItem",
  mixins: [trackControls]
};
</script>
<style scoped>
h1 {
  color: #155480;
}
.rating-bg {
  background: transparent !important;
}
.text-white {
  color: rgba(255, 255, 255, 0.8) !important;
}
.text-grey {
  color: gray !important;
}
</style>
