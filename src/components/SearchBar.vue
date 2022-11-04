<template lang="">
  <section className="section search">
    <form className="search-form" @submit.prevent="handleSearch">
      <div className="form-control">
        <label htmlFor="name">Search your favourite anime</label>
        <input type="search" name="name" id="name" v-model="searchTerm" />
      </div>
    </form>
  </section>
  <!-- <anime-list-vue /> -->

  <section className="section">
    <h2 className="section-title">Animes</h2>
    <div className="animes-center" v-if="animeList.length > 1">
      <anime-list-vue
        v-for="anime in animeList"
        :key="anime.mal_id"
        :anime="anime"
      />
    </div>
    <div className="section-title" v-else>
      <h4>No animes matched your search criteria</h4>
    </div>
  </section>
</template>
<script>
import { ref } from 'vue'
import AnimeListVue from './AnimeList.vue'
export default {
  components: {
    AnimeListVue,
  },

  setup() {
    const searchTerm = ref('')
    const animeList = ref([])
    // console.log(searchTerm)
    const handleSearch = async () => {
      animeList.value = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchTerm.value}&limit=10`
      )
        .then((res) => res.json())
        .then((data) => data.data)
      console.log(animeList.value)
    }

    // const handleSearch = async () => {
    //   const resp = await fetch(
    //     `https://api.jikan.moe/v4/anime?q=${searchTerm.value}&limit=10`
    //   )
    //   const respdata = await resp.json()
    //   console.log(respdata.data)

    //   // animeList.push(respdata.data)
    //   // console.log(animeList)
    // }
    // handleSearch()
    return { handleSearch, searchTerm, animeList, AnimeListVue }
  },
}
</script>
<style>
.section {
  padding: 2rem 0;
}
.section-title {
  font-size: 3rem;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 1rem;
}
.animes-center {
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--fullWidth);
  display: grid;
  row-gap: 2rem;
  column-gap: 2rem;
  /* align-items: start; */
}
@media screen and (min-width: 576px) {
  .animes-center {
    grid-template-columns: repeat(auto-fill, minmax(338.8px, 1fr));
  }
}
/* 
====== 
Form
======
*/
.search {
  margin-top: 1rem;
  padding-bottom: 0;
}

.search-form {
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--maxWidth);
  background: var(--mainWhite);
  padding: 2rem 2.5rem;
  text-transform: capitalize;
  border-radius: var(--mainBorderRadius);
  box-shadow: var(--lightShadow);
}

.form-control label {
  display: block;
  margin-bottom: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.25rem;
  color: var(--primaryColor);
}
.form-control input {
  width: 100%;
  border: none;
  border-color: transparent;
  background: var(--mainBackground);
  border-radius: var(--mainBorderRadius);
  padding: 0.5rem;
  font-size: 1.2rem;
}
</style>
