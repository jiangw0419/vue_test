<template>
  <div>
    <h2>学生信息</h2>
    <h3>Counter组件则求和为:{{ sum }}</h3>
    <h3>用户列表第一条数据为:{{ firstUser }}</h3>
    <input v-model="userName" type="text" placeholder="请输入姓名" /><button
      @click="add"
    >
      添加
    </button>
    <button @click="addOnlyWang">只添加姓王的</button>
    <ul>
      <li v-for="user in $store.state.personOption.userList" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    sum() {
      //注意：：：：counter_option
      return this.$store.state.counter_option.sum;
    },
    firstUser(){
        return this.$store.getters['personOption/getFirstUsr']
    }
  },
  methods: {
    add() {
      const userObj = { id: nanoid(), name: this.userName };
      //注意：：：personOption/ADD  不是使用map...展开的路径写的方式不一样
      this.$store.commit("personOption/ADD", userObj);
      this.userName = "";
    },
    addOnlyWang() {
      const userObj = { id: nanoid(), name: this.userName };
      this.$store.dispatch("personOption/filterAdd", userObj);
    },
  },
  mounted(){
      console.log(this.$store);
  }
};
</script>

<style>
</style>