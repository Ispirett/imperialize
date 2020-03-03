<template>
  <aside id="sidebar">
    <section class="artist">
      <h2 class="heading">Latest</h2>
      <ul class="list">
        <li><artist-item
                artist="NF"
                song-name="NF- Like This"
                album-name="The Search"
                image="https://news.otakukart.com/wp-content/uploads/2019/06/NF.jpg"
                plays="4000"
        /></li>
        <li><artist-item
                artist="Positive"
                song-name="Encounter"
                album-name="Encounter"
                image="https://i.ytimg.com/vi/YQb0r41kSM4/sddefault.jpg"
                plays="2000"

        /></li>
        <li><artist-item
                artist="Ariana Grande"
                song-name="breathin"
                album-name="Ariana Grande"
                image="https://www.goldderby.com/wp-content/uploads/2018/12/ariana-grande-thank-u-next.jpg?w=620&h=360&crop=1"
                plays="50000"
        /></li>
      </ul>
    </section>
  </aside>
</template>

<script>
import ArtistItem from "./ArtistItem";
export default {
  name: "SideBar",
  components: {
    ArtistItem
  }
};
</script>

<style lang="scss" scoped>
#sidebar {
  grid-area: sidebar;
  .artist {
    height: 100%;
    background: rgb(18, 24, 29);

    color: lightgrey;
    border-left: 1px solid rgba(44, 44, 44, 0.46);
    padding: 1em;
    text-align: left;
    box-shadow: 0 1px 4px black;
  }
}
.heading{
    text-align: center;
}
.list {
  list-style: none;
}
ul {
  padding: 0;
}
ul > li {
  padding: 0 0 1em 0;
}
</style>
