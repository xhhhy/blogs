<template>
  <div class="home">
     <h1 class="hearder_title">hello word</h1>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#fff"
  text-color="black"
  active-text-color="#ffd04b">
  <el-menu-item index="1"> 
    <router-link to="/">Home</router-link> |
</el-menu-item>
  <el-submenu index="2">
    <template slot="title">List</template>
    <el-menu-item index="2-1"> <router-link to="/about">About |</router-link></el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3" > <router-link to="/success">success |</router-link></el-menu-item>
</el-menu>
  <router-view/>
  </div>
</template>

<script>

export default {
  name: 'HomeList',
  props:{
  },
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
  a{
  text-decoration: none
  }
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .hearder_title{
    padding: 10px;
    text-align: center;
  font-weight: 400;
  color: #555;
  }


</style>
