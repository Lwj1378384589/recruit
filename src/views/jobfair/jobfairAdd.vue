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
                申请招聘会
             </div>
            <form   style="margin:10px auto;text-align:center; ">
                
                <DataForm></DataForm>
                <!-- <DataTable></DataTable> -->
                <!-- <div class="renDetail">
                    <el-button type="primary" class="btncss" id="sub" @click="submit">提交</el-button>
                </div> -->
            </form>
        </div>
    </div>
</template>

<script>
import store from '@/store/store.js'
import DataForm from "@/components/data/dataForm"
// import DataTable from "@/components/data/dataTable"
export default{
    data(){
        return{

        }
    },
    store,
    components:{
      DataForm,
    },
    methods:{
        submit(){
            var _this=this;
            var id='5aaa24e61ab25764103600a2';
            this.$http.post("/apis/api/post/jobs/jobfair/corp/apply?corp.id=session.userId&corp.name=session.userName&_id="+id,
            {
                "jobs":store.state.jobfairList
            })
            .then(function(response){
                if(response.data.errcode==0){
                _this.$router.push({path:'/jobfair/jobfairList'})
                }else{
                    alert(response.data.errmsg)
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
.jMb30{
  margin-bottom:30px !important;
}
</style>