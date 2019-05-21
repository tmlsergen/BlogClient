<template>
  <div>
    <div class="container">
      <header-component></header-component>
      <div class="mt-5"></div>
      <h3>User Profile Settings</h3>
      <hr>
      <br>
      <div v-if="responseMessage===2" class="alert alert-danger mb-5" role="alert">
        Some error catched.
      </div>

      <div v-if="responseMessage===1" class="alert alert-success mb-5" role="alert">
        Update is complete.
      </div>

      <label class="col-form-label" for="name">Name: </label>
      <input v-model="name" class="form-control" type="text" id="name"> <br>

      <label class="col-form-label" for="email">E-mail: </label>
      <input v-model="email" class="form-control" type="email" id="email"> <br>

      <button v-on:click="updateUserData()" class="btn btn-block btn-success mt-5" style="margin-bottom: 250px;">Update
        Name - E-mail
      </button>

    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '../components/layouts/Header'
import FooterComponent from '../components/layouts/Footer'
import { mapActions } from 'vuex'

export default {
  name: 'Profile',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data () {
    return {
      user_id: sessionStorage.getItem('userId') || '',
      name: sessionStorage.getItem('userName') || '',
      email: sessionStorage.getItem('userEmail') || '',
      password: '',
      c_password: '',
      responseMessage: 0
    }
  },
  methods: {
    ...mapActions([
      'updateUser'
    ]),
    updateUserData () {
      const updateObj = {
        'name': this.name,
        'email': this.email,
        'id': this.user_id
      }
      this.updateUser(updateObj).then(() => {
        this.responseMessage = 1
      }).catch(error => {
        console.log(error)
        this.responseMessage = 2
      })
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
