<template>
  <div class="demo">
    <h2 class="schoolName">学校名称：{{ name}}</h2>
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




<style scoped lang="less" >

// scoped 样式作用域
// <style scoped>

// less---安装>安装最新版本1 npm i less-loader  安装指定版本2. npm i less-loader@7    
  // 查看相关信息：npm view webpack versions    npm view less-loader versions  

.demo {
  background-color: rebeccapurple;
  .schoolName{
    font-size: 40px;
  }
}
</style>
