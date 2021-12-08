<template>
  <div class="school">
    <h2 class="schoolName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">点我将学校名称发送到app</button>
  </div>
</template>
<script>
export default {
  name: "Student",
  props:['getSchoolName'],
  data() {
    return {
      name: "联储大学",
      address: "北京·朝阳",
    };
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
};
</script>




<style scoped lang="less" >
.school {
  padding: 5px;
  background-color: rebeccapurple;
}
</style>
