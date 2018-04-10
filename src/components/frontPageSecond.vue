<template>
    <div>
        <my-header></my-header>
        <p>test2</p>
        <router-view class="view"> </router-view>
    </div>  
</template>
<script>
import MyHeader from '@/components/frontFrame/header'
export default{
    name:"frontPageSecond",
    data(){
        return{

        }
    },
    components:{MyHeader}

}
</script>