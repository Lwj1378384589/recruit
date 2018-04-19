<template>
    <div id="header">
        <div id="wrap">
        <div class="container1" >
                <ul class="css-left">
                    <li class="shouye">
                           <router-link to="/">网站首页</router-link> 
                    </li>
                </ul>
                
                <ul class="css-right"  v-if="loginBoolean==false"><!--原验证登录为'未登录'位置  原判断th:if="${session.corpcode==null}"-->
            
                    <li>
                        <a href=""  class="log">登录</a>
                    </li>
                    <li>
                        <a href=""  class="regs">免费注册</a>
                    </li>
                    <li>
                        <a href=""  class="hlp">帮助中心</a>
                    </li>
                </ul>
            <!--原验证登录为'已登录'位置-->
           <ul class="css-right" v-else>
                <li >
                    欢迎{{username}}
                </li>
                <li class="indexbg">
                    <router-link to="/backpage">后台首页</router-link> 
                </li>
                <li class="regbg">
                    <a @click="logout">注销</a>
                </li>
            </ul> 
            
        </div>	<!-- container1 -->
        </div><!-- wrap  -->

        <div class="css-out-content">
            <div class="css-header">
                <div class="container">
                        <router-link class="logo" to="/" title="惠安智慧就业平台">  ></router-link>
                    <!-- 改变字的div长高 -->
							<div style="line-height:120px;width:1100px">欢迎使用本网站
                                <div class="css-nav">
                                <div class="container">
                                    <ul class="pull-left css-navbar">
                                        <!-- <li class="navLi" style="background:#efc028; position: relative;">
                                            <a class="nav1" href="/entcer/into">企业认证</a>
                                        </li> -->
                                        
                                        <li class="navLi"  onmouseover="seenCer()" onmouseout="disnCer()"  style="position: relative;" >
                                                <a class="navA" id="careerBox">宣讲会信息</a>
                                                
                                                <div class="jianBox" id="carBox" style="display:none; border-left:1px solid #ccc; border-right:1px solid #ccc; border-bottom:1px solid #ccc; position: absolute; top:50px; left: 0; z-index:999;">
                                                    <ul class="boxUl">
                                                        <li><router-link to="/">申请宣讲会</router-link></li><!-- <li><a href="/careertalk/into">申请宣讲会</a></li> -->
                                                        <li><router-link to="/">查看宣讲会</router-link></li><!-- <li><a href="/careertalk/allcareertalk">查看宣讲会</a></li> -->
                                                    </ul>
                                                </div>
                                        </li>
                                        
                                        <li class="navLi"  onmouseover="seenTalk()" onmouseout="disnTalk()"  style="position: relative;">
                                            <a class="navA" id="talkBox">招聘信息</a>
                                            <div class="jianBox" id="carTalk" style="display:none; border-left:1px solid #ccc; border-right:1px solid #ccc; border-bottom:1px solid #ccc; position: absolute; top:50px; left: 0; z-index:999;">
                                                <ul class="boxUl">
                                                    <li><router-link to="/">发布招聘信息</router-link></li> <!-- <li><a href="/job/into">发布招聘信息</a></li> -->
                                                    <li><router-link to="/">查看招聘信息</router-link></li><!-- <li><a href="/job/alljob">查看招聘信息</a></li> -->
                                                </ul>
                                            </div>
                                        </li>
                                        
                                        <li class="navLi" onmouseover="seenJob()" onmouseout="disnJob()"  style="position: relative;">
                                            <a class="navA" id="fairBox">招聘会信息</a>
                                            <div class="jianBox" id="jobBox" style="display:none; border-left:1px solid #ccc; border-right:1px solid #ccc; border-bottom:1px solid #ccc; position: absolute; top:50px; left: 0; z-index:999;">
                                                <ul class="boxUl">
                                                    <li><router-link to="/">申请招聘会</router-link></li> <!-- <li><a href="/jobfair/into">申请招聘会</a></li> -->
                                                    <li><router-link to="/">查看招聘会</router-link></li> <!-- <li><a href="/jobfair/listjobfairsearch">查看招聘会</a></li> -->
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                </div><!-- 就业平台图片+字 -->
            </div><!--就业平台图+字外框  -->
        </div><!--css-out-content  -->
    </div><!--header-->

</template>
<script>
export default{
    data(){
        return{
            loginBoolean:false,
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
        ).then(function(response){
            if(response.data.msg=="OK"){
                _this.username=response.data.corpname;
                _this.loginBoolean=true;
            }else{
                alert("请登录")
                _this.$router.push({path:'/frontPage/disLogin'})
            }
        })
        },
        logout(){
            var _this=this;
            _this.$http.get('/apis/api/logout'
            ).then((response)=>{
                if(response.data.msg=="已注销"){
                    alert("退出成功")
                    _this.$router.push({path:'/'})
                }else{
                    alert("退出失败,请尝试重新退出");
                }
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