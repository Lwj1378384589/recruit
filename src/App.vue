<template>
  <div id="app" style='background:url("/static/img/bg2.jpg") no-repeat !important'>
      <my-header></my-header>
          <router-view ></router-view>
      <my-aside></my-aside>
      <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/frame/header'
import MyFooter from '@/components/frame/footer'
import MyAside from '@/components/frame/aside'
export default {
  name: 'App',
  components:{MyHeader,MyFooter,MyAside}
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
