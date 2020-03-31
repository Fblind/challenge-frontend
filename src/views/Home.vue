<template>
  <v-content>
    <Post :post="post" v-for="post of posts" :key="post.id"/>
  </v-content>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import {mapState} from "vuex"

export default {
  name: 'Home',
  components: {
    Post
  },
  computed: {...mapState(["posts"])}
}
</script>
