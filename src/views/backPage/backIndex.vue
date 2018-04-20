<template>
    <div id="backIndex" style="width:1200px; margin:0 auto; margin-top:95px; background:red; height:1500px; clear:both;">
        <!-- 固定导航栏 -->
        <div style="width:210px; height:1000px; background:#fff; float:left;">
            <div id="aside" style="width:200px; position:static;">
                <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" :default-openeds="openeds">
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
        <div style="width:990px; height:1000px; background:green; float:left;">


        </div>

                <!-- <div class="css-text">
                            <p class="css-p1">
                                慧安&nbsp;(HuiAn)
                            </p>
                            <p class="css-p1" style="padding-top: 0;">
                                    智慧就业云平台
                            </p>
                            <p class="css-p2">
                                在这里
                            </p>
                            <p class="css-p2">
                                连接
                            </p>
                            <p class="css-p2">
                                职场精英
                            </p>
                </div> -->
    </div>
</template>
</html>

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
import store from '@/store/store.js'
export default {
  data () {
    return {
    }
  },
  store,
}
</script>

<style>
body{
 background: #f5f5f5;
}
.el-menu{
    border: 1px solid #ccc;
}

</style>




<!-- 
<style>
#backIndex{
float: left;
height:800px;
}
</style>
 -->