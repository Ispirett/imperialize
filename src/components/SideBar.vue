<template>
    <aside id="sidebar">
        <section class="artist" >
            <h2 class="heading">Artist</h2>
            <ul class="list">
                <li><artist-item/></li>
                <li><artist-item/></li>
                <li><artist-item/></li>

            </ul>
        </section>
    </aside>
</template>

<script>
    import ArtistItem from "./sidebar/ArtistItem";
    export default {
        name: "SideBar",
        components:{
            ArtistItem
        }

    }
</script>

<style scoped>
 #sidebar{
     float: right;
     /*background: rgb(30, 35, 41);*/
     color: white;
     min-width: 20em;
     margin-top: 3.5em;
     border-left: 1px solid rgba(44, 44, 44, 0.46);
     padding: 1em;
     text-align: left;
     box-shadow: 0 1px 4px black;
     height: 60em;

 }

.list{
    list-style: none;
}
ul{
    padding: 0;
}
ul > li {
    padding: 0 0 1em 0 ;
}
</style>