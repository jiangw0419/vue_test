
<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <School :getSchoolName="getSchoolName"></School>
    <!-- <Student v-on:getStudentName="getStudentName"></Student> -->
    <!-- <Student @getStudentName="getStudentName"></Student> -->
    <!-- <Student @getStudentName="getStudentName" @demoLog="demo1"></Student> -->

    <Student ref="student" @click.native="show"></Student>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好啊",
    };
  },
  methods: {
    getSchoolName(value) {
      console.log("APP接受到学校名称", value);
    },
    getStudentName(value) {
      console.log("aaaa");
      console.log("App接收到学生姓名", value);
    },
    demo1(value, ...params) {
      console.log("demo1", value, params);
    },
    show() {
      alert(1231)
    },
  },
  mounted() {
    this.$refs.student.$on("getStudentName", this.getStudentName);
    // console.log("mounted");
    // this.$refs.student.$once('getStudentName',this.getStudentName)
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>