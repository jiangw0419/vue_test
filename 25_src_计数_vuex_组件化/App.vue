<template>
  <div>
    <Counter />
    <hr />
    <Person />
  </div>
</template>

<script>
import Counter from "./components/Counter";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: {
    Counter,
    Person,
  },
  mounted() {
    // console.log(this);
  },
};
</script>

<style  scoped>
</style>