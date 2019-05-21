<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions([
        'fetchPosts',
        'fetchCategories'
      ])
    },
    mounted () {
      this.fetchPosts()
      this.fetchCategories()
    }
  }
</script>

<style lang="scss">
  @import "assets/blog.css";

</style>
