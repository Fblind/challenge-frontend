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

function getPosts(options) {
  // t	one of (hour, day, week, month, year, all)
  // after	fullname of a thing => next
  // before	fullname of a thing => prev
  // count	a positive integer (default: 0)
  // limit	the maximum number of items desired (default: 25, maximum: 100)
  // show	(optional) the string all
  // sr_detail (optional) expand subreddits
  let querystring = "?limit=5";
  if (options && options.next) {
    querystring += `&after=${options.next}`;
  }
  return fetch(`https://www.reddit.com/r/all/top.json?${querystring}`)
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
    drawer: true,
  },
  plugins: [createPersistedState()],
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    removePost(state, post) {
      state.posts.splice(state.posts.indexOf(post), 1);
      if (post.id === state.currentPost.id) {
        state.currentPost = null;
      }
    },
    setCurrentPost(state, post) {
      const postIndex = state.posts.findIndex(p => p.id === post.id);
      state.posts[postIndex].viewed = true;
      state.currentPost = post;
    },
    removeAllPosts(state) {
      state.posts = [];
      state.currentPost = null;
    },
    addPosts(state, posts) {
      state.posts = state.posts.concat(posts);
    },
    setViewed(state, post) {
      const postIndex = state.posts.findIndex(p => p.id === post.id);
      state.posts[postIndex].viewed = true;
    },
    setDrawer(state, visibility) {
      state.drawer = visibility;
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
    },
    async fetchNextPosts({state, commit, dispatch}) {
      const lastPost = state.posts[state.posts.length - 1];
      if (!lastPost) {
        return dispatch("fetchPosts");
      }
      const posts = await getPosts({next: lastPost.name});
      commit("addPosts", posts.data.children.map(c => castPost(c.data)));
    }
  },
  modules: {
  }
})
