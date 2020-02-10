<template>
    <div>
        <h1>{{name}}</h1>
        <h2>{{date}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'User',
        props:{
            name: String,
            date: Number
        }
    }
</script>
<style scoped>
    h1 {
        color: "blue";
    }
</style>