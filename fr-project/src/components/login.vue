<template>
  <div>
    <h1>我是登录页面</h1>
    用户名：<input type="text" v-model="username" placeholder="admin">
    <br>
    密  码：<input type="password" v-model="password" placeholder="123456">
    <br>
    <button @click="handleSubmit">
      点击注册
    </button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        username:"",
        password:''
      }
    },
    methods:{
      handleSubmit(){
        axios.post('http://localhost:3000/login',{
          username: this.username,
          password: this.password
        }).then(res => {
          console.log(res)
          if(res.status == 200 && res.data=="成功"){
            alert(res.data)
            this.$router.push('/')
          } else {
            alert(res.data)
          }
        })
      }
    }
  }

</script>

<style scoped>

</style>

