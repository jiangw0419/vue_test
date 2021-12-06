
<template>
  <div>
    <!-- 基本用法 -->
    <!-- <Student name="张三" age="18" sex="男"></Student> -->
    <!-- 验证年龄+1 -->
    <!-- <Student name="李四" :age="19" sex="男"></Student> -->
    <hr/>
    <!-- 第二种用法 -->
    <!-- <Student name="王老五" :age="19" sex="女"></Student> -->

    <!-- 第三种用法 -->
    <Student name="王老五" :age=19 ></Student>
  </div>
</template>

<script>
import Student from './components/Student'
export default {
    name:'App',
    components:{
        Student,
    },
   
}
</script>

<style>

</style>