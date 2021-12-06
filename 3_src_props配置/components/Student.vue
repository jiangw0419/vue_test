<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <hr/>
    <button @click="updateAge">更新年龄</button>
    <h2>学生年龄：{{ myAge }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "欢迎来到联储大学",
      //props优先级高
      myAge:this.age + 1 
    };
  },
  methods:{
    updateAge(){
     this.myAge ++
    }
  },
  // 1/基础用法，简单接受String类型
  // props: ["name", "sex", "age"],

  //2.接收的同事限定数据类型
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }
  
  //3.默认值，必要性，类型
  props:{
    name:{
      type:String,
      required:true,
    },
    age:{
      type:Number,
      default:99,
    },
    sex:{
      type:String,
      default:"男"
    }
  }

};
</script>

<style>
.student {
  background-color: skyblue;
}
</style>
