<template>
  <div class="counter">
    <h2>相加的总合为:{{ $store.state.sum }}</h2>
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
export default {
  name: "Counter",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
    //   this.$store.dispatch("jia", this.n);
    this.$store.commit('JIA',this.n)
    },
    decrement() {
    //   this.$store.dispatch("jian", this.n);
    this.$store.commit('JIAN',this.n)
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