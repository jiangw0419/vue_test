<template>
  <div class="main">
    <Category :games='games'></Category>
    <Category :games='games'></Category>
    <Category :games='games'></Category>

    <Category2 :games="games">
        <ul>
            <li v-for="(game,index) in games" :key="index">{{game}}</li>
        </ul>
    </Category2>

    <Category3>
        <ul slot="stot2">
            <li v-for="(game,index) in games" :key="index">{{game}}</li>
        </ul>
    </Category3>

    <!-- 作用域插槽----注意:params.childGames -->
    <Category4>
        <template slot-scope="childGames">
           <ul>
            <li v-for="(game,index) in childGames.childGames" :key="index">{{game}}</li>
        </ul>
        </template>

    </Category4>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
import Category2 from './components/Category2.vue'
import Category3 from './components/Category3.vue'
import Category4 from './components/Category4.vue'
export default {
  name: "App",
  components: {
    Category,
    Category2,
    Category3,
    Category4
  },
  data() {
    return {
      games:['魔兽','英雄联盟','穿越火线','war3']
    }
  },
};
</script>

<style  scoped>
  .main{
    display: flex;
    flex-direction: row;
  }
</style>