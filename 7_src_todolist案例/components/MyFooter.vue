<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" @change="checkedAll" />
    </label>
    <span>已完成{{ doneTodos }}</span
    >/ 全部{{ todos.length }}
    <button class="btn btn-danger" @click="handleDeleteAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {};
  },
  computed: {
    doneTodos() {
      // const dones = this.todos.reduce((pre, current) => {
      //   return pre + (current.done ? 1 : 0);
      // }, 0);
      // return dones;

      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
  },
  props: ["todos","checkedAll","handleDeleteAll"]
};
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>