<template>
  <div class="hello">
    <div class="container">
      <header-component></header-component>
    </div>

    <main role="main" class="container">
      <div class="row mt-5">
        <div class="col-md-8 blog-main">
          <div class="row">
            <div class="col-9">
              <h3 class="pb-4 mb-4 font-italic border-bottom">
                Welcome to the Jungle !
              </h3>
            </div>
            <div class="col-3">
              <router-link v-if="getUserToken" :to="{name : 'newpost'}" class="btn btn-sm btn-outline-secondary">New
                Post
              </router-link>
            </div>
          </div>
          <post-component></post-component>
          <hr>
        </div><!-- /.blog-main -->
        <side-bar-component></side-bar-component>
      </div><!-- /.row -->
    </main><!-- /.container -->
    <footer-component></footer-component>

  </div>
</template>

<script>
import PostComponent from '../components/Post'
import HeaderComponent from '../components/layouts/Header'
import FooterComponent from '../components/layouts/Footer'
import SideBarComponent from '../components/layouts/SideBar'
import PaginationComponent from '../components/layouts/Pagination'
import { mapGetters } from 'vuex'

export default {
  components: {
    PostComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    PaginationComponent
  },
  name: 'HelloWorld',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'getUserToken'
    ])
  }
}
</script>
