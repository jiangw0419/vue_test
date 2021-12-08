<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendMsgToSchool">发送消息给学校</button>
  </div>
</template>

<script>
import pubsub from "pubsub.js";
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    sendMsgToSchool() {
        pubsub.publish('hello',[this.name],)
    },
  },
};
</script>

<style>
.student {
  margin-top: 30px;
  padding: 5px;
  background-color: skyblue;
}
</style>
