<template>
  <router-view ></router-view>
</template>

<script>
export default {
  name: 'App',
  mounted(){
			this.getUrl();
    },
    methods:{
      getUrl(){
        if(top.location.href.indexOf("front")>0){
          this.$router.push({path:'/frontPage'})
        }else{
          this.$router.push({path:'/'})
        }
      }
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:1350px;
}

</style>
