<template>
  <div id="app">
    <div class="top">
      <ComA></ComA>
      <ComB></ComB>
    </div>
    <button @click="pay">付款</button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import ComA from './comA'
  import ComB from './comB'
  import store from '../store/store'
  Vue.use(Vuex)
  export default {
    name: "helloworld",
    store,
    components:{ComA,ComB},
    methods:{
      pay(){
        this.$store.state.food.forEach(i=>{
          i.count=0;
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #app .top{
     display: flex;
     justify-content: center;
   }
</style>
