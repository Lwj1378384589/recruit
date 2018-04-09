<template>
        <div>
                <div class="shuru">
                        <form action="" method="post">
                            <input type="text" /> 
                            <div id="shuru" style="display:inline-block;">
                                <select class="select">
                                    <option value="请选择">请选择</option>
                                    <option v-for="pitem in positionIndustry" :key="pitem._id"
                                        :value="pitem.code">{{pitem.name}}</option>
                                </select> 
                                <select class="select">
                                    <option value="请选择">请选择</option>
                                    <option v-for="posiem in positionType" :key="posiem.name"
                                        :value="posiem.name">{{posiem.name}}</option>
                                </select>  
                            </div>
                            <input type="text" id="city" class="cittty" value="请选择" /> 
                            <input class="shuru-s" type="submit" value="搜索">
                        </form>
                    </div>
        <div class="demo">
											
                <ul class="select">
                    <li class="select-list">
                        <dl id="select1">
                            <dt>薪资待遇：</dt>
                            <dd class="select-all selected"><a href="#">不限</a></dd>
                            <dd><a href="#">1500以下</a></dd>
                            <dd><a href="#">1500-1999</a></dd>
                            <dd><a href="#">2000-2999</a></dd>
                            <dd><a href="#">3000-4499</a></dd>
                            <dd><a href="#">4500-5999</a></dd>
                            <dd><a href="#">6000-7999</a></dd>
                            <dd><a href="#">10000-14999</a></dd>
                            <dd><a href="#">15000-19999</a></dd>
                            <dd><a href="#">20000及以上</a></dd>
                        </dl>
                    </li>
                    <li class="select-list">
                        <dl id="select2">
                            <dt>学历要求：</dt>
                            <dd class="select-all selected"><a href="#">不限</a></dd>
                            <dd><a href="#">大专</a></dd>
                            <dd><a href="#">本科</a></dd>
                            <dd><a href="#">硕士</a></dd>
                            <dd><a href="#">博士</a></dd>
                        </dl>
                    </li>
                    <li class="select-list">
                        <dl id="select3">
                            <dt>单位性质：</dt>
                            <dd class="select-all selected"><a href="#">不限</a></dd>
                            
                            <del v-for="dwxz in dwxzlist">
                            <dd><a href="#">{{dwxz.name}}</a></dd></del>
                        </dl>
                    </li>
                    <li class="select-list">
                        <dl id="select4">
                            <dt>单位规模：</dt>
                            <dd class="select-all selected"><a href="#">不限</a></dd>
                            <del v-for="dwgm in dwgmlist">
                            <dd><a href="#">{{dwgm.name}}</a></dd></del>
                        </dl>
                    </li>
                    <li class="select-result">
                        <dl>
                            <dt>已选条件：</dt>
                            <dd class="select-no">暂时没有选择过滤条件</dd>
                        </dl>
                    </li>
                </ul>
                </div>
                <div class="gangwei" style="background: #FFFFFF;">
                        <div class="gangwei-more"
                            v-for="joblist in postInformationList">
                            <div class="gangwei-left">
                                <p>
                                    <!-- <router-link to="{path:'frontPage/recruitmentDetailPage',query:{_id: {joblist._id}}">{{joblist.title}}</router-link> -->
                                    <a  v-on:click="find()" target="blank">{{joblist.title}}</a>
                                </p>
                                <ul>
                                    <li>时间：{{joblist.meta.createdAt}}</li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="gangwei-middle">
                                <p>
                                    <a :href="['companyDetailPage.html?id='+joblist._id]">{{joblist.corp.name}}</a><img
                                        src="/static/frontPage/imgs/vip.gif">
                                </p>
                                <!-- <p>行业：{{joblist.hy}}</p>
                                <p>性质：{{joblist.dwxz}}</p> -->
                            </div>
                            <div class="gangwei-right">
                                <div class="gangwei-sq">
                                    <a href="disLogin.html">申请职位</a>
                                </div>
                                <p>
                                    <a href="disLogin.html">置顶</a><a href="disLogin.html">收藏</a>
                                </p>
                            </div>
                        </div>
                         <div class="block">
                            <el-pagination
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
    </template>
    
    <script>
    export default{
        data() {
            return {
            dwxzlist:[],
            postInformationList:[],
			currentPage: 1,
		    pageSize:5,
		    total:100,
            positionIndustry:[],
			positionType:[],
			salarylist:[],
		dwgmlist:[]    
            };
      },
      mounted(){
        this.getPostInformationList();
		this.getDwxz();
		this.getDwgm();
        this.getPositionIndustry();
        this.getPositionType();
        this.getSalary();
	},
      methods: {
          find: function(){
        alert(11)
          },
        getPositionIndustry: function(){
				//按行业查看职位
				var _this = this;
				_this.$http.get(
					"/apis/naf/code/items/35/list"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.positionIndustry = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
			getSalary: function(){
				//获取热招职位列表
				var _this = this;
				_this.$http.get(
					"/apis/naf/code/items/37/list"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.salarylist = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				}
			},
			getPositionType: function(){
				//按类别查看职位
				var _this = this;
				_this.$http.get(
					"static/frontPage/json/positionType.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.positionType = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
        getDwxz: function(){
			//获取热招职位列表
			var _this = this;
			_this.$http.get(
				"/apis/naf/code/items/36/list"
			).then((response) => {
				if(response.data.errcode===1){
					alert(response.data.errmsg);
				}else{
					_this.dwxzlist = response.data.data;
				}
			}),function(error){
				$.alert('对不起，你的请求处理失败了!');   //失败处理
			}
		},
        getDwgm: function(){
			//获取热招职位列表
			var _this = this;
			_this.$http.get(
				"/apis/naf/code/items/37/list"
			).then((response) => {
				if(response.data.errcode===1){
					alert(response.data.errmsg);
				}else{
					_this.dwgmlist = response.data.data;
				}
			}),function(error){
				$.alert('对不起，你的请求处理失败了!');   //失败处理
			}
		},
        getPostInformationList: function(){
				//岗位信息列表
				var _this = this;
				var page = _this.currentPage-1;
				var url ="/apis/jobs/jobinfo/simple?skip="+page+"&limit="+_this.pageSize
					_this.$http.get(
					url
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.postInformationList = response.data.data;
						_this.total = response.data.total
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
            handleSizeChange(val) {
				var _this = this;
				 test=val;
				var page = _this.currentPage-1;
				var url ="/apis/jobs/jobinfo/simple?skip="+page+"&limit="+test
					_this.$http.get(
					url
					).then((response) => {
						if(response.data.errcode===1){
							alert(response.data.errmsg);
						}else{
							 _this.postInformationList = response.data.data;
							_this.pageSize=test;
						}
					}),function(error){
						$.alert('对不起，你的请求处理失败了!');   //失败处理
					} 
		      },
		      handleCurrentChange(val) {
		    	  var _this = this;
					 test=val;
					 var page = val-1;
					var url ="/apis/jobs/jobinfo/simple?skip="+page+"&limit="+this.pageSize
						_this.$http.get(
						url
					).then((response) => {
						if(response.data.errcode===1){
							alert(response.data.errmsg);
						}else{
							 _this.postInformationList = response.data.data;
							_this.currentPage=test
						}	
					}),function(error){
						$.alert('对不起，你的请求处理失败了!');   //失败处理
					} 
		      }
      }
    
    }
    </script>