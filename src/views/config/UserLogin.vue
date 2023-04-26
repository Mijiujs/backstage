<template>
  <div class="login">
    <div class="login-box">
      <h1>登录弹窗</h1>
      <!-- <el-button @click="handleLogin">登录</el-button> -->
      <el-button @click="toHome">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  directives: {},
  filters: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() { },
  beforeUpdate() { },
  updated() { },
  activated() { },
  deactivated() { },
  beforeDestroy() { },
  destroyed() { },
  errorCaptured() { },
  methods: {
    handleLogin() {
      this.$router.push({
        path: '/UserList'
      })
    },

    toHome() {
      this.$router.push({
        path:'/home'
      })
    }
  }
}
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: #2c3e50;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3498db, #2c3e50);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3498db, #2c3e50);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box {
  width: 400px;
  height: 400px;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
