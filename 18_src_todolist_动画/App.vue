<template>
  <div class="todo-container">
    <MyHeader :receive="receive"></MyHeader>
    <MyList :todos="todos"></MyList>
    <MyFooter
      :todos="todos"
      :checkedAll="checkedAll"
      :handleDeleteAll="handleDeleteAll"
    ></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
import pubsub from "pubsub.js";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  methods: {
    receive(obj) {
      this.todos.unshift(obj);
    },
    todoDelete(id) {
      if (confirm("确认删除?")) {
        this.todos = this.todos.filter((v)=>{
          console.log('id=',id,v.id);
          return v.id != id
        })
      }
    },
    checkedAll(e) {
      // console.log(e.target.checked);
      this.todos.forEach((v) => {
        v.done = e.target.checked;
      });
    },
    handleDeleteAll() {
      console.log("this");
      this.todos = this.todos.filter((v) => {
        return !v.done;
      });
    },
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  watch: {
    //深度监视
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    // this.$bus.$on("todoDelete",this.todoDelete)
    pubsub.subscribe("todoDelete", (params) => {
      console.log("params=", params);
      this.todoDelete(params);
    }),
      pubsub.subscribe("handleEdit", (param1, param2) => {
        this.todos.forEach((todo) => {
          if (todo.id === param1) {
            todo.title = param2;
            todo.isEdit = false;
          }
        });
      });
  },
  beforeDestroy() {
    // this.$bus.$off(['todoDelete'])
    pubsub.unsubscribe("todoDelete", "handleEdit");
  },
};
</script>

<style >
body {
  background-color: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset0 1px 0 rgba(255, 255, 255, 0.2) 0 1px 2px
    rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: aquamarine;
  border: 1px solid beige;
  margin-right: 5px;
}

.btn:focus {
  outline: none;
}

.todo-container {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>