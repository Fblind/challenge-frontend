<template>
  <v-app>
    <v-navigation-drawer app width="500" v-model="drawerModel">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Reddit Posts
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <transition-group name="list">
        <Post :post="post" v-for="post of posts" :key="post.id" class="list-item"/>
      </transition-group>
      <v-row>
        <v-col :cols="12" class="text-center mb-10">
          <v-btn outlined @click="fetchNextPosts">Show more</v-btn>
        </v-col>
      </v-row>
      <v-footer class="justify-center pl-0" height="50px" inset fixed padless>
        <h1 class="dismiss-all" @click="removeAllPosts">Dismiss all</h1>
      </v-footer>
    </v-navigation-drawer>
    <router-view/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import {mapState, mapActions, mapMutations} from "vuex"

export default {
  name: 'Home',
  components: {
    Post,
  },
  created() {
    this.fetchPosts();
  },
  computed: {
    ...mapState(["posts", "drawer"]),
    drawerModel: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.setDrawer(value);
      }
    }
  },
  methods: {
    ...mapActions(["fetchPosts", "fetchNextPosts"]),
    ...mapMutations(["removeAllPosts", "setDrawer"])
  },
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

.dismiss-all {
  cursor: pointer;
}
</style>
