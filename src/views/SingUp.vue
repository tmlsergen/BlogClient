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
        <label for="name">Name</label>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
            <input v-model="name" type="text" name="name" class="form-control" id="name"
                   placeholder="Name" required autofocus>
          </div>
        </div>
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
      <div class="col-md-3 field-label-responsive">
        <label for="password">Confirm Password</label>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
            <input v-model="c_password" type="password" name="password-confirmation" class="form-control"
                   id="password-confirm" placeholder="Confirm Password" required>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <button v-on:click="registerPersons()" class="btn btn-success">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SingUp',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      c_password: ''
    }
  },
  methods: {
    ...mapActions([
      'registerUser'
    ]),
    registerPersons () {
      const postData = {
        'name': this.name,
        'email': this.email,
        'password': this.password,
        'c_password': this.c_password
      }
      this.registerUser(postData).then(() => {
        this.$router.push('/')
      }).catch(error => {
        console.log(error)
      })
    }
  },
  computed: {
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
