import Vue from 'vue'
import App from './App'
import Data from "models/data"

new Vue({
  el: '#app',
  render: h => h(App),
  data: Data
})
