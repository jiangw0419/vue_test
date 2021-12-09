<template>
  <div class="counter">
    <h2>相加的总合为:{{ sum }}</h2>
    <h2>放大十倍:{{ bigSum }}</h2>
    <h3>学校名称:{{ school }}</h3>
    <h3>学校地址:{{ address }}</h3>
    <!-- <h3>Person组件的人员数量为:{{ userList.length }}</h3> -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇数相加</button>
    <button @click="incrementDelay(n)">延迟相加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "Counter",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    ...mapState('counter_option',["sum", "school", "address","userList"]),
    ...mapGetters('counter_option',{ bigSum: "bigSum" }),
    
  },
  methods: {
    ...mapMutations('counter_option', {increment:"JIA", decrement: "JIAN" }),
    ...mapActions('counter_option',{incrementOdd:'jiaOdd',incrementDelay:'jiaDelay'})
  },
  mounted(){
    console.log(this.$store);
  }
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>