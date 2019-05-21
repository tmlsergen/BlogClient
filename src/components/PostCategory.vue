<template>
  <section>
    <div v-for="post in getPostByCategory" class="blog-post">
      <router-link :to="`/post/${post.id}`" class="blog-post-title">{{ post.title }}</router-link>
      <p class="blog-post-meta">{{ post.posted_at }}<a href="#"> {{ post.user_id}}</a></p>
      <p>{{post.content}}</p>
    </div><!-- /.blog-post -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PostCategory',
  props: {},
  data () {
    return {
      category_id: this.$route.params.id,
      postData: ''
    }
  },
  computed: {
    ...mapGetters([
      'getPostByCategory'
    ])
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>

</style>
