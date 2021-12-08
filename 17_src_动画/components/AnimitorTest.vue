<template>
  <div>
    <button @click="showOrHide">显示/隐藏</button>
    <transition name="hello" appear>
      <h2 class="item" v-show="isShow">我是一条数据</h2>
    </transition>

    <transition-group name="hello" :appear=true>
    <li v-for="item in items" :key="item.id" v-show="isShow"><h3>{{ item.title }}</h3></li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "AnimitorTest",
  data() {
    return {
      isShow: true,
      items: [
          { id: "0001", title: "0001" },
          { id: "0002", title: "0002" },
          { id: "0003", title: "0003" },
          { id: "0004", title: "0004" },
          { id: "0005", title: "0005" },
          { id: "0006", title: "0006" },
      ],
    };
  },
  methods: {
    showOrHide() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped >
.item {
  background-color: burlywood;
  padding-left: 5px;
  padding-right: 5px;
}
li{
    list-style: none;
}
 h3{
    width: 500px;
    margin: 5px;
    padding-left: 5px;
    background-color: coral;
}
/* 
.hello-enter,
.hello-leave-to {
  opacity: 0;
}

.hello-enter-active,
.hello-leave-active {
  transition: opacity 0.5s;
}
*/

.hello-enter-active {
  animation: enter-in 0.5s;
}
.hello-leave-active {
  animation: enter-in 0.5s reverse;
}

@keyframes enter-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }

  /* 
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: translateX(1);
  } */
}
</style>