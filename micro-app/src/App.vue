<!--
 * @Author: Type the author's name
 * @Date: 2021-11-10 11:01:20
 * @LastEditTime: 2021-11-11 14:57:57
 * @LastEditors: huangjs
 * @Description: 
-->
<template>
  <div id="app">
    <h2>微应用3</h2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
