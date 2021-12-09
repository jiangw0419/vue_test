import Vue  from 'vue'

import App from './App'

import Store from './store'

new Vue({
    el:'#app',
    store:Store,
    render:h=>h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})