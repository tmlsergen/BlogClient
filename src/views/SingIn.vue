<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h2 class="mt-5">Register New User</h2>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 field-label-responsive">
        <label for="email">E-Mail Address</label>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
            <input v-model="email" type="text" name="email" class="form-control" id="email"
                   placeholder="E-Mail" required autofocus>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 field-label-responsive">
        <label for="password">Password</label>
      </div>
      <div class="col-md-6">
        <div class="form-group has-danger">
          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
            <input v-model="password" type="password" name="password" class="form-control" id="password"
                   placeholder="Password" required>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <button v-on:click="loginPersons()" class="btn btn-success">Login</button>
        <router-link to="register" class="btn btn-primary ml-4">To Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SingIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'loginUser'
    ]),
    loginPersons () {
      const postData = {
        'email': this.email,
        'password': this.password
      }
      this.loginUser(postData).then(() => {
        this.$router.push('/')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  @media (min-width: 768px) {
    .field-label-responsive {
      padding-top: .5rem;
      text-align: right;
    }
  }
</style>
