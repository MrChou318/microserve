import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
import {registerMicroApps, start} from 'qiankun'

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10000',
    container: '#sub1',
    activeRule: '/sub1'
  },
  {
    name: 'sub2',
    entry: '//localhost:20000',
    container: '#sub2',
    activeRule: '/sub2'
  }
]
registerMicroApps(apps)
start()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
