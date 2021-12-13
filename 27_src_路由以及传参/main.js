import Vue  from 'vue'

import App from './App'

import router from './route'

new Vue({
    el:'#app',
    render:h=>h(App),
    router:router,
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})