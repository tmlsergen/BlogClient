<template>
  <div class="hello">
    <div class="container">
      <header-component></header-component>
    </div>

    <main role="main" class="container">
      <div class="row mt-5">
        <div class="col-md-8 blog-main">
          <h3 class="pb-4 mb-4 font-italic border-bottom">
            Welcome to the Jungle !
          </h3>
          <post-category-component></post-category-component>
          <hr>
        </div><!-- /.blog-main -->
        <side-bar-component></side-bar-component>
      </div><!-- /.row -->
    </main><!-- /.container -->

    <footer-component></footer-component>

  </div>
</template>

<script>
  import PostCategoryComponent from '../components/PostCategory'
  import HeaderComponent from '../components/layouts/Header'
  import FooterComponent from '../components/layouts/Footer'
  import SideBarComponent from '../components/layouts/SideBar'
  import PaginationComponent from '../components/layouts/Pagination'
  import { mapActions } from 'vuex'

  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      SideBarComponent,
      PaginationComponent,
      PostCategoryComponent
    },
    name: 'Category',
    data () {
      return {
      }
    },
    computed: {},
    methods: {
      ...mapActions([
        'fetchByCategory'
      ])
    },
    created () {
      this.fetchByCategory(Number(this.$route.params.id))
    },
    watch: {
      '$route.params.id': function () {
        this.fetchByCategory(Number(this.$route.params.id))
      }
    }
  }
</script>
