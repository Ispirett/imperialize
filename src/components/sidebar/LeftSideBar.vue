<template>
    <aside id="left-sidebar">
        <div id="left-sidebar-details">
            <div class="artist-image">
                <sui-image
                        :src="currentTrack.image"
                        size="small"
                        circular
                />
            </div>
            <article>
                <h5>{{currentTrack.title}}</h5>
                <h6>{{currentTrack.artist}}</h6>
            </article>


        </div>
        <section class="left-sidebar-items">
            <article class="item-title">
                <h4>Your music</h4>
                <song-form/>

            </article>

            <sui-list class="list">
                <sui-list-item
                        v-on:click="swapCenterComponent('HomeContainer')"
                        icon="home"
                        content="Home" />

                <sui-list-item
                        v-on:click="swapCenterComponent('AllSongsContainer')"
                        icon="music" content="All songs" />
                <sui-list-item icon="user" content="Artist"> </sui-list-item>

                <sui-list-item
                        v-on:click="swapCenterComponent('AlbumContainer')"
                        icon="users" content="Albums" />


            </sui-list>

        </section>



    </aside>

</template>

<script>
    import SongForm from "./SongForm";
    export default {
        name: "LeftSideBar",
        components: {SongForm},
        computed:{
            currentTrack(){
                return this.$store.state.currentTrack
            },
        },
        methods:{
            swapCenterComponent(value){
                this.$store.commit('updateCenterContainer',value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #left-sidebar{
        color: lightgray;
        height: 60em;
        background: rgb(18, 24, 29);
        box-shadow: 0 1px 4px black;
        grid-area: leftsidebar;
        #left-sidebar-details{

            color: white;
            /*min-width: 20em;*/
            margin-top: 3.5em;
            border-left: 1px solid rgba(44, 44, 44, 0.46);
            padding: 1em;
            text-align: center;

        }
    }
    .item-title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .left-sidebar-items{
        padding-left: 2em;
        max-height: 10em;
        .list >div{
            margin-bottom: 1em ;
            border-radius: .2em;
            transition: all .5s ease-in-out;
            cursor: pointer;
            &:hover{
                background-color: black;
                padding: 1.2em;
                border-left: 5px solid  #003757   ;
            }
        }
    }
    h2{
        margin-bottom: 2em;
    }
    h6{
        line-height: 3px;
        color: gray;
    }

    .artist-image{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5em 0 1.5em  0;
        background-color: #292929;
        border-radius: 50%;
        margin-bottom: 1em;
        min-height: 15em;
        max-height: 15em;
    }
</style>