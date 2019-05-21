<template>
<div>
  <header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        Laravel Back End Vue Front End
      </div>
      <div class="col-4 text-center">
        <router-link class="blog-header-logo text-dark" :to="{name: 'home'}">Blog</router-link>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <router-link v-if="!getUserToken" :to="{name : 'register'}" class="btn mr-1 btn-sm btn-outline-secondary">SignUp</router-link>
        <router-link v-if="!getUserToken" :to="{name : 'login'}" class="btn btn-sm btn-outline-secondary">SignIn</router-link>
        <router-link v-if="getUserToken" :to="{name : 'profile'}" class="btn btn-sm btn-outline-secondary mr-1">User Profile</router-link>
        <button v-if="getUserToken" v-on:click="logoutUser()" class="btn btn-sm btn-outline-secondary">LogOut</button>
      </div>
    </div>
  </header>
  <nav-bar-component></nav-bar-component>
</div>
</template>

<script>
import NavBarComponent from './NavBar'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  components: {
    NavBarComponent
  },
  computed: {
    ...mapGetters([
      'getUserToken'
    ])
  },
  methods: {
    ...mapActions([
      'logoutUser'
    ])
  }
}
</script>

<style scoped>

</style>
