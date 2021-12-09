import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    jia(context, value) {
        console.log('actions-context',context);
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    },
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaDelay(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    }
}

const mutations = {
    JIA(state, value) {
        console.log("mutations-context=",state);
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }
}

const state = {
    sum: 0,
    school:'联储大学',
    address:'北京'
}


//加工state中的数据
const getters ={
    bigSum(state){
        return state.sum * 10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
