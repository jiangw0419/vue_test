<template>
  <div class="todo-container">
    <MyHeader :receive="receive"></MyHeader>
    <MyList :todos="todos" :handleDelete="handleDelete"></MyList>
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
    handleDelete(id) {
      if (confirm("确认删除?")) {
        const index = this.todos.findIndex((value) => {
          return value.id === id;
        });
        this.todos.splice(index, 1);
        console.log("index", index);
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
    // todos(value){
    //   localStorage.setItem("todos",JSON.stringify(value))
    // }

    //深度监视
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
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

/* .btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
} */

.btn:focus {
  outline: none;
}

.todo-container {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>