import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//V-calendar
import VCalendar from 'v-calendar';

//toasted
import Toasted from 'vue-toasted';
import Options from 'vue-toasted';

//VueToastr
import VueToastr from 'vue-toastr'
 


Vue.use(VueToastr)
Vue.use(Toasted, Options)
Vue.use(VCalendar)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
