import Vue from 'vue'
import { Button,Row,Input,Select,Option,Container,Header,Main,Table,TableColumn} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
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
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
