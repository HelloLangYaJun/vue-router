<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
   <div>
     <router-link :to="{name: 'Index'}">Go to index</router-link>
     <router-link :to="{path: '/detail', query: {id: '18438560898'}, props: { name: 'attrs' } }">Go to detail</router-link>
     <router-link to="/login">Go to login</router-link>
   </div>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
