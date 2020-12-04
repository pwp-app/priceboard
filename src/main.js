import Vue from 'vue';
import axios from 'axios';
import VueLevel from 'vue-level';
import VirtualMasonry from 'vue-virtual-masonry';
import App from './App.vue';
import router from './router';
import './styles/basic.less';
import './plugins/common';
import './plugins/fontawesome';

Vue.config.productionTip = false;

Vue.use(VueLevel, {
  name: 'priceboard-data',
  shortcuts: true,
});

Vue.component('VirtualMasonry', VirtualMasonry);

axios.defaults.baseURL = '';
axios.defaults.withCredentials = false;
axios.defaults.timeout = 10000;

Vue.prototype.axios = axios;
Vue.prototype.STORE_API = 'https://cors-anywhere.herokuapp.com/https://store.steampowered.com/api/appdetails';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
