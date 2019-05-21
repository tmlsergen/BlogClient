<template>
  <div>
    <div class="container">
      <header-component></header-component>
      <div class="mt-5"></div>
      <post-view-component v-bind:post='Number($route.params.id)'></post-view-component>
      <comment-view-component></comment-view-component>
      <br>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import PostViewComponent from '../components/PostView'
import HeaderComponent from '../components/layouts/Header'
import FooterComponent from '../components/layouts/Footer'
import CommentViewComponent from '../components/CommentView'

export default {
  name: 'Post',
  components: {
    PostViewComponent,
    HeaderComponent,
    FooterComponent,
    CommentViewComponent
  },
  created () {
  }
}
</script>

<style scoped>

</style>
