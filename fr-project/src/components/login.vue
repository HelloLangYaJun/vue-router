<template>
  <div>
    <h1>我是登录页面</h1>
    用户名：<input type="text" v-model="username" placeholder="admin">
    <br>
    密  码：<input type="password" v-model="password" placeholder="123456">
    <br>
    <button @click="handleSubmit3">
      点击注册(vue-cli)
    </button>
    <button @click="handleSubmit2">
      (代理跨域测试)
    </button>
    <button @click="handleSubmit1">
      点击注册(简单请求)
    </button>
    <button @click="handleSubmit">
      点击注册(复杂请求)
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
      handleSubmit1(){
        axios.get('http://localhost:3000/users',{
          // username: this.username,
          // password: this.password
        }).then(res => {
          console.log(res)
          if(res.status == 200 && res.data=="成功"){
            alert(res.data)
            this.$router.push('/')
          } else {
            alert(res.data)
          }
        })
      },
      handleSubmit2(){
        axios.get('http://localhost:3000/api/users',{
          // username: this.username,
          // password: this.password
        }).then(res => {
          console.log(res)
          if(res.status == 200 && res.data=="成功"){
            alert(res.data)
            this.$router.push('/')
          } else {
            alert(res.data)
          }
        })
      },
      handleSubmit3(){
        axios.get('/api/login',{
        }).then(res => {
          console.log(res)
          if(res.status == 200 && res.data=="成功"){
            alert(res.data)
            this.$router.push('/')
          } else {
            alert(res.data)
          }
        })
      },
      handleSubmit(){
        axios.post('http://localhost:3000/login',{
          // username: this.username,
          // password: this.password
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

