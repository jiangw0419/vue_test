<template>
  <div>
     <li>
      <label>
        <input type="checkbox" v-model="todo.done" />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          v-show="todo.isEdit"
          type="text"
          ref="editTodo"
          :value="todoEditData"
          @keyup.enter="editDone(todo)"
        >
      </label>
      <button class="btn btn-danger" @click="handleDelete">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>

   
  </div>
</template>

<script>
import pubsub from "pubsub.js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleDelete() {
      pubsub.publish("todoDelete", [this.todo.id]);
      // this.$bus.$emit("todoDelete");
    },
    handleEdit(todo) {
      if (Reflect.has(todo, "isEdit")) {
        todo.isEdit = !todo.isEdit;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(() => {
        this.$refs.editTodo.focus();
      });
    },
    editDone(todo){
      pubsub.publish('handleEdit',[todo.id,this.$refs.editTodo.value])
      // console.log("value=",this.$refs.editTodo.value);
      // todo.title = this.$refs.editTodo.value
      // todo.isEdit = false
    }
  },
  data() {
    return {
      todoEditData: this.todo.title,
    };
  },
};
</script>

<style scoped lang='less'>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: salmon;
  .btn {
    display: block;
  }
}
</style>