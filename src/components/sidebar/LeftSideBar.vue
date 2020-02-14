<template>
    <aside class="sidebar">

        <div class="artist-image">
            <sui-image
                    :src="artistImage"
                    size="small"
                    circular
            />
        </div>
        <article>
            <h5>Current Song</h5>
            <h6>Remember Christ</h6>
        </article>

    </aside>
</template>

<script>
    export default {
        name: "LeftSideBar",
        computed:{
            artistImage(){
                return this.$store.state.leftSideBar.artistImage
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        float: left;
        background: rgb(18, 24, 29);
        color: white;
        min-width: 20em;
        margin-top: 3.5em;
        border-left: 1px solid rgba(44, 44, 44, 0.46);
        padding: 1em;
        text-align: center;
        box-shadow: 0 1px 4px black;
        height: 60em;


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
        padding: 2em 0 2em  0;
        background-color: black;
        border-radius: 50%;
        margin-bottom: 1em;
    }
</style>