import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

// fetch utils
async function handleResponse(response) {
  if (!response.ok) {
    throw new Error("nok fetch response");
  }
  return await response.json();
}

function getPosts() {
  return fetch("https://www.reddit.com/r/all/top.json?limit=50")
    .then(handleResponse);
}

// utils posts
function castPost(post) {
  const overrides = {viewed: false};
  const invalidThumbnails = ["default", "nsfw", "self"];
  if (invalidThumbnails.includes(post.thumbnail)) {
    overrides.thumbnail = null;
  }
  return Object.assign(post, overrides);
}

export default new Vuex.Store({
  state: {
    posts: [],
    currentPost: null,
  },
  plugins: [createPersistedState()],
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    removePost(state, post) {
      state.posts.splice(state.posts.indexOf(post), 1);
    },
    setCurrentPost(state, post) {
      const postIndex = state.posts.findIndex(p => p.id === post.id);
      state.posts[postIndex].viewed = true;
      state.currentPost = post;
    }
  },
  actions: {
    async fetchPosts({state, commit}) {
      try {
        if (!state.posts.length) {
          const posts = await getPosts();
          commit("setPosts", posts.data.children.map(c => castPost(c.data)));
        }
      } catch(_err) {
        commit("setPosts", []);
      }
    }
  },
  modules: {
  }
})
