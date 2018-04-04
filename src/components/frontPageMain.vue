<template>
  <div id="frontPageMain">
    <my-header></my-header>
    <router-view class="view"> </router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import store from '@/store/store.js'
import MyHeader from '@/components/frontFrame/header'
import MyFooter from '@/components/frontFrame/footer'
export default{
  name:"frontPageMain",
  data () {
    return {
    }
  },
  store,
  components:{MyHeader,MyFooter},
 

}
$(function(){
alert(top.location.href)
  if(top.location.href.indexOf("/frontPage/")){
    this.$store.commit("menuListChange",false);
  }else{
    this.$store.commit("menuListChange",true);
  }

})
</script>