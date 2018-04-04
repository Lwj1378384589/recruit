<template>
    <div>
        <div id="wrap">
                <div class="container1">
                    <ul class="css-left">
                        <li class="shouye">
                            <router-link to="/frontPage/index">网站首页</router-link>
                            <!-- <a href="index.html"></a> -->
                        </li>
                    </ul>
                    <ul class="css-right">
                        <li>
                                <router-link to="/frontPage/disLogin"> 登录 </router-link>
                            <!-- <a href="disLogin.html"  class="log">登录</a> -->
                        </li>
                        <li>
                            <router-link to="/frontPage/distRegist">免费注册 </router-link>
                            <!-- <a href="distRegist.html"  class="regs">免费注册</a> -->
                        </li>
                        <li>
                            <router-link to="/frontPage/help">帮助中心 </router-link>
                            <!-- <a href="help.html"  class="hlp">帮助中心</a> -->
                        </li>
                    </ul>
                </div>
            </div>
        <div  style="padding-top:40px;"><!-- class="css-out-content" -->
            <div class="css-header"  style="font-size:16px;">
                <div class="container">
                    <router-link to="/frontPage/index" title="惠安智慧就业平台"> </router-link>
                    <!-- <a href="index.html" title="惠安智慧就业平台"> -->
                        <img src="imgs/a.jpg" class="css-logo pull-left" style="width:230px; height:40px;" >
                    </a>
                    <div class="css-subwebsite pull-left"  style="background: url('imgs/enterr.png') no-repeat left 5px;">
                        <router-link to="/frontPage/SchoolList"><b>进入子站</b><span class="text-primary">[切换分站]</span> </router-link>
                        <!-- <a href="SchoolList.html"><b>进入子站</b><span class="text-primary">[切换分站]</span></a> -->
                    </div>
                    <div class="css-right pull-right">
                        <div class="css-search pull-right">
                            <form id="search" action="">
                                <ul class="css-list-inline pull-right css-hot">
                                    <li>欢迎您使用本网站</li>
                                </ul>
                                <ul class="css-list-inline pull-right">
                                    <li><input class="css-submit" value="" type="button"></li>
                                    <li>
                                        <input name="keyword"  type="text" placeholder="请输入查询关键词">
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="css-nav">
                <div class="container">
                    <div class="pull-left css-usernav">
                        <span onmouseover="seen()" onmouseout="disn()">用户功能频道</span>
                    </div>
                    <ul class="pull-left css-navbar">
                        <li><a href="index.html">平台首页</a></li>
                        <li><a href="StudentLogin.html">学生用户</a></li>
                    </ul>
                </div>
        </div>
        
      
    </div>
</template>
<script>



</script>