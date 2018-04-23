<template>
    <div id="backIndex" style="width:1200px; margin:0 auto; margin-top:65px; min-height:750px;  clear:both;">
        <!-- 固定导航栏 -->
        <div style=" margin-right:10px; background:#fff; float:left;">
            <div id="aside" style="width:200px; position:static;">
                <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" :default-openeds="['1','2','3','4']">
                    <el-submenu index="1" class="libg" style="border-bottom:2px solid #ffffff;"> 
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span class="css-a">企业信息</span>
                    </template>
                    <el-menu-item-group>
                        <router-link to="/ent/intoupdatepassword"><el-menu-item style="text-align:center;" index="1-1" >修改密码</el-menu-item></router-link>
                        <!-- <a href="/ent/intoupdatepassword"><el-menu-item style="text-align:center;" index="1-1" >修改密码</el-menu-item></a> -->
                    </el-menu-item-group>
                    </el-submenu>
                    
                    <el-submenu index="2" class="libg" style="border-bottom:2px solid #ffffff;"> 
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span class="css-a">宣讲会</span>
                    </template>
                    <el-menu-item-group>
                        <router-link to="/careertalk/into"><el-menu-item style="text-align:center;" index="2-1" >申请宣讲会</el-menu-item></router-link>
                        <!-- <a href="/careertalk/into"><el-menu-item style="text-align:center;" index="2-1" >申请宣讲会</el-menu-item></a> -->
                        <router-link to="/careertalk/careertalkList"><el-menu-item style="text-align:center;" index="2-2">查看宣讲会</el-menu-item></router-link>
                        <!-- <a href="/careertalk/allcareertalk"><el-menu-item style="text-align:center;" index="2-2">查看宣讲会</el-menu-item></a> -->
                    </el-menu-item-group>
                    </el-submenu>
                    
                    <el-submenu index="3" class="libg" style="border-bottom:2px solid #ffffff;"> 
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span class="css-a">招聘信息</span>
                    </template>
                    <el-menu-item-group >
                        <router-link to="/jobs/jobsAdd"><el-menu-item style="text-align:center;" index="3-1">发布招聘信息</el-menu-item></router-link>
                        <router-link to="/jobs/jobsList"><el-menu-item  style="text-align:center;" index="3-2">查看招聘信息</el-menu-item></router-link>
                    </el-menu-item-group>
                    </el-submenu>
                    
                    <el-submenu index="4" class="libg" style="border-bottom:2px solid #ffffff;"> 
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span class="css-a">招聘会</span>
                    </template>
                    <el-menu-item-group>
                        <router-link to="/jobfair/into"><el-menu-item style="text-align:center;" index="4-1">申请招聘会</el-menu-item></router-link>
                        <!-- <a href="/jobfair/into"><el-menu-item style="text-align:center;" index="4-1">申请招聘会</el-menu-item></a> -->
                        <router-link to="/jobfair/jobfairList"><el-menu-item style="text-align:center;" index="4-2">查看招聘会</el-menu-item></router-link>
                    </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </div>
        </div>
         <!-- // 固定导航栏 -->
         <div style="width:988px; height:640px; border: 1px solid #ccc; background:#fff; float:left;">
             <div style="width:968px; padding-left:20px; font-size:16px; border-bottom:1px solid #ccc; height:56px; line-height:56px;">
                修改密码
             </div>
            <div style="padding:50px;">
                <form action=""   style="margin-top:30px;text-align:center;">
                   
                    <table id="tab" class="tablecss" style="padding-left:130px;">
                        <tr><td><input type="hidden" th:value="${session._id}" id="_id" name="_id"/></td></tr>
                       <div style="margin-bottom:15px !important;"> <tr><td style="padding-right: 10px; ">原&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;:</td>	<td><el-input name="oldpass" id="oldpass" v-model='oldpass'></el-input> </td></tr></div>
                       <div style="margin-bottom:15px !important;"><tr><td style="padding-right: 10px; ">新&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;:</td>	<td><el-input name="newpass" id="newpass" v-model='newpass'></el-input> </td></tr></div>
                        <div style="margin-bottom:15px !important;"><tr><td style="padding-right: 10px; ">确认新密码&nbsp;&nbsp;:</td>	<td><el-input name="comfirmpass" id="comfirmpass" v-model='comfirmpass'></el-input> </td></tr></div>
                        <div style="margin-left:105px !important;"><tr><td colspan="2"><el-button type="primary" style="width:214px;" id="sub" v-on:click="up()">提交</el-button> </td></tr></div>
                    </table>
                </form>
            </div>

        </div>

    </div>
    <!-- <el-main  style="width:1000px;height:800px; background:none;">
        <div class="css-text">
            <form action="" class="formcss"  style="margin-top:30px;text-align:center;">
            <p class="pcss">修改密码</p>
            <table id="tab" class="tablecss" style="padding-left:130px;">
            <tr><td><input type="hidden" th:value="${session._id}" id="_id" name="_id"/></td></tr>
            <tr><td>原密码:</td>	<td><el-input name="oldpass" id="oldpass" v-model='oldpass'></el-input> </td></tr>
            <tr><td>新密码:</td>	<td><el-input name="newpass" id="newpass" v-model='newpass'></el-input> </td></tr>
            <tr><td>确认新密码:</td>	<td><el-input name="comfirmpass" id="comfirmpass" v-model='comfirmpass'></el-input> </td></tr>
            <tr><td colspan="2"><el-button type="primary" id="sub" v-on:click="up()">提交</el-button> </td></tr>
            </table>
            </form>
        </div>
    </el-main> -->
</template>
<script>
import { menus } from '@/utils/menus';
export default {
  data () {
    return {
      menus,
      openeds: ['1','2','3','4'],
      uniqueOpened: false
    }
  }
}

</script>

<script>

export default{
    data() {
        return {
            oldpass:'',
            newpass:'',
            comfirmpass:''
           
        };
  },
  methods:
  {
    next() {
        if (this.stepActive++ > 2) this.stepActive = 0;
        this.dialogVisible=true;
      },
    up:function(){
        var _this=this;
        const _id=$('#_id').val();
        if(this.oldpass==""||this.oldpass==null){
            alert("请输入原密码")
            return false;
        }
        if(this.newpass==""||this.newpass==null){
            alert("请输入新密码")
            return false;
        }
        if(this.comfirmpass!=this.newpass){
            alert("两次输入的密码不一致,请重新输入")
            return false;
        }
        this.$http.post('/apis/api/post/platform/corp/passwd?_id=5a9e2ed7a44cd66c81cfcf61',
        {
            'oldpass':this.oldpass,
            'newpass':this.newpass

        }
        ).then(function(res){
            if(res.data.errcode==0){
            _this.$router.push({path:'/backpage'})
            }else{
                alert(res.data.errmsg)
            }
        })
        .catch(function(res){
            alert(res.data.errmsg)
          })
           
    }

  }

}
</script>


<style>
body{
 background: #f5f5f5;
 font-size:16px;
}
.el-menu{
    border: 1px solid #ccc;
}

</style>