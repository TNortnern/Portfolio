import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import scrollactive from 'vue-scrollactive'

Vue.config.productionTip = false
const useScrollActive = Vue.use(scrollactive)
new Vue({
  created () {
    AOS.init({
      easing: "ease-out-back",
      duration: 500,
      delay: 120,
      once: true
    });
  },
  vuetify,
  useScrollActive,
  render: h => h(App)
}).$mount('#app')
