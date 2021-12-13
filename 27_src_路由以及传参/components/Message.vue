<template>
  <div>
    <h2>我是消息页面</h2>
    <ul class="list">

         <!-- <router-link
        :to="`/about/message/detail`"
        v-for="message in messages"
        :key="message.id"
      >
        {{ message.title }}
      </router-link> -->

      
        <!-- 方式一 query传参 -->
      <router-link
        :to="`/about/message/detail?id=${message.id}&title=${message.title}`"
        v-for="message in messages"
        :key="message.id"
      >
        {{ message.title }}
      </router-link>


    <!-- 方式二 params传参 -->
      <!-- <router-link
        :to="`/about/message/detail/${message.id}/${message.title}`"
        v-for="message in messages"
        :key="message.id"
      >
        {{ message.title }}
      </router-link> -->



    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
}
</style>