<template>
  <div>
    <User
      v-for="user in allUsers"
      :name="user.name"
      :date="user.date"
      :key="user.id"
    />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import User from "../components/User";
export default {
  name: "UsersContainer.vue",
  computed: mapGetters(['allUsers']),
  methods: {
    ...mapActions([])
  },
  props: {
    user: Object
  },
  components: {
    User
  }
};
</script>

<style scoped></style>
