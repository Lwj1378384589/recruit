<template>
  <div id="frontPageMain">
    <my-top></my-top>
    <router-view class="view"> </router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import store from '@/store/store.js'
import MyFooter from '@/components/frontFrame/footer'
import MyTop from '@/components/frontFrame/top'
export default{
  name:"frontPageMain",
  data () {
    return {
    }
  },
  store,
  components:{MyFooter,MyTop},
  mounted(){
            this.getMenuListBoolean();
  },
    methods:{
      getMenuListBoolean(){
        if(top.location.href.indexOf("/frontPage/")){
          this.$store.commit("menuListChange",true);
        }else{
          alert("in index")
          this.$store.commit("menuListChange",false);
        }

      }

    }
 

}

</script>