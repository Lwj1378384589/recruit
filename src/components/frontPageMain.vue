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
  mounted(){
            this.getMenuListBoolean();
  },
    methods:{
      getMenuListBoolean(){
        }

    }
 

}
$(function(){
  if(top.location.href.indexOf("/frontPage/")){
    this.$store.commit("menuListChange",false);
    alert($)
  }else{
    this.$store.commit("menuListChange",true);
  }

})
</script>