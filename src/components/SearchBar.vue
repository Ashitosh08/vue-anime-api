<template lang="">
  <section className="section search">
    <form className="search-form" @submit.prevent="fetchAnimes(searchTerm)">
      <div className="form-control">
        <label htmlFor="name">Search your favourite anime</label>
        <input type="search" name="name" id="name" v-model="searchTerm" />
      </div>
    </form>
  </section>
  <!-- <anime-list-vue /> -->
  <section className="section" v-if="animes.length > 1">
    <h2 className="section-title">Animes</h2>
    <div className="animes-center">
      <anime-list-vue
        v-for="anime in animes"
        :key="anime.mal_id"
        :anime="anime"
      />
    </div>
  </section>
  <div className="loader" v-else>Loading...</div>
</template>
<script>
// import { ref } from 'vue'

import { mapActions, mapGetters } from 'vuex'
import AnimeListVue from './AnimeList.vue'
export default {
  components: {
    AnimeListVue,
  },
  data() {
    return {
      searchTerm: '',
    }
  },

  computed: {
    ...mapGetters(['animes']),
  },
  methods: {
    ...mapActions(['fetchAnimes']),
  },
  created() {
    this.fetchAnimes()
    // console.log(this.fetchAnimes)
  },

  // setup() {
  //   const searchTerm = ref('')
  //   const animeList = ref([])
  //   const loading = ref(true)
  //   // console.log(searchTerm)
  //   const handleSearch = async () => {
  //     animeList.value = await fetch(
  //       `https://api.jikan.moe/v4/anime?q=${searchTerm.value}&limit=10`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => data.data)
  //     searchTerm.value = ''
  //     loading.value = false
  //     console.log(animeList.value)
  //   }

  //   // const handleSearch = async () => {
  //   //   const resp = await fetch(
  //   //     `https://api.jikan.moe/v4/anime?q=${searchTerm.value}&limit=10`
  //   //   )
  //   //   const respdata = await resp.json()
  //   //   console.log(respdata.data)

  //   //   // animeList.push(respdata.data)
  //   //   // console.log(animeList)
  //   // }
  //   // handleSearch()
  //   return { handleSearch, searchTerm, animeList, AnimeListVue }
  // },
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

/* loading */
.loader,
.loader:before,
.loader:after {
  background: transparent;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: var(--primaryColor);
  text-indent: -9999em;
  margin: 88px auto;
  margin-top: 20rem;
  position: relative;
  font-size: 3rem;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
