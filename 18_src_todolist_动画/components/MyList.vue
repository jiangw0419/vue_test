<template>
  <div>
    <ul class="todo-main">
      <transition-group name="hello" appear>
        <MyItem v-for="todo in todos" :key="todo.id" :todo="todo"></MyItem>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: { MyItem },
  data() {
    return {};
  },
  props: ["todos"],
};
</script>

<style scoped>
/* 方法1 */
/* .hello-enter-active{
    animation: enter-in 0.5s;
  }
  .hello-leave-active{
    animation: enter-in o.5s reverse;
  }

  @keyframes enter-in{
    0%{
      transform: translateX(100%);
    }
    100%{
      transform: translateX(0%);
    }
  } */

/* 方法2 */

.hello-enter-active,.hello-leave-active{
  transition: 0.5s linear;
}

.hello-leave-to,
.hello-enter {
  transform: translateX(100%);
}
.hello-leave,
.hello-enter-to {
  transform: translateX(0%);
}


.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>