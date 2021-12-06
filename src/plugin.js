import Vue from "vue";

export default {
    install(vue) {
        console.log("@@@@install", vue)

        //全局过滤器
        Vue.filter("mySlice", function (value) {
            console.log("filter------>", value);
            return value.slice(0,4)
        })

        //全局指令
        Vue.directive('fbind', {
            //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
            bind(e, b) {
                console.log("bind");
                e.value = b.value
            },
            //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
            //----指令所在元素被插入到页面时调用
            inserted(e, b) {
                console.log("inserted",b);
                e.focus()
            },
            //所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
            update(e, b) {
                console.log("update");
                e.value = b.value
            }
        })

        //定义混合
        Vue.mixin({
            data() {
                return {
                    x:200,
                    y:100
                }
            },
        })

        //给vue原型上天机一个方法
        Vue.prototype.hello = ()=>{alert('你好啊')}

    }
}