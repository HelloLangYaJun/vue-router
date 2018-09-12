<template>
   <div>
     <h1>详情</h1>
     <router-link to="/detail/one">Go to 详情一</router-link>
     <router-link to="/detail/two">Go to 详情二</router-link>
     <router-view/>
   </div>
</template>

<script>

    export default {
        name: "detail",
      created() {
      function getQuery() {
        let obj={}
        console.log(location)
       let query= location.search.substring(1)
        query.split('&&').forEach(item=>{
          let key=item.split('=')[0]
          let value=item.split('=')[1]
          obj[key]=value
        })
        alert('查询字符串为：'+query)

      }
      getQuery()
      },
    }

</script>

<style scoped>
div{
  position: fixed;
  width: 200px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: aqua;
}
</style>
