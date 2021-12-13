<template>
  <div>
    <h3>我是详情页面</h3>
    <!-- 方式1 query传参 -->
    <h3>消息id：{{ $route.query.id }}</h3>
    <h3>消息标题：{{ $route.query.title }}</h3>


   <h3>消息id：{{ id }}</h3>
    <h3>消息标题：{{ title }}</h3>

     <!-- 方式2 params传参 -->
    <h3>消息id：{{ $route.params.id }}</h3>
    <h3>消息标题：{{ $route.params.title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$router);
    console.log(this.$router.currentRoute.query.title);
  },
  props:['id','title']
};
</script>

<style>
</style>