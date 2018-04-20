<template>
     <div id="backIndex" style="width:1200px; margin:0 auto; margin-top:65px; min-height:750px;  clear:both;">
       <!-- 固定导航栏 -->
        <div style=" margin-right:10px; background:#fff; float:left;">
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
         <div style="width:988px; height:640px; border: 1px solid #ccc; background:#fff; float:left;">
             <div style="width:968px; padding-left:20px; font-size:16px; border-bottom:1px solid #ccc; height:56px; line-height:56px;">
                申请宣讲会
             </div>
            <form   style="margin:10px auto;text-align:center; ">
                <div class="renZheng" style="margin-left:200px;">
                    <div class="renDetail">
                        <div class="xiaoM">宣讲会标题：</div>
                        <div class="xiaoT">
                          <el-input name="subject" id="subject" placeholder="请输入内容" v-model="subject"></el-input>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">宣讲会内容：</div>
                        <div class="xiaoT">
                          <el-input name="content"  placeholder="请输入内容" v-model="content"></el-input>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">宣讲省份：</div>
                        <div class="xiaoT">
                          <el-select class="w500" v-model="provinceSelect"  placeholder="请选择"  id="province"  v-on:change="change">
                            <el-option v-for="item in provinceList" :key="item.code" :value="item.code" :label="item.name" ></el-option>
                          </el-select>
                        </div>
                      </div>
                      
                      <div class="renDetail" id="cityBlock" style="display:none;" >
                        <div class="xiaoM">宣讲城市：</div>
                        <div class="xiaoT">
                          <el-select class="w500"  v-model="citySelect" placeholder="请选择"  id="city" >
                            <el-option v-for="item in cityList" :key="item.code" :value="item.code" :label="item.name"></el-option>
                          </el-select>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">宣讲地点：</div>
                        <div class="xiaoT">
                          <el-input name="address" placeholder="请输入内容" v-model="address"></el-input>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">所在学校：</div>
                        <div class="xiaoT">
                          <el-input name="school" placeholder="请输入内容" v-model="school"></el-input>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">宣讲时间：</div>
                        <div class="xiaoT">
                            <el-date-picker class="w500" name="time" v-model="time" type="datetime" placeholder="选择日期时间"></el-date-picker>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">宣讲人：</div>
                        <div class="xiaoT">
                          <el-input name="contact" placeholder="请输入内容" v-model="contact"></el-input>
                        </div>
                      </div>
                      
                       <div class="renDetail">
                        <div class="xiaoM">电子邮箱：</div>
                        <div class="xiaoT">
                          <el-input name="email" placeholder="请输入内容" v-model="email"></el-input>
                        </div>
                      </div>
                  
                  <DataForm></DataForm>
                  <dataTable></dataTable>
                  
                  <div class="renDetail" style="width:400px;margin-left:50px;">
                      <el-button type="primary" style="width:400px; " class="btncss" id="sub" @click="submit">提交</el-button>
                  </div>
            </div>
        </form>
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
import store from '@/store/store.js'
import DataForm from "@/components/data/dataForm"
import DataTable from "@/components/data/dataTable"
export default{
    data() {
        return {
            subject:'',
            address:'',
            content:'',
            school:'',
            time:'',
            contact:'',
            email:'',
            cityList:[],
            citySelect:'',
            provinceSelect:'',
            provinceList:[],
            
    
        }
    },
    mounted(){
			this.getProvinceList();
    },
    methods: {
      getProvinceList: function(){
        var _this=this;
        this.$http.get('/apis/api/getdata/naf/code/xzqh/list?parent=000000&level=1'
        ).then(function(response){
            _this.provinceList=response.data.data;
        })
        .catch(function(res){
          if(res.data.errcode!=0)
          alert(res.data.errmsg)
        })
      },
      change:function(){
					var _this = this;
					var code=_this.provinceSelect;
					if(code=="110000"||code=="120000"||code=="310000"||code=="500000"||code=="710000"||code=="810000"||code=="820000"){
						$("#cityBlock").attr("style","display:none");
						return false;
					}
					$("#cityBlock").attr("style","display:block");
          this.$http.get('/apis/api/getdata/naf/code/xzqh/list?parent='+code+'&level=2'
          ).then(function(response){
              _this.cityList=response.data.data;
          })
          .catch(function(res){
            if(res.data.errcode!=0)
            alert(res.data.errmsg)
          })
        },
        submit(){
          var _this=this;
          var cityCode='';
          if(_this.subject==""||_this.subject==null){
            alert("请填写宣讲会标题");
            return false;
          }
          if(_this.content==""||_this.content==null){
            alert("请填写宣讲会内容");
            return false;
          }
          if(_this.address==""||_this.address==null){
            alert("请填写宣讲会地址");
            return false;
          }
          if(_this.school==""||_this.school==null){
            alert("请填写所在学校");
            return false;
          }
          if(_this.time==""||_this.time==null){
            alert("请填写宣讲时间");
            return false;
          }
          if(_this.contact==""||_this.contact==null){
            alert("请填写宣讲人");
            return false;
          }
          if(_this.email==""||_this.email==null){
            alert("请填写电子邮箱");
            return false;
          }else{
            var emailReg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
            if(!emailReg.test(_this.email)){
                alert("请输入正确的邮箱");
                return false;
              } 
          }
          if(_this.citySelect!=''||_this.citySelect==null){
            cityCode=_this.citySelect;
          }else if(_this.provinceSelect!=''||_this.provinceSelect==null){
            cityCode=_this.provinceSelect;
          }else{
            alert('请选择省份城市');
          }
          this.$http.post("/apis/api/post/jobs/campus/create?corp.id=session.userId&corp.name=session.username",
          {
            "subject":_this.subject,
            "content":_this.content,
            "city":{
                    "code":cityCode
                  },
            "address":_this.address ,
            "school":_this.school ,
            "time":_this.time ,
            "contact":_this.contact ,
            "email":_this.email ,
            "jobs":store.state.jobfairList
          }
          ).then(function(response){
            _this.$router.push({path:'/careertalk/careertalkList'})
          })
          .catch(function(res){
            alert(res.data.errmsg)
          })
        }
      },
    store,
    components:{
      DataForm,DataTable
    },

}

</script>
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
<style>
body{
 background: #f5f5f5;
 font-size:16px;
}
.el-menu{
    border: 1px solid #ccc;
}
.renDetail{
  margin-bottom:15px;
}
.xiaoM{
  line-height: 40px;
}

</style>