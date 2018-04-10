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
                        
                        <div >学生登录</div>
                        <form action="" id="loginForm"  class="css-form">
                            <div class="css-input">
                                <div class="css-tit">学号</div>
                                <input v-model="username"  placeholder="请输入学号" class="css-group" type="text">
                            </div>
                            <div class="css-input">
                                <div class="css-tit">密码</div>
                                <input v-model="password"  placeholder="请输入密码" class="css-group" type="password">
                            </div>
                            <div class="css-input"  >
                            <a href="ForgetPassword.html" > 忘记密码？</a>
                            </div>
                            <a class="css-btn"  id="showTooltips" @click="login">登录</a>
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
            username:'',
            password:'',
        }
    },
    methods:{
        login(){
            if(this.username===''){
               alert("请输入学号！", "text");
               return false;
            }else if(this.password===''){
                alert("请输入密码！", "text");
                return false;
            }else{
                var id="5a741e52ddccf17e5562d188"
                this.$http.post('/apis/platform/user/member/passwd?_id='+id,
                {
                    "username": this.username,
                    "password": this.password
                }).then(function(res){
                    alert(res.data)
                })
            }
        }

    }
}
</script>