<template>
  <section>
    <div v-for="post in  getPosts" class="blog-post">
      <router-link :to="`/post/${post.id}`" class="blog-post-title">{{ post.title }}</router-link>
      <p class="blog-post-meta">{{ post.posted_at }}<a href="#"> {{ post.user_id}}</a></p>
      <p>{{post.content}}</p>
    </div><!-- /.blog-post -->
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Post',
    props: {
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'getPosts',
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
