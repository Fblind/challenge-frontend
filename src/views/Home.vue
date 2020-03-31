<template>
  <v-content>
    <Post/>
  </v-content>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'

export default {
  name: 'Home',
  components: {
    Post
  }
}
</script>
