<template>
  <div class="nav-scroller py-1 mb-5">
    <nav class="nav d-flex justify-content-between">
      <router-link v-for="category in getCategories" class="p-2 text-muted mb-5"
                   :to="{name : 'category', params: {id: category.id}}">
        {{category.name}}
      </router-link>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'getCategories'
    ])
  }
}
</script>

<style scoped>

</style>
