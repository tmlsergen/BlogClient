import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    userToken: sessionStorage.getItem('userToken') || '',
    userData: sessionStorage.getItem('userData') || '',
    categories: [],
    post: [],
    categoryPost: [],
    userStatement: sessionStorage.getItem('userStatement') || 'false',
    postComment: []
  },
  mutations: {
    setPosts (state, data) {
      state.posts = data.data
    },
    setCategories (state, data) {
      state.categories = data.data
    },
    setPost (state, data) {
      state.post = data.data
    },
    registerUser (state, user) {
      sessionStorage.setItem('userToken', user.data[1])
      sessionStorage.setItem('userName', user.data[0].name)
      sessionStorage.setItem('userEmail', user.data[0].email)
      sessionStorage.setItem('userId', user.data[0].id)
      sessionStorage.setItem('userStatement', 'true')
      state.userData = {
        'id': user.data[0].id,
        'name': user.data[0].name,
        'email': user.data[0].email
      }
      state.userToken = user.data[1]
      console.log(sessionStorage.getItem('userToken'))
      console.log(sessionStorage.getItem('userData'))
      console.log(sessionStorage.getItem('userStatement'))
    },
    logoutUser (state) {
      sessionStorage.removeItem('userToken')
      sessionStorage.removeItem('userName')
      sessionStorage.removeItem('userEmail')
      sessionStorage.removeItem('userStatement')
      state.userData = ''
      state.userToken = ''
      state.userStatement = false
    },
    setCategoryPost (state, data) {
      state.categoryPost = data.data
    },
    setPostComment (state, data) {
      state.postComment = data.data
    }
  },
  actions: {
    async fetchPosts ({ commit }) {
      await axios.get('http://blog.test/api/v1/post').then(data => {
        commit('setPosts', data)
      }).catch((error) => {
        console.log(error)
      })
    },
    async fetchCategories ({ commit }) {
      await axios.get('http://blog.test/api/v1/category').then(data => {
        commit('setCategories', data)
      }).catch(error => {
        console.log(error)
      })
    },
    async fetchPostById ({ commit }, id) {
      await axios.get(`http://blog.test/api/v1/post/${id}`).then(data => {
        commit('setPost', data)
      }).catch(error => {
        console.log(error)
      })
    },
    async registerUser ({ commit }, data) {
      await axios.post(`http://blog.test/api/v1/register`, data).then(user => {
        console.log(user)
        commit('registerUser', user)
      }).catch(error => {
        console.log(error)
      })
    },
    async loginUser ({ commit }, data) {
      await axios.post(`http://blog.test/api/v1/login`, data).then(user => {
        commit('registerUser', user)
        console.log(user)
      }).catch(error => {
        console.log(error)
      })
    },
    logoutUser ({ commit }) {
      commit('logoutUser')
    },
    async fetchByCategory ({ commit }, id) {
      await axios.get(`http://blog.test/api/v1/category/${id}/post`, id).then(data => {
        commit('setCategoryPost', data)
      }).catch(error => console.log(error))
    },
    async fetchByPost ({ commit }, id) {
      await axios.get(`http://blog.test/api/v1/post/${id}/comment`, id).then(data => {
        commit('setPostComment', data)
      }).catch(error => console.log(error))
    },
    async postComments ({ commit }, data) {
      const config = { headers: { 'Authorization': `Bearer ${this.state.userToken}` } }
      const user_id = this.state.userData.id
      console.log(user_id)
      data.user_id = user_id
      await axios.post(`http://blog.test/api/v1/comment`, data, config).then(response => {
        console.log(response)
      }).catch(error => console.log(error))
    },
    async updateUser ({ commit }, data) {
      const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('userToken')}` } }

      sessionStorage.removeItem('userName')
      sessionStorage.removeItem('userEmail')

      sessionStorage.setItem('userName', data.name)
      sessionStorage.setItem('userEmail', data.email)

      await axios.put(`http://blog.test/api/v1/user/${data.id}`, data, config).then(response => {
        console.log(response)
      }).catch(error => console.log(error))
    },
    async createPost ({ commit }, data) {
      const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('userToken')}` } }

      await axios.post(`http://blog.test/api/v1/post`, data, config).then(response => {
        console.log(response)
      }).catch(error => console.log(error))
    }
  },
  getters: {
    getPosts: state => state.posts,
    getCategories: state => state.categories,
    getPost: state => state.post,
    getUserToken: state => state.userToken,
    getUserData: state => state.userData,
    getPostByCategory: state => state.categoryPost,
    getCommentByPost: state => state.postComment
  }
})
