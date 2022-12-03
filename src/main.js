import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ModalPlugin from './plugins/ModalPlugin'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faEllipsisVertical, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEllipsisVertical)
library.add(faPen)
library.add(faTrashCan)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ModalPlugin);
//Vue.use(Router)
new Vue({
  store,
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
