<template>
  <!-- 组件标签 -->
  <div >
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
  export default {
    name: "Student", //组件别名
    data() {
      return {
        name: "学生姓名",
        age: "123",
      };
    },
  };
</script>

<style>
/* 组件样式 */
</style>
