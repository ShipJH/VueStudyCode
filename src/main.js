import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

new Vue({
  el: '#app',
  store,
  // store: store, 를 축약한 형태.
  render: h => h(App)
})

