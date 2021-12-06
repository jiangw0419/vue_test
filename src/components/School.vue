<template>
  <div class="school">
    <h2>学校名称：{{ name | mySlice}}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>

export default {
  name: "Student",
  data() {
    return {
      name:"联储大adfasdfa",
      address : "北京·朝阳"
    };
  },
};
</script>

<style>
.school {
  background-color: skyblue;
}
</style>
