<template>
  <div id="frontPageMain">
    <div v-if="$store.state.menuList">
    <my-header></my-header>
    </div>
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