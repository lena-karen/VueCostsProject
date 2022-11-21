import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


//Vue.use(Router)
new Vue({
  store,
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
