<template>
  <div class="comB">
    <h1>已购买</h1>
    <div v-for="(val,key) in this.$store.state.food" class="ok">
      <li v-if="that.$store.state.food[key].count">
        <strong >{{val.name}}{{that.$store.state.food[key].count}}</strong>
        <button @click="del(key)">del</button>
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: "com-b",
    data(){
      return{
        that:this
      }
    },
    methods:{
      del(key){
        this.$store.commit('DEL',key)
      },

    }
  }
</script>

<style scoped>
.comB{
  margin: 0 20px;
  width: 200px;
}
.ok li{
  display: flex;
  width: 200px;
  justify-content: space-between;
}
</style>
