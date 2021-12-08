<template>
  <div class="school">
    <h2 class="schoolName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// npm install pubsub.js
import pubsub from "pubsub.js";
export default {
  name: "Student",
  data() {
    return {
      name: "联储大adfasdfa",
      address: "北京·朝阳",
    };
  },
  mounted() {
    this.id = pubsub.subscribe("hello", (params) => {
      alert("学生发给我的信息是："+params)
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.id);
  },
};
</script>




<style scoped lang="less" >
.school {
  padding: 5px;
  background-color: rebeccapurple;
}
</style>
