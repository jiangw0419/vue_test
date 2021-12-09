<template>
  <div class="counter">
    <h2>相加的总合为:{{ sum }}</h2>
    <h2>放大十倍:{{ bigSum }}</h2>
    <h3>学校名称:{{school}}</h3>
    <h3>学校地址:{{address}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数相加</button>
    <button @click="incrementDelay">延迟相加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Counter",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    //1、通过计算属性获取
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school(){
    //     return this.$store.state.school
    // },
    //  address(){
    //     return this.$store.state.address
    // },

    //***********通过mapState***************** */
    // ...mapState({sum:'sum',school:'school',address:'address'}),

    //简写
    ...mapState(['sum','school','address']),

    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    // *************通关过mapGetters***********************
    ...mapGetters({bigSum:'bigSum'})

  },
  methods: {
    increment() {
      //   this.$store.dispatch("jia", this.n);
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      //   this.$store.dispatch("jian", this.n);
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementDelay() {
      this.$store.dispatch("jiaDelay", this.n);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>