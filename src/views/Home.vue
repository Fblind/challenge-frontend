<template>
  <v-content>
    <PostView v-if="currentPost" :post="currentPost"/>
  </v-content>
</template>

<script>
// @ is an alias to /src
import PostView from '@/components/PostView.vue'
import {mapState} from "vuex"

export default {
  name: 'Home',
  components: {
    PostView,
  },
  computed: {...mapState(["currentPost"])},
}
</script>

<style>
</style>
