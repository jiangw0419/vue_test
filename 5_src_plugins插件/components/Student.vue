<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <input type="text" v-fbind:value="name">
    <Button @click="test">点我测试一个hello</Button>
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
    test(){
      this.hello()
    }
  }
};
</script>

<style>
.student {
  background-color: skyblue;
}
</style>
