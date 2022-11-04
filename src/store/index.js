import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    // loading: true,
    animes: [],
    watchlist: [],
  },
  mutations: {
    setAnimes(state, animes) {
      state.animes = animes
    },
    addToWatchlist(state, animes) {
      const watchlist = state.watchlist.find(
        (item) => item.mal_id === animes.mal_id
      )

      // localStorage.setItem('key', JSON.stringify(item));
      if (!watchlist) {
        state.watchlist.push({ ...animes, qty: 1 })
        // localStorage.setItem('key', JSON.stringify(item));
      } else {
        watchlist.qty++
        // item = JSON.parse(localStorage.getItem('key'));
      }
      // this.commit('saveData')
    },
    removeWatchlist(state, mal_id) {
      state.watchlist = state.watchlist.filter((item) => item.mal_id != mal_id)
      // this.commit('saveData')
    },
  },
  actions: {
    async fetchAnimes({ commit }, searchTerm) {
      const res = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=10`
      )
      commit('setAnimes', res.data.data)
    },
    // console.log(searchTerm)
    // const handleSearch = async () => {
    //   animeList.value = await fetch(
    //     `https://api.jikan.moe/v4/anime?q=${searchTerm.value}&limit=10`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => data.data)
    //   searchTerm.value = ''
    //   loading.value = false
    //   console.log(animeList.value)
    // }
    // getProducts({ commit }) {
    //   commit('getProductData')
    // },

    // addtowatchlist
    addToWatchlist({ commit }, animes) {
      commit('addToWatchlist', animes)
    },
    // removewatchlist
    removeWatchlist({ commit }, mal_id) {
      commit('removeWatchlist', mal_id)
    },
  },
  getters: {
    animes: (state) => state.animes,
    watchlist: (state) => state.watchlist,
  },
  modules: {},
})
