import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex组件化
const counterOption = {
    //重要
    namespaced:true,
    actions: {
        jia(context, value) {
            console.log('actions-context', context);
            context.commit('JIA', value)
        },
        jian(context, value) {
            context.commit('JIAN', value)
        },
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaDelay(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500);
        },
    },
    mutations: {
        JIA(state, value) {
            console.log("mutations-context=", state);
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '联储大学',
        address: '北京',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
const personOption = {
    // 重要
    namespaced:true,
    actions: {

    },
    mutations: {
        ADD(state, value) {
            console.log("value=", value);
            state.userList.unshift(value)
        }
    },
    state: {
        userList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {

    }
}

export default new Vuex.Store({
    modules:{
        counter_option:counterOption,
        personOption:personOption,
    }
})
