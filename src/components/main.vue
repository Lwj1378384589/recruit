<template>
    <div id="backIndex" style='background:url("/static/img/bg2.jpg") no-repeat !important'>
      <my-header></my-header>
      <router-view class="view"> </router-view>
      <my-aside></my-aside>
      <my-footer></my-footer>
    </div>
</template>

<script>
import MyHeader from '@/components/frame/header'
import MyFooter from '@/components/frame/footer'
import MyAside from '@/components/frame/aside'
export default {
  name: 'backIndex',
  data () {
    return {
    }
  },
  components:{MyHeader,MyFooter,MyAside}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #main{
  width: 900px;
  height:800px;
  float: left;
  margin-left: 220px;

}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
