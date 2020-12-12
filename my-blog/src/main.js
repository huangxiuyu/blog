import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 
import Routers from '@/router/router.js';

Vue.use(iView);
Vue.use(VueRouter)
Vue.config.productionTip = false
// const RouterConfig = {
//   routes: Routers 
// };
// const router = new VueRouter(RouterConfig);
const router = new  VueRouter({
  routes: Routers

})  
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
