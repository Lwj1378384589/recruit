<template>
        <div>
                <div class="sele"><!--公告、动态-->
                    <div class="sele1" id="tz">通知公告</div>
                    <div class="sele2" id="gg">工作动态</div>   
                </div>
                <div class="notify-search">
                    <p>关键词</p>
                     <form action="" method="post">
                    <input class="sou2" />
                    <input class="sousuo2" type="button"  value="查找">
                     </form>
                </div>
                <div class="notes">
                    <div class="notes-title">
                        <p>标题</p>
                        <p>发布时间</p>
                    </div>
                    <!--1-->
                    <div id="title1">
                    <div class="notes-list" >
                        <ul id="lists">
                            <!-- <li v-for="item in items">{{item.message}}</li>                         -->
                            <li v-for="notice in noticeList" >
                                <a  :href="['noticePage.html?id='+notice.id]">{{notice.title}}</a >
                                <span>{{notice.time}}</span>
                            </li>
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
                <!--2-->
                <div id="title2" >
                        <div class="notes-list" >
                            <ul id="lists">
                                <!-- <li v-for="item in items">{{item.message}}</li>                         -->
                                <li v-for="workList in dynamicWork" >
                                    <a  :href="['noticePage.html?id='+workList.id]">{{workList.title}}</a >
                                    <span>{{workList.time}}</span>
                                </li>
                                
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
</template>
    
    <script>
    export default{
        data() {
            return {
                noticeList:[],
			dynamicWork:[]
            };
      },
      mounted(){
			this.getNoticeList();
			this.getDynamicWork();
		
		},
      methods: {
        getNoticeList: function(){
				//通知信息列表
				var _this = this;
				_this.$http.get(
					"/static/frontPage/json/noticeList.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.noticeList = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
			getDynamicWork: function(){
				//岗位信息列表
				var _this = this;
				_this.$http.get(
					"/static/frontPage/json/dynamicWork.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.dynamicWork = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			}
      }
    
    }
    </script>   