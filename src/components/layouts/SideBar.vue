<template>
  <aside class="col-md-4 mt-3 blog-sidebar">
    <about-component></about-component>
  </aside><!-- /.blog-sidebar -->
</template>

<script>
import ArchiveComponent from './sidebar/Archive'
import AboutComponent from './sidebar/About'

export default {
  name: 'SideBar',
  components: {
    ArchiveComponent,
    AboutComponent
  }
}
</script>

<style scoped>

</style>
