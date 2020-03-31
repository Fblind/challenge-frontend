<template>
  <v-card max-width="344" class="mx-auto">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{post.title}}</v-list-item-title>
        <v-list-item-subtitle>{{post.author}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="post.thumbnail" height="194"></v-img>
  </v-card>
</template>

<script>
export default {
  name: "PostView",
  props: ["post"]
}
</script>

<style>

</style>
