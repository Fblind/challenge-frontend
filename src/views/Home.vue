<template>
  <v-content>
    <Post :post="post" v-for="post of posts" :key="post.id"/>
  </v-content>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import {mapState, mapActions} from "vuex"

export default {
  name: 'Home',
  components: {
    Post
  },
  created() {
    this.fetchPosts();
  },
  computed: {...mapState(["posts"])},
  methods: {...mapActions(["fetchPosts"])},
}
</script>
