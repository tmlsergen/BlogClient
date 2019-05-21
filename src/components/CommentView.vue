<template>
  <div>
    <div v-for="comment in getCommentByPost" class="card">
      <h2 class="blog-title text-center card-header" style="font-size: 20px;">Comment By: {{comment.user_id}}
        (user_id)</h2>
      <p class="text-center card-body">{{comment.content}}</p>
      <p class="blog-post-meta text-center card-footer ">Posted At: {{comment.posted_at}}</p>
    </div>

    <hr>
    <br>

    <div class="form-group" v-if="data">
      <textarea v-model="content" placeholder="Write your comment here!" class="form-control"></textarea><br>
      <button v-on:click="postComment()" class="btn btn-primary" type="button">Share</button>
    </div>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import store from '../store'

  export default {
    name: 'CommentView',
    computed: {
      ...mapGetters([
        'getCommentByPost'
      ])
    },
    methods: {
      ...mapActions([
        'fetchByPost',
        'postComments'
      ]),
      postComment () {
        const post_id = store.state.userData.id
        const data = {
          'post_id': post_id,
          'content': this.content
        }
        this.postComments(data).then(() => {
          this.fetchByPost(this.$route.params.id)
          this.comment = ''
        }).catch(error => console.log(error))
      }
    },
    data () {
      return {
        data: store.state.userStatement,
        content: ''
      }
    },
    created () {
      this.fetchByPost(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>
