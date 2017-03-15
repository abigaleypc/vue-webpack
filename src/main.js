import Vue from 'vue'
import router from './router'
import store from 'store'

const App = Vue.extend({ store })

router.start(App, '#app')