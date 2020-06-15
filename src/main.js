import Vue from 'vue'
import App from './App.vue'
import {Button, Input, Select, Divider, Icon} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './style/index.scss';
import {EventBus} from "./utils/event-bus";

Vue.use(Button);
Vue.use(Input);
Vue.use(Select);
Vue.use(Divider);
Vue.use(Icon);
Vue.config.productionTip = false

Vue.prototype.$EventBus = EventBus
new Vue({
    render: h => h(App),
}).$mount('#app')
