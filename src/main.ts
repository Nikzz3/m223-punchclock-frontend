import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import { BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Notifications from 'vue-notification';
import VModal from 'vue-js-modal';

Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.use(BootstrapVueIcons);
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
