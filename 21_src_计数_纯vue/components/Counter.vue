<template>
  <div class="counter">
    <h2>相加的总合为:{{ sum }}</h2>
    <select v-model.number="n" >
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
      sum: 0,
      n: 1,
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    incrementDelay() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>