<template>
        <div>
                <div class="notify"><!--通知公告-->
                    <div id="cen_right_top">
                    <div class="sele"><!--公告、动态-->
                        <div class="selet" style="background-color:#95d8ea;"><h3 class="active">政策法规</h3></div>
                        <div class="selet" > <h3>就业心得</h3></div>
                        <div class="selet" > <h3>辅导活动</h3></div>
                        <div class="selet" > <h3>职业课程</h3></div>
                        <div class="selet" > <a href="index.html"><h3>专家咨询</h3> </a> </div>
                    </div>
                    <div class="notify-search">
                        <p>关键词</p>
                         <form action="" method="">
                        <input class="sou2" />
                        <input class="sousuo2" type="button"  value="查找">
                         </form>
                    </div>
                    <div class="notes">
                        <div class="notes-title">
                            <p>标题</p>
                            <p>发布时间</p>
                        </div>
                            <div class="notes-list"  style="display:block">
                            <ul >
                                <li v-for="policy in guidancePolicy" >
                                    <a :href="['guidancePolicyDetailPage.html?id='+policy.id]" target="_blank">{{policy.title}}</a >
                                    <span>{{policy.time}}</span>
                                </li>
                            </ul>
                            </div> 
                            <div class="notes-list">
                                <ul>
                                    <li v-for="experience in guidanceExperience" >
                                        <a :href="['guidanceExperiencePage.html?id='+experience.id]">{{experience.title}}</a >
                                        <span>{{experience.time}}</span>
                                    </li> 
                                </ul>
                            </div>
                            <div class="notes-list">
                                <ul>
                                    <li v-for="coach in guidanceCoach" >
                                        <a :href="['guidanceCoachPage.html?id='+coach.id]">{{coach.title}}</a >
                                        <span>{{coach.time}}</span>
                                    </li>    
                                </ul>
                            </div>
                            <div class="notes-list">
                                <ul>
                                     <li v-for="voca in guidanceVocational" >
                                        <a :href="['guidanceVocationalPage.html?id='+voca.id]">{{voca.title}}</a >
                                        <span>{{voca.time}}</span>
                                    </li>  
                                </ul>
                            </div>
                            <div class="notes-list">
                                <ul>
                                    <!-- <li v-for="item in items">{{item.message}}</li>                         -->
                                    <li><a href="noticePage.html">专家咨询</a ><span>2017年10月26日</span></li>
                                    <li><a href="noticePage.html">专家咨询</a ><span>2017年10月26日</span></li>   
                                    <li><a href="noticePage.html">专家咨询</a ><span>2017年10月26日</span></li>   
                                    <li><a href="noticePage.html">专家咨询</a ><span>2017年10月26日</span></li>   
                                </ul>
                            </div>           
                            <div class="pages">
                                <ul>
                                    <li class="ps"><a href="">首页</a ></li>
                                    <li class="p1"><a href="">1</a ></li>
                                    <li class="p2"><a href="">2</a ></li>
                                    <li class="p3"><a href="">3</a ></li>
                                    <li class="pm"><a href="">末页</a ></li>     
                                </ul>
                            </div>
                        
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
                guidancePolicy:[],
			guidanceExperience:[],
			guidanceCoach:[],
			guidanceVocational:[]  
            };
      },
      mounted(){
			this.getGuidancePolicy();
			this.getGuidanceExperience();
			this.getGuidanceCoach();
			this.getGuidanceVocational();
		},
      methods: {
        getGuidancePolicy: function(){
				//政策法规
				var _this = this;
				_this.$http.get(
					"/static/frontPage/json/guidancePolicy.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.guidancePolicy = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
			getGuidanceExperience: function(){
				//就业心得
				var _this = this;
				_this.$http.get(
					"/static/frontPage/json/guidanceExperience.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.guidanceExperience = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
			getGuidanceCoach: function(){
				//辅导活动
				var _this = this;
				_this.$http.get(
					"/static/frontPage/json/guidanceCoach.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.guidanceCoach = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
			getGuidanceVocational: function(){
				//职业课程
				var _this = this;
				_this.$http.get(
					"/static/frontPage/json/guidanceVocational.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.guidanceVocational = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			}
      }
    
    }
    </script>   