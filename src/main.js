import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
Vue.config.productionTip = false
Vue.use(SuiVue);
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
