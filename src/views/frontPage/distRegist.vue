<template>
        <div id="wrap">
                <div class="container1">
                    <ul class="css-left">
                        <li class="shouye">
                            <a href="index.html">网站首页</a>
                        </li>
    
                    </ul>
                    <ul class="css-right">
                        <li>
                            <a href="disLogin.html"  class="log">登录</a>
                        </li>
                        <li>
                            <a href="distRegist.html"  class="regs">免费注册</a>
                        </li>
                        <li>
                            <a href=" "  class="hlp">帮助中心</a>
                        </li>
                        <!-- <li>
                            <a href="">网站导航</a>
                        </li> -->
                    </ul>
                </div>
            </div>
            <div class="reg" style=" padding: 40px 0 180px 0;min-width: 1200px; " >
                <div class="css-main-u">
                    <div class="css-middle-banner">
                        <div class="css-container">
                            <div class="css-middle-page">
                                <a class="css-link" href="StuReg.html" style="color: #ffffff;">学生注册</a>
                                <a class="css-link" href="UnitReg.html" style="color: #ffffff;">企业注册</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </center>
        <div class="include" file="publicFoots.html"></div>
                <script type="text/javascript">
                $(".include").each(function(){
                    if(!!$(this).attr("file")) {
                        var $includeObj = $(this);
                        $(this).load($(this).attr("file"), function(html){
                            $includeObj.after(html).remove();   
                        })
                    }
                });
                </script>


</template>