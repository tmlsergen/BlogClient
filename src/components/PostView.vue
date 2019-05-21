<template>
  <section>
    <div class="blog-post">
      <h2 class="blog-post-title">{{postview[0].title}}</h2>
      <p class="blog-post-meta">{{postview[0].posted_at }} <a href="#">{{postview[0].user_id}}</a></p>
      <p>{{postview[0].content}}</p>
    </div><!-- /.blog-post -->
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PostView',
  methods: {
    ...mapActions([
      'fetchPostById'
    ])
  },
  data () {
    return {
      postview: []
    }
  },
  props: {
    post: Number
  },
  computed: {
    ...mapGetters([
      'getPosts'
    ])
  },
  created () {
    this.postview = this.getPosts.filter(item => item.id === this.post)
    // this.fetchPostById(this.postid)
  }
}
</script>

<style scoped>

</style>
