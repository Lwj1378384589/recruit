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
                            <router-link to="/frontPage/testPage">免费注册 </router-link>
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
                            <img src="/static/frontPage/imgs/a.jpg" class="css-logo pull-left" style="width:230px; height:40px;" >
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

            <div class="css-nav"   style="font-size:16px;">
            <div class="container">
                <div class="pull-left css-usernav"  style="position: relative;" v-if="$store.state.menuList">
                    <span>用户功能频道</span>
                </div><!-- 事件div结束 -->

                <div class="pull-left css-usernav" onmouseover="seen()" onmouseout="disn()" style="position: relative;" v-else>
                    <span>用户功能频道</span>
                        <div class="css-box" id="css-box" style="width: 230px; height: 350px; display: none; position: absolute;top:50px; left: 0; z-index:999;">
                            <div class="css-channel pull-left">
                                <div class="css-menu" id="css-menu">
    
                                    <div onmouseover="lul_list()" onmouseout="lul_out()" class="cr_li">
                                        <p>平台首页</p>
                                        <div class="box1" id="box1">
                                            <div class="list-left">
                                                <ul  class="lt-ul">
                                                    <li><router-link to="/recruitment">岗位信息</router-link></li>
                                                    <li><a href="campusTalkPage.html">校园宣讲会</a></li>
                                                    <li><a href="campusRecruitmentPage.html">校园招聘公告</a></li>
                                                </ul>
                                            </div>
                                            <div class="list-con">
                                                <ul class="cn-ul">
                                                    <p class="txt">按行业查看职位</p>
                                                    <div v-for="pitem in positionIndustry">
                                                    <li><a href="#this" @click="find(pitem)">{{pitem.name}}</a></li>
                                                    </div>
    
                                                </ul>
                                            </div>
                                            <div class="list-bg"></div>
                                            <div class="list-right">
                                                <ul class="cn-ul">
                                                    <p class="txt">按类别查看职位</p>
                                                    <div v-for="ptyim in positionType">
                                                    <li><a href="#this" @click="find(ptyim)">{{ptyim.name}}</a></li>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div onmouseover="lul_list1()" onmouseout="lul_out1()" class="cr_li stubg">
                                        <p>学生服务</p>
                                        <div class="box1" id="box2">
                                            <div class="css-subMenu">
                                                <div class="top-M">就业信息</div>
                                                <ul class="Mul">
                                                    <li><router-link to="/recruitment">岗位信息</router-link></li>
                                                    <li><a href="campusTalkPage.html">校园宣讲会</a></li>
                                                    <li><a href="campusRecruitmentPage.html">校园招聘公告</a></li>
                                                </ul>
                                            </div>
    
                                            <div class="css-subMenu">
                                                <div class="top-M">职业辅导</div>
                                                <ul class="Mul">
                                                    <li><a href="guidance.html">政策法规</a></li>
                                                    <li><a href="guidance.html">就业心得</a></li>
                                                    <li><a href="guidance.html">辅导活动</a></li>
                                                    <li><a href="guidance.html">职业课程</a></li>
                                                    <li><a href="guidance.html">专家咨询</a></li>
                                                </ul>
                                            </div>
    
                                            <div class="css-subMenu">
                                                <div class="top-M">就业服务</div>
                                                <ul class="Mul">
                                                    <li><a href="StudentLogin.html">学历学位认证</a></li>
                                                    <li><a href="StudentLogin.html">电子图像校对</a></li>
                                                    <li><a href="StudentLogin.html">报到证查询</a></li>
                                                </ul>
                                            </div>
    
                                            <div class="css-subMenu">
                                                <div class="top-M">用户中心</div>
                                                <ul class="Mul">
                                                    <li><a href="StudentLogin.html">推荐表注册</a></li>
                                                    <li><a href="StudentLogin.html">简历管理</a></li>
                                                    <li><a href="StudentLogin.html">职位收藏夹</a></li>
                                                    <li><a href="StudentLogin.html">职位申请记录</a></li>
                                                    <li><a href="StudentLogin.html">我的日程表</a></li>
                                                    <li><a href="StudentLogin.html">账号设置</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div onmouseover="lul_list2()" onmouseout="lul_out2()" class="cr_li danwbg">
                                        <p>单位服务</p>
                                        <div class="box1" id="box3">
                                            <div class="css-subMenu">
                                                <div class="top-M">基础服务</div>
                                                <ul class="Mul">
                                                    <li><a href="UnitReg.html">单位注册</a></li>
                                                    <li><a href="unitLogin.html">职位发布</a></li>
                                                </ul>
                                            </div>
    
                                            <div class="css-subMenu">
                                                <div class="top-M">充值服务</div>
                                                <ul class="Mul">
                                                    <li><a href="unitLogin.html">广告申请</a></li>
                                                    <li><a href="unitLogin.html">职位置顶</a></li>
                                                    <li><a href="unitLogin.html">定向发布</a></li>
                                                    <li><a href="unitLogin.html">下载简历</a></li>
                                                    <li><a href="unitLogin.html">职位邀请</a></li>
                                                </ul>
                                            </div>
    
                                            <div class="css-subMenu">
                                                <div class="top-M">会员服务</div>
                                                <ul class="Mul">
                                                    <li><a href="unitLogin.html">充值服务所有内容</a></li>
                                                    <li><a href="unitLogin.html">校园统一认证</a></li>
                                                    <li><a href="unitLogin.html">生源专业查询</a></li>
                                                    <li><a href="unitLogin.html">招聘会展位优选</a></li>
                                                    <li><a href="unitLogin.html">专属在线客服</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div  onmouseover="lul_list3()" onmouseout="lul_out3()" class="cr_li schoolbg">
                                        <p>学校服务</p>
                                        <div class="box1" id="box4">
                                            <div class="css-subMenu">
                                                <div class="top-M">就业管理</div>
                                                <ul class="Mul">
                                                    <li><a href="disLogin.html">推荐表审核</a></li>
                                                    <li><a href="disLogin.html">协议书审核</a></li>
                                                    <li><a href="disLogin.html">电子图像校对</a></li>
                                                </ul>
                                            </div>
    
                                            <div class="css-subMenu">
                                                <div class="top-M">常用链接</div>
                                                <ul class="Mul">
                                                    <li><a href="http://www.baidu.com/">长春毕业生就业网</a></li>
                                                </ul>
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
import store from '@/store/store.js'
export default{
    data() {
        return {
			positionIndustry:[],
			positionType:[],
        };
  },
    store,
    mounted(){
        this.getPositionIndustry();
        this.getPositionType();
        this.getMenuList();
        },
    methods:{
        getPositionIndustry: function(){
				//按行业查看职位
				var _this = this;
				_this.$http.get(
					"/apis/naf/code/items/35/list"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.positionIndustry = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
        },
        getPositionType: function(){
				//按类别查看职位
				var _this = this;
				_this.$http.get(
					"/apis/naf/code/items/36/list"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.positionType = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
        },
        getMenuList(){
        if(store.state.menuList){
            var cssbox=document.getElementById("css-box");
            cssbox.style.display="block";
            
        }else{
            var cssbox=document.getElementById("css-box");
            cssbox.style.display="none";
        }
        }

    }


}

</script>