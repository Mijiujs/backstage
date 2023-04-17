import Vue from 'vue'
import { Button } from 'element-ui';
import { Input } from 'element-ui';
import { Select } from 'element-ui';
import { Option } from 'element-ui';
import { Row } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';

Vue.use(Button)
Vue.config.productionTip = false

Vue.use(Input)

Vue.use(Select)

Vue.use(Option)

Vue.use(Row)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
