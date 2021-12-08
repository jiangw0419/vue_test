<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">点我将学生发送姓名到app</button>
    <button @click="unbind">解绑事件</button>
    <button @click="demo">解绑多个事件</button>

    <button @click="death">销毁自定义事件</button>

  </div>
</template>

<script>

export default {
  name: "Student",
  data() {
    return {
      name:"张三",
      age :18,
    };
  },
  methods:{
    sendStudentName(){
      this.$emit("getStudentName",this.name)
    },
    demo(){
      this.$emit("demoLog",this.name,1,2,3,4,5)
    },
    unbind(){
      // this.$off('getStudentName')//解绑一个事件

      //解绑指定事件
      // this.$off(['getStudentName','demoLog'])
      //解绑所有的事件
      this.$off()
    },
    death(){
      this.$destroy()
    }
  }
};
</script>

<style scoped>
.student {
  margin-top: 30px;
  padding: 5px;
  background-color: skyblue;
}
</style>
