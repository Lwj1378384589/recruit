<template>
    <div id="backHeader">
        <div id="wrap" style="height:80px; background:#fff; position:static; ">
        <div class="container1" >
                <ul class="css-left">
                     <router-link class="logo" style="margin-top:10px;" to="/" title="惠安智慧就业平台"></router-link>
                    
                </ul>
                <ul class="css-right" style="height:80px; line-height:80px;" v-if="$store.state.loginBoolean">
                        <li >
                            欢迎<i>{{username}}</i>
                        </li>
                        <li class="indexbg">
                            <router-link to="/backpage">后台首页</router-link>
                        </li>
                        <li class="indexbg">
                            <router-link to="/">网站首页</router-link>
                        </li>
                        <li class="regbg">
                            <a @click="logout">注销</a>
                            <!-- <router-link to="/api/logout">注销</router-link> -->
                        </li>
                </ul>
            
            <ul class="css-right" style="height:80px; line-height:80px;" v-else>
               
            </ul>
            
        </div>	<!-- container1 -->
        </div><!-- wrap  -->

       
    </div><!--header-->
    

</template>
<script>
import store from '@/store/store.js'
export default{
    store,
    data(){
        return{
            username:''
        }
    },
    mounted(){
      this.registLogin();
    },
    methods:{
        registLogin(){
            var _this=this;
            _this.$http.get('/apis/api/registLogin'
        ).then(function(res){
            if(res.data.msg=="请登录"){
                alert("请登录")
            _this.$router.push({path:'/frontPage/disLogin'})
            }else{
                alert("suc")
                _this.$store.commit("loginBooleanChange","true");
                _this.username=res.data.corpname;
            }
        })
        
        },
        logout(){
            var _this=this;
            _this.$http.get("/apis/api/logout"
            ).then(function(res){
                alert(res.data.msg);
                _this.$router.push({path:'/'})
            })
        }
    }

}



</script>
<style>
#header{
width:1350px;
height:170px;
float:right;

}

</style>