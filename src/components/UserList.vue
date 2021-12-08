<template>
  <div class="user-list">
    <div class='user-item' v-for="user in userList" :key="user.login" >
      <a :href="user.html_url" target="_blank">
        <img class="user-icon" :src="user.avatar_url" >
        <p>{{user.login}}</p>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    name:'UserList',
    data() {
      return {
        userList:[]
      }
    },
  
    mounted() {
      this.$bus.$on('list',(v)=>{
        console.log("v==",v);
        this.userList = v
      })
    },
    beforeDestroy() {
      this.$bus.$off('list')
    },
  
}
</script>

<style scoped>
.user-list{
  display: flex;
  flex-direction: row;
  justify-self: start;
  align-content: space-between;
  flex-wrap: wrap;
  max-width: 400px;
}

.user-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-color: coral;
  border-width: 1px;
  border-radius: 5px;
  width: 25%;
}
.user-icon{
  height: 80px;
  width: 80px;
}

</style>