<template>
  <div>
    <el-menu :router="true" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/sub1">sub1应用</el-menu-item>
    </el-menu>
    <router-view/>
    <div id="sub1"></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
