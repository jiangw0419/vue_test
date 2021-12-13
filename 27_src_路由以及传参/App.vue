<template>
  <div>
    <h2>我是标题栏</h2>
    <div>
      <div class="guide">
        <ul class="guide-main">
          <router-link class="guide-item" active-class="active" to="/home"
            >Home</router-link
          >
          <router-link class="guide-item" active-class="active" to="/about"
            >About</router-link
          >
        </ul>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Home from "./components/Home.vue";
// import About from "./components/About.vue";
export default {
  name: "App",
  // data() {
  //   return {
  //     items: ["Home", "About"],
  //   };
  // },
  // components: {
  // Home,
  // About,
  // },

  mounted() {
    console.log("route=", this);
    console.log("route=", this.$router);
  },
};
</script>

<style  scoped>
.content {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

.guide {
  display: flex;
  flex-direction: row;
}

.guide-main {
  border-width: 1px;
  height: 100px;
  border-color: rosybrown;
  border-radius: 4px;
  border-style: outset;
  width: 100px;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.guide-item {
  width: 100%;
  list-style: none;
  text-decoration: none;
  height: 50px;
  display:flex;
  justify-content: center;
  align-items: center;
}

.active {
  background-color: skyblue;
}
</style>