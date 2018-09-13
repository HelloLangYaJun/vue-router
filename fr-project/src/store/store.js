import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
export default new vuex.Store({
  state:{
    food:[
      {
        name:'酸辣土豆丝',
        count:0,
        price:10
      },
      {
        name:'巫山烤鱼',
        count:0,
        price:35
      },
      {
        name:'手撕鸡',
        count:0,
        price:16
      },
      {
        name:'重庆小面',
        count:0,
        price:8
      },
    ]
  },
  getters:{
    allprice:state=>{
      let num=0
       state.food.forEach(item=>{
        num+= item.count*item.price
       })
      return num
    }
  },
  mutations: {
    'UP' (state,key) {
      state.food[key].count+=1
    },
    'DOWN' (state,key){
      state.food[key].count-=1
      if(state.food[key].count<0){
        state.food[key].count=0
      }
    },
    'DEL'(state,key){
      state.food[key].count=0
    }
  }
})
