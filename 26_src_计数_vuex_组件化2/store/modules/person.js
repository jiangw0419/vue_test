
export default {
    // 重要
    namespaced:true,
    actions: {
        filterAdd(context,value){
            if(value.name && '王' === value.name.charAt(0)){
                context.commit('ADD',value)
            }
        }
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
        getFirstUsr(state){
            return state.userList[0]
        }
    }
}
