<template>
  <Counter/>
</template>

<script>
import Counter from "./components/Counter";
export default {
  name: "App",
  components: {
    Counter,
  },
  mounted(){
    console.log(this);
  }
};
</script>

<style  scoped>
 
</style>