<template>
  <div class="search">
    <h3>欢迎使用github查询接口</h3>
    <input type="search" placeholder="请输入用户名" v-model="keyword" />
    <button @click="searchUser">搜索</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchUser() {
      axios.get(`https://api.github.com/users?q=${this.keyword}`).then(
        (response) => {
          console.log("请求成功");
          console.log("response=", response.data);
          this.$bus.$emit('list',response.data)
        },
        (error) => {
          console.log("请求失败");
          console.log("error=", error);
        }
      );
    },
  },
};
</script>

<style scoped>
</style>