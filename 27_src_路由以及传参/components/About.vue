<template>
  <div>
    <h2>我是About页面</h2>
    <ul class="list">
      <router-link to="/about/message" class="list-item" active-class="active">消息</router-link>
      <router-link to="/about/news" class="list-item" active-class="active">新闻</router-link>
    </ul>
    <div class="detail">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0px;
  border-width: 1px;
  border-style: outset;
  border-radius: 4px;
  background-color: white;
  justify-content: space-around;
}
.list-item {
  display: flex;
  justify-content: center;
  width: 50%;
  text-decoration: none;
}

.active{
  background-color: violet;
}
</style>