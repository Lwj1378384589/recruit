<template>
  <div id="frontPageMain">
    <my-header></my-header>
    <router-view class="view"> </router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/frontFrame/header'
import MyFooter from '@/components/frontFrame/footer'
export default{
  name:"frontPageMain",
  data () {
    return {
    }
  },
  components:{MyHeader,MyFooter}

}
</script>