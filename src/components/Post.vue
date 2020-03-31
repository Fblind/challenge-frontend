<template>
  <v-container flex class="post-item">
    <v-row>
      <v-col :cols="4" class="pb-1">
        <h1 class="author">{{post.author}}</h1>
      </v-col>
      <v-col class="pb-1">
      </v-col>
      <v-col :cols="1" class="pb-1">
        <v-icon>close</v-icon>
      </v-col>
    </v-row>
    <v-row class="content">
      <v-col :cols="4" class="pt-0 pr-0" v-if="post.thumbnail">
        <v-img class="thumbnail" :src="post.thumbnail"></v-img>
      </v-col>
      <v-col class="post-info pt-0 pl-0" :align-self="'center'">
        <h1>{{post.title}}</h1>
        <span><h6>{{post.created_utc}}</h6>     <h6>{{post.num_comments}} comments</h6></span>
      </v-col>
      <v-col :cols="1" :align-self="'center'" class="pt-0">
        <v-icon>chevron_right</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      post: {
        "domain": "i.imgur.com",
        "banned_by": null,
        "media_embed": {},
        "subreddit": "funny",
        "selftext_html": null,
        "selftext": "",
        "likes": null,
        "user_reports": [],
        "secure_media": null,
        "link_flair_text": null,
        "id": "2hqlxp",
        "gilded": 0,
        "secure_media_embed": {},
        "clicked": false,
        "report_reasons": null,
        "author": "washedupwornout",
        "media": null,
        "score": 4841,
        "approved_by": null,
        "over_18": false,
        "hidden": false,
        "thumbnail": "http://b.thumbs.redditmedia.com/9N1f7UGKM5fPZydrsgbb4_SUyyLW7A27um1VOygY3LM.jpg",
        "subreddit_id": "t5_2qh33",
        "edited": false,
        "link_flair_css_class": null,
        "author_flair_css_class": null,
        "downs": 0,
        "mod_reports": [],
        "saved": false,
        "is_self": false,
        "name": "t3_2hqlxp",
        "permalink": "/r/funny/comments/2hqlxp/man_trying_to_return_a_dogs_toy_gets_tricked_into/",
        "stickied": false,
        "created": 1411975314,
        "url": "http://i.imgur.com/4CHXnj2.gif",
        "author_flair_text": null,
        "title": "Man trying to return a dog's toy gets tricked into playing fetch",
        "created_utc": 1411946514,
        "ups": 4841,
        "num_comments": 958,
        "visited": false,
        "num_reports": null,
        "distinguished": null
      }
    }
  }
}
</script>

<style>
.post-item {
  background-color: white;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 500px;
  border-left: 3px solid grey;
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
