<template>
    <div class="comA">
      <h1>待购买</h1>
       <div v-for="(val,key) in this.$store.state.food" class="ok">
         <button @click="down(key)">-</button>
         <strong>{{val.name}}点了{{that.$store.state.food[key].count}}份</strong>
         <button @click="up(key)">+</button>
       </div>
      <h1>总价：{{this.$store.getters.allprice}}</h1>
    </div>
</template>
<script>
    export default {
        name: "com-a",
      data(){
          return{
            that:this
          }
      },
      methods:{
          up(key){
           this.$store.commit('UP',key)
          },
        down(key){
          this.$store.commit('DOWN',key)
        }
      }
    }

</script>

<style scoped>
.comA{
     margin: 0 20px;
     text-align: left;
   }
.ok{
  width: 200px;
  display: flex;
  justify-content: space-between;
}
</style>
