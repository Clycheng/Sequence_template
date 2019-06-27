<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.$ajax.get("http://localhost:1080/ver").then((res)=>{
      if(res.data.msg == "1000"){
        console.log(res)
        this.$router.push({
          path:"/Install"
        })
      }else{
        this.$router.push({
          path:"/"
        })
      }
    })
  }
}
</script>

<style>
</style>
