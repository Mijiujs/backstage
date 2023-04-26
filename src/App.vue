<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="$route.name"></router-view>
    </keep-alive> -->
    <!-- <router-view v-if="!$route.meta.keepAlive" :key="$route.name"></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
