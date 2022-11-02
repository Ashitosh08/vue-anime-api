import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vue from 'vue'
// import VueResource from 'vue-resource'

// Vue.use(VueResource)
createApp(App).use(store).use(router).mount('#app')
// export const eventBus = createApp(App)
