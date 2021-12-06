<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">点我显示名称</button>
  </div>
</template>

<script>
import {hunhe} from "../mixin"
import hunhe2 from '../mixin2'

export default {
  name: "Student",
  data() {
    return {
      name:"张三",
      age :18,
      x:666
    };
  },
  mixins:[hunhe,hunhe2]
};
</script>

<style>
.student {
  background-color: skyblue;
}
</style>
