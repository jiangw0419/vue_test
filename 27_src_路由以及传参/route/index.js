import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import News from '../components/News'
import Message from '../components/Message'
import Detail from '../components/Detail'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About,
        children: [
            {
                path: 'message',
                component: Message,
                children:[
                    {   
                        path:'detail',
                        // path:'detail/:id/:title',//params传参
                        component:Detail,
                        //1.params方式传参
                        // props:{id:'testid',title:'testtitle'},

                        //2.route.params会被解构
                        // props:true

                        //3.对象传递
                        props(route){
                            console.log('route====',route);
                            return {id:6666,title:'你好'}
                        }
                    }
                ]
            },
            {
                path: 'news',
                component: News
            }
        ]
    }
]
export default new VueRouter({
    routes: routes
})