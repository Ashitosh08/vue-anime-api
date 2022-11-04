<template>
  <section className="section">
    <h2 className="section-title">watchlist</h2>
    <h2 className="section-title"></h2>
    <div className="animes-center">
      <!-- <h2>{{ anime.title }}</h2> -->
      <article className="anime" v-for="anime in watchlist" :key="anime.mal_id">
        <div className="img-container">
          <img :src="anime.images.jpg.large_image_url" alt="{{anime.title}}" />
        </div>
        <div className="anime-footer">
          <h4>{{ anime.title }}</h4>
          <p>{{ anime.role }}</p>

          <router-link
            :to="{
              name: 'anime',
              params: { id: anime.mal_id },
            }"
            className="btn btn-primary btn-details"
          >
            details
          </router-link>
          <button
            @click="removeWatchlist(anime.mal_id)"
            class="btn btn-primary btn-details"
          >
            Remove Watchlist
          </button>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['anime'],
  data() {
    return {}
  },

  computed: {
    ...mapGetters(['watchlist']),
  },
  methods: {
    ...mapActions(['removeWatchlist']),
  },
  // methods: {
  //   addToWatchlist(animes) {
  //     this.watchlist.push(animes)
  //     console.log(this.watchlist)
  //   },
  // },
}
</script>
<style></style>
