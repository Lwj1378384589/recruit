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
                查看招聘会
             </div>
            <div id="tab">
                <div style=" margin-bottom:50px; background:#fff;width:988px; ">
                    <el-table :data="tableData"  style="width: 988px">
                            <el-table-column  prop="subject"  label="招聘会名" min-width="180"> </el-table-column>
                            <el-table-column  prop="meta.createdAt"   label="开始时间"     min-width="180"> </el-table-column>
                            <el-table-column  prop="tenant"   label="global" min-width="180"> </el-table-column>
                            <el-table-column  fixed="right"  label="操作"  min-width="120"> <template slot-scope="scope">
                            <el-button  v-on:click.native.prevent="listRow(scope.row._id)" type="text" size="small"> 详情  </el-button>
                            </template> </el-table-column>
                    </el-table>
                </div>
                <div class="block">
                        <el-pagination
                        style="text-align:center;"
                        v-on:size-change="handleSizeChange"
                        v-on:current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[1, 2, 3, 4,5,6,7,8,9,10]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                        </el-pagination>
                </div>
            </div>
        </div>
    </div>
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
var test;
    export default{
        data() {
            return {
                tableData: [],
                currentPage: 1,
                pageSize:10,
                total:400
            };
      },
      mounted(){
        this.getData();
        },
      methods:{
        listRow(_id) {
            var _this =this;
            _this.$router.push({
                path:'/jobfair/jobfairUpdate',
                query: {
                 "_id": _id
                    }
            })
          },
        getData(){
            var _this = this;
            _this.$http.get(
                "/apis/api/getdata/jobs/jobfair/simple?corp.id=5a9e2ed7a44cd66c81cfcf61&skip="+(this.currentPage-1)+"&limit="+this.pageSize
            ).then((response) => {
                if(response.data.errcode===1){
                    alert(response.data.errmsg);
                }else{
                    _this.tableData = response.data.data;
                    _this.allSize = response.data
                    _this.total = response.data.total
                }
            }),function(error){
                $.alert('对不起，你的请求处理失败了!');   //失败处理
            }
        },
        handleSizeChange(val) {
            var _this = this;
             test=val;
                 _this.$http.get(
                    "/apis/api/getdata/jobs/jobfair/simple?corp.id=5a9e2ed7a44cd66c81cfcf61&skip="+(this.currentPage-1)+"&limit="+test
                ).then((response) => {
                    if(response.data.errcode===1){
                        alert(response.data.errmsg);
                    }else{
                         _this.tableData = response.data.data;
                        _this.pageSize=test;
                    }
                }),function(error){
                    $.alert('对不起，你的请求处理失败了!');   //失败处理
                } 
              },
          handleCurrentChange(val) {
              var _this = this;
                 test=val;
                _this.$http.get(
                    "/apis/api/getdata/jobs/jobfair/simple?corp.id=5a9e2ed7a44cd66c81cfcf61&skip="+(val-1)+"&limit="+_this.pageSize
                ).then((response) => {
                    if(response.data.errcode===1){
                        alert(response.data.errmsg);
                    }else{
                         _this.tableData = response.data.data;
                        _this.currentPage=test
                    }	
                }),function(error){
                    $.alert('对不起，你的请求处理失败了!');   //失败处理
                } 
          }
      }
    }
</script>
<style>
.el-table td, .el-table th.is-leaf {
    padding-left:50px;
}
</style>