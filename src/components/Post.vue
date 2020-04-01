<template>
  <v-container flex class="post-item" :class="post.viewed ? 'post-item-viewed' : ''">
    <v-row>
      <v-col :cols="4" class="pb-1">
        <h1 class="author">{{post.author}}</h1>
      </v-col>
      <v-col class="pb-1">
      </v-col>
      <v-col :cols="1" class="pb-1 mr-2">
        <v-icon @click="removePost(post)">close</v-icon>
      </v-col>
    </v-row>
    <template v-if="post.thumbnail">
      <v-row class="content" @click="setViewedPost(post)">
        <v-col :cols="4" class="pt-0 pr-0">
          <v-img class="thumbnail" :src="post.thumbnail"></v-img>
        </v-col>
        <v-col class="post-info pt-0 pl-0" :align-self="'center'">
          <h1>{{post.title}}</h1>
          <span><h6>{{post.created_utc | fromNow}}</h6>     <h6>{{post.num_comments}} comments</h6></span>
        </v-col>
        <v-col :cols="1" :align-self="'center'" class="pt-0 mr-2">
          <v-icon>chevron_right</v-icon>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <v-row class="content" @click="setViewed(post)">
        <v-col class="post-info pt-0 pl-3" :align-self="'center'">
          <h1>{{post.title}}</h1>
          <span><h6>{{post.created_utc | fromNow}}</h6>     <h6>{{post.num_comments}} comments</h6></span>
        </v-col>
        <v-col :cols="1" :align-self="'center'" class="pt-0">
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import moment from "moment";
import {mapMutations} from "vuex";

export default {
  name: "Post",
  props: ["post"],
  filters: {
    fromNow(utc) {
      return moment(utc).fromNow();
    }
  },
  methods: {
    ...mapMutations(["setCurrentPost", "removePost", "setViewed", "setDrawer"]),
    setViewedPost(post) {
      // if tablet or mobile
      if (window.innerWidth <= 1024) {
        this.setDrawer(false);
      }
      if (post.thumbnail) {
        this.setCurrentPost(post);
      } else {
        this.setViewed(post);
      }
    }
  },
}
</script>

<style>
.post-item {
  background-color: white;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 500px;
  border-left: 3px solid grey;
}

.post-item-viewed {
  border-left: 3px solid green;
}

.post-item .author {
  text-align: left;
  font-size: 14px;
  font-weight: 400;
}

.post-item .thumbnail {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  box-shadow: -2px 11px 13px rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 600px) {
  .post-item .thumbnail {
    border-radius: 50%;
    height: 80px;
    width: 80px;
    box-shadow: -2px 11px 13px rgba(0, 0, 0, 0.5);
  }
}

.post-item .post-info h1 {
  font-size: 20px;
  line-height: 1em;
}

.post-item .post-info h6 {
  display: inline-block;
}

.post-item .content {
  cursor: pointer;
}
</style>
