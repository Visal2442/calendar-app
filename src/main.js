import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import { Datetime } from 'vue-datetime'

Vue.config.productionTip = false
Vue.component('BaseDateTime', Datetime)
import 'vue-datetime/dist/vue-datetime.css';

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app')
