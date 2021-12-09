<template>
  <div class="category">
    <h2 class="title">种类</h2>
        <ul>
            <li v-for="(game,index) in games" :key="index">{{game}}</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['games'],
};
</script >

<style scoped lan='less'>
    .category{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(44, 145, 89);
        height: 500px;
        width: 200px;
        margin: 10px;
    }

    .title{
        width: 100%;
        height: 40px;
        background-color: burlywood;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul {
        display: flex;
        flex-direction: column;
        padding: 0;
    }
    li {
        list-style: none;
    }

</style>