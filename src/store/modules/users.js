
const state = {
    users: [
        { id: 1, name: "hello", date: 5000 },
        { id: 2, name: "kool", date: 6000 },
        { id: 3, name: "toad", date: 3000 }
    ]
}
const getters = {
    allUsers: (state) => state.users
}
const actions = {}
const mutations = {};


export  default {
    state,
    getters,
    actions,
    mutations
}