<template>
    <div>
        <p>{{input}} | {{money}}</p>
        <input type="text" v-model="input" placeholder="enter name"/>
        <input type="number" v-model="money"/>
    </div>
</template>

<script>
    export default {
        name: "UserForm",
        data: function () {
            return{
                input: '',
                money: '',
            }
        }
    }
</script>

<style scoped>

</style>