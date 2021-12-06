
<template>
  <div>
      <h1 v-text="msg" id="idTitle"></h1>
      <h1 v-text="msg" ref="refTitle"></h1>
      <button @click="showDom" ref="btn">点我显示dom</button>
      <School ref="sch"/>
      <School></School>   
  </div>
</template>

<script>
import School from './components/School'
export default {
    name:'App',
    components:{
        School,
    },
    data() {
        return {
            msg :'欢迎来到vue'
        }
    },
    methods:{
        showDom(){
            console.log(document.getElementById("idTitle"));   //真实dom
            console.log(this.$refs.refTitle);   
            console.log(this.$refs.btn);
            console.log(this.$refs.sch);    //子组件实例vc
        }
    }
}
</script>

<style>

</style>