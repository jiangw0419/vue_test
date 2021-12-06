import Vue  from 'vue'

import App from './App'

//引入插件
import plugin from "./plugin";

//使用插件
Vue.use(plugin)

new Vue({
    el:'#app',
    render:h=>h(App),
})