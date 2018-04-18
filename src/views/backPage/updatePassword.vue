<template>
    <el-main  style="width:1000px;height:800px; background:none;">
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
        <div>
            <el-steps :space="200" :active=stepActive finish-status="success">
                <el-step title="已完成"></el-step>
                <el-step title="进行中"></el-step>
                <el-step title="步骤 3"></el-step>
              </el-steps>
              <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div>
        
    </el-main>
</template>

<script>
export default{
    data() {
        return {
            oldpass:'',
            newpass:'',
            comfirmpass:'',
            stepActive:0,
            
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