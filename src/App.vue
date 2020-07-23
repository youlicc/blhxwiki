<template>
  <div id="app">
    app根节点
    <!-- logo -->
    <div class="logo">
        <router-link to="/home">
            <img src="./assets/logo_blhx.png" alt="logo">
        </router-link>
    </div>
    <!-- 路由页面 -->
    <router-view>
      <Home/>
    </router-view>
  </div>
  
</template>

<script>
import Home from './views/Home'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="less">
  #app {
    width: 90%;
    position: relative;
    left: 5%;
    .logo {
        margin-right: auto;
    }
  }
</style>
