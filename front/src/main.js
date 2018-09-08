import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import vueSocketIo from 'vue-socket.io'
import socketIo from 'socket.io-client'
import 'animate.css'
Vue.use(vueSocketIo, socketIo('http://localhost:3000'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
