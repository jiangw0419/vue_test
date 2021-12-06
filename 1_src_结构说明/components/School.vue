<template>
  <!-- 组件标签 -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ addr }}</h2>
    <button @click="showName">点我提示学校名称</button>
  </div>
</template>

<script>
    export default {
    name: "School", //组件别名
    data() {
        return {
        name: "联储大学",
        addr: "北京",
        };
    },
    methods: {
        showName() {
          alert(this.name);
        },
    },
    };

// const school = {
//     name:'School',//组件别名
//     data() {
//         return {
//             schoolName:'联储大学',
//             schoolAddr:'北京'
//         }
//     },
//     methods: {
//         showName(){
//             alert(this.schoolName)
//         }
//     },
// }
//
//1 export default school
//2 export{ school}
</script>

<style>
/* 组件样式 */
.demo {
  background-color: skyblue;
}
</style>
