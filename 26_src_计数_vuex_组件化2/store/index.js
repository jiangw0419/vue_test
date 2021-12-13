import Vue from "vue";
import Vuex from 'vuex'

import counterOption from './modules/counte'
import personOption from './modules/person'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        counter_option:counterOption,
        personOption:personOption,
    }
})
