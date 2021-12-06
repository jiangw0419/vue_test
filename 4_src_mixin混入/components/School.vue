<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我显示名称</button>
  </div>
</template>

<script>
import {hunhe} from "../mixin"
export default {
  name: "Student",
  data() {
    return {
      name:"联储大学",
      address : "北京·朝阳"
    };
  },
  mixins:[hunhe]
};
</script>

<style>
.school {
  background-color: skyblue;
}
</style>
