<template>
  <article className="anime">
    <div></div>
    <div className="img-container" :key="anime.mal_id">
      <img :src="anime.images.jpg.large_image_url" :alt="anime.title" />
    </div>
    <div className="anime-footer">
      <h4>{{ anime.title }}</h4>
      <p></p>

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
        className="btn btn-primary btn-details"
        name="watchlist"
        @click="addToWatchlist(anime)"
      >
        Add to watchlist
      </button>
    </div>
  </article>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['anime'],

  methods: {
    ...mapActions(['addToWatchlist']),
  },
}
</script>
<style>
.anime {
  background: var(--mainWhite);
  margin-bottom: 2rem;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--mainBorderRadius);
}
.anime:hover {
  box-shadow: var(--darkShadow);
}
.anime img {
  height: 20rem;
  object-fit: cover;
  border-top-left-radius: var(--mainBorderRadius);
  border-top-right-radius: var(--mainBorderRadius);
}
.anime-footer {
  padding: 1.5rem;
}
.anime-footer h3,
.anime-footer h4,
.anime-footer p {
  margin-bottom: 0.3rem;
}
.anime-footer h3 {
  font-size: 2rem;
}
.anime-footer p {
  color: var(--primaryColor);
  margin-bottom: 0.5rem;
}
.section-title {
  font-size: 3rem;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 1rem;
}
</style>
