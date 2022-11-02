<template lang="">
  <section
    className="section anime-section"
    v-for="anime in animes"
    :key="anime.mal_id"
  >
    <router-link to="/" className="btn btn-primary"> back home </router-link>
    <h3 className="section-title">{{ anime.title }}</h3>
    <div className="details">
      <img :src="anime.images.jpg.large_image_url" alt="{{anime.title}}" />
      <div className="details-info">
        <p>
          <span className="details-data">title :{{ anime.title }}</span>
          {{ this.$route.params.id }}
        </p>
        <p>
          <span className="details-data">episodes :</span>{{ anime.episodes }}
        </p>
        <p><span className="details-data">url :</span> {{ anime.url }}</p>
        <p>
          <span className="details-data">aired_date :</span>
          {{ anime.aired.string }}
        </p>
        <p>
          <span className="details-data">synopsis :</span>
          {{ anime.synopsis }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      animes: [],
      id: this.$route.params.id,
    }
  },
  mounted() {
    this.getCharacter()
  },
  methods: {
    getCharacter() {
      var id = this.$route.params.id
      // console.log(id)
      axios
        .get(`https://api.jikan.moe/v4/anime/${id}?`)
        .then((result) => {
          console.log(result.data.data)
          this.animes.push(result.data.data)
          console.log(this.animes)
        })
        .catch((error) => {
          console.log(error)
        })
    },
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
anime
======
*/

.anime-section {
  text-align: center;
}
.details {
  width: 85vw;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
  /* display: flex; */
}
.details img {
  border-radius: var(--mainBorderRadius);
}
.details p {
  font-weight: bold;
  text-transform: capitalize;
  line-height: 1.8;
}
.details span {
  margin-right: 0.5rem;
}
.details-data {
  background: var(--primaryLightColor);
  padding: 0.25rem 0.5rem;
  border-radius: var(--mainBorderRadius);
  color: var(--primaryColor);
}
.details-info {
  padding-top: 2rem;
}
@media screen and (min-width: 992px) {
  .details {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 3rem;
    align-items: center;
  }
  .details-info {
    padding-top: 0;
  }
}
</style>
