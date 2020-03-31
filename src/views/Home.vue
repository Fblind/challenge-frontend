<template>
  <v-content>
    <transition-group name="list">
      <Post :post="post" v-for="post of posts" :key="post.id" class="list-item"/>
    </transition-group>
    <PostView :post="posts[0]"/>
  </v-content>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import PostView from '@/components/PostView.vue'
import {mapState, mapActions} from "vuex"

export default {
  name: 'Home',
  components: {
    Post,
    PostView,
  },
  created() {
    this.fetchPosts();
  },
  computed: {...mapState(["posts"])},
  methods: {...mapActions(["fetchPosts"])},
}
</script>

<style>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
