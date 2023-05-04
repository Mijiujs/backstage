import Vue from 'vue'
import { Button,Row,Input,Select,Option,Container,Header,Main,Table,TableColumn,Tag} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import App from './App.vue';
import router from './router';

Vue.use(Button)
Vue.config.productionTip = false

Vue.use(Input)

Vue.use(Select)

Vue.use(Option)

Vue.use(Row)

Vue.use(Container)

Vue.use(Header)

Vue.use(Main)

Vue.use(Table)

Vue.use(TableColumn)

Vue.use(Tag)

Vue.prototype.$axios = axios;


// axios.defaults.baseURL = 'https://mock.apifox.cn';// 米酒的云端mock数据

// axios.defaults.baseURL = '';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
