import Vue from 'vue'
import VueScreen from 'vue-screen';
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/base'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css' 

Vue.config.productionTip = false

Vue.use(VueScreen, { md: 768, lg: 992, });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
