<template>
  <div>
    <div class="container">
      <header-component></header-component>
      <div class="mt-5"></div>
      <h3>New Post</h3>
      <hr>
      <br>
      <div v-if="responseMessage===2" class="alert alert-danger mb-5" role="alert">
        Some error catched.
      </div>

      <div v-if="responseMessage===1" class="alert alert-success mb-5" role="alert">
        Save is complete.
      </div>

      <div class="form-group">
        <label class="col-form-label" for="category">Category: </label>
        <select class="form-control" id="category" v-model="category">
          <option v-for="category in getCategories" v-bind:value="category.id">{{ category.name }}</option>
        </select><br>
      </div>

      <div class="form-group">
        <label class="col-form-label" for="title">Title: </label>
        <input v-model="title" class="form-control" type="text" id="title"> <br>
      </div>

      <div class="form-group">
        <label class="col-form-label" for="content">Content: </label>
        <textarea v-model="content" class="form-control" id="content"> </textarea> <br>
      </div>
      <button v-on:click="makePost()" class="btn btn-block btn-success mt-5" style="margin-bottom: 250px;">
        Create Post
      </button>

    </div>
    <footer-component></footer-component>
  </div>

</template>

<script>
import HeaderComponent from '../components/layouts/Header'
import FooterComponent from '../components/layouts/Footer'
import { mapGetters, mapActions } from 'vuex'

const date = new Date()

export default {
  name: 'NewPost',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data () {
    return {
      user_id: sessionStorage.getItem('userId') || '',
      category: '',
      title: '',
      content: '',
      responseMessage: 0
    }
  },
  computed: {
    ...mapGetters([
      'getCategories'
    ])
  },
  methods: {
    ...mapActions([
      'createPost'
    ]),
    makePost () {
      const postData = {
        'user_id': this.user_id,
        'category': this.category,
        'title': this.title,
        'content': this.content
      }
      this.createPost(postData).then(() => {
        this.responseMessage = 1
      }).catch(error => {
        console.log(error)
        this.responseMessage = 2
      })
    }
  }
}
</script>

<style scoped>

</style>
