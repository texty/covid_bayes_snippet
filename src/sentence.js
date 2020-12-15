import Vue from 'vue'
import Sentence from './Sentence.vue'
// import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Sentence),
}).$mount('#app')
