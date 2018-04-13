<template>
        <div class="reg" style="padding: 40px 0 180px 0">
				<div class="css-main-u">
					<div class="css-log-banner">
						<div class="css-container">
                <div > <!-- class="css-text" -->
								<p class="css-p1">
									慧安&nbsp;&nbsp;(HuiAn)
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
							</div>
							<div class="css-conbox">
								<div class="css-title">企业登录</div>
								<form action="" id="loginForm"  class="css-form">
									<div class="css-input">
										<div class="css-tit">单位全称</div>
										<input v-model="entName" placeholder="单位全称" class="css-group" type="text">
									</div>
									<div class="css-input">
										<div class="css-tit">登录密码</div>
										<input v-model="entPassword" placeholder="登录密码" class="css-group" type="password" @keyup.enter="login">
									</div>
									<a class="css-btn" href="javascript:" id="showTooltips" @click.keyup.enter="login">登录</a>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
</template>
<script>
export default{
    data() {
        return {
            entName: '',
              entPassword: ''
        };
    },
    methods: {
      login: function(){
        var _this = this;
        if(_this.entName===''){
            alert("请输入企业名称！");
        }else if(_this.entPassword===''){
            alert("请输入企业密码！");
        }else{
          _this.$http.post(
            "/apis/platform/corp/login", 
            {
                username: _this.entName,
                password: _this.entPassword
            },
            {
              emulateJSON: true
            }
          ).then((response) => {
            if(response.data.errcode!=0){
            }else{
            //   $.hideLoading();
               if(response.data.data.status=="1"){
                alert("请完善您的信息");
                location.href="UnitReg2.html?_id="+response.data.data._id;
              }else if(response.data.data.status=="2"){
                alert("审核中,请您耐心等待");
                location.href="index.html"
              }else if(response.data.data.status=="3"){
                alert("您的账号未通过审核");
                /* window.location.href="/ent/login"; */
              }else if(response.data.data.status=="0"){
                _this.$router.push({path:'/'})
              }else{
                alert("您还没有注册,请注册");
                location.href="UnitReg.html"
              } 
            }
          }),function(error){
            // $.hideLoading();
            alert('对不起，你的请求处理失败了!');   //失败处理
          };
          // setTimeout(function() {
          //   // $.hideLoading();
          //  alert('您和服务器的链接不稳定，请重新进入登录!');   //设置30000毫秒超时认为请求失败。
          // }, 30000);
        }
      }
    }
  }
</script>