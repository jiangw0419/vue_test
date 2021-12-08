<template>
  <div class="school">
    <h2 class="schoolName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "联储大adfasdfa",
      address: "北京·朝阳",
    };
  },
  mounted() {
    console.log("school", this.$bus);
    this.$bus.$on("data", (value) => {
      console.log("school--->", value);
    });
  },
  beforeDestroy() {
    this.$bus.$off('data')
  },
};
</script>




<style scoped lang="less" >
.school {
  padding: 5px;
  background-color: rebeccapurple;
}
</style>
