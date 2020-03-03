<template>
    <div class="item">
      <sui-dimmer-dimmable
        @mouseenter.native="cardOneActive = true"
        @mouseleave.native="cardOneActive = false"
      >
        <sui-image :src="image" />
        <!--                https://lasentinel.net/wp-content/uploads/sites/5/2016/02/rel-deonkipping-album-cover.jpg-->
        <sui-dimmer blurring :active="cardOneActive">
          <sui-button inverted @click="playSong">
            <sui-icon name="play" size="small" />
          </sui-button>
        </sui-dimmer>
      </sui-dimmer-dimmable>
      <article>
        <h4>{{ title || "This is the title" }}</h4>
        <p>{{ artist || "artist" }}</p>
      </article>
    </div>
</template>

<script>
import trackControls from "../../mixins/trackControls";

export default {
  name: "MostPlayed",
  mixins: [trackControls]
};
</script>

<style lang="scss" scoped>
.item {
  color: lightgray;
  background-color: rgba(4, 5, 14, 0.14);
  width: 46em;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.5em;
  margin-bottom: 1em;
  article {
    p {
      font-weight: 100 !important;
    }
  }
  div {
    width: 60px;
    height: 60px;
    margin-right: 1em;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
