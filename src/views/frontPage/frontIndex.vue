<template>
    <div>
        <div class="css-main-index">
					<div class="container clearfix">
						<div class="css-channel pull-left">
							<div class="css-menu" id="css-menu">
								<div onmouseover="lul_list()" onmouseout="lul_out()" class="cr_li">
									<a href="index.html" class="li_a">平台首页 </a>
									<div class="box1" id="box1">
										<div class="list-left">
											<ul  class="lt-ul">
												<li><a href="recruitment.html">岗位信息</a></li>
												<li><a href="campusTalkPage.html">校园宣讲会</a></li>
												<li><a href="campusRecruitmentPage.html">校园招聘公告</a></li>
											</ul>
										</div>
										<div class="list-con">
											<ul class="cn-ul">
												<p class="txt">按行业查看职位</p>
												 <div v-for="pitem in positionIndustry">
												 <li><a href="#this" @click="find(pitem)">{{pitem.name}}</a></li>
												 </div>
											</ul>
										</div>
										<div class="list-bg"></div>
										<div class="list-right">
											<ul class="cn-ul">
												<p class="txt">按类别查看职位</p>
												<div v-for="ptyim in positionType">
												<li><a href="#this" @click="find(ptyim)">{{ptyim.name}}</a></li>
												</div>
											</ul>
										</div>
									</div>
								</div>
								<div onmouseover="lul_list1()" onmouseout="lul_out1()" class="cr_li stubg">
									<a href="index.html" class="li_a">学生服务</a>
									<div class="box1" id="box2">
										<div class="css-subMenu">
											<div class="top-M">就业信息</div>
											<ul class="Mul">
												<li><a href="recruitment.html">岗位信息</a></li>
												<li><a href="campusTalkPage.html">校园宣讲会</a></li>
												<li><a href="campusRecruitmentPage.html">校园招聘公告</a></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">职业辅导</div>
											<ul class="Mul">
												<li><a href="guidance.html">政策法规</a></li>
												<li><a href="guidance.html">就业心得</a></li>
												<li><a href="guidance.html">辅导活动</a></li>
												<li><a href="guidance.html">职业课程</a></li>
												<li><a href="guidance.html">专家咨询</a></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">就业服务</div>
											<ul class="Mul">
												<li><a href="StudentLogin.html">学历学位认证</a></li>
												<li><a href="StudentLogin.html">电子图像校对</a></li>
												<li><a href="StudentLogin.html">报到证查询</a></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">用户中心</div>
											<ul class="Mul">
												<li><a href="StudentLogin.html">推荐表注册</a></li>
												<li><a href="StudentLogin.html">简历管理</a></li>
												<li><a href="StudentLogin.html">职位收藏夹</a></li>
												<li><a href="StudentLogin.html">职位申请记录</a></li>
												<li><a href="StudentLogin.html">我的日程表</a></li>
												<li><a href="StudentLogin.html">账号设置</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div onmouseover="lul_list2()" onmouseout="lul_out2()" class="cr_li danwbg">
									<a class="li_a" href="index.html">单位服务</a>
									<div class="box1" id="box3">
										<div class="css-subMenu">
											<div class="top-M">基础服务</div>
											<ul class="Mul">
												<li><a href="UnitReg.html">单位注册</a></li>
												<li><a href="unitLogin.html">职位发布</a></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">充值服务</div>
											<ul class="Mul">
												<li><a href="unitLogin.html">广告申请</a></li>
												<li><a href="unitLogin.html">职位置顶</a></li>
												<li><a href="unitLogin.html">定向发布</a></li>
												<li><a href="unitLogin.html">下载简历</a></li>
												<li><a href="unitLogin.html">职位邀请</a></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">会员服务</div>
											<ul class="Mul">
												<li><a href="unitLogin.html">充值服务所有内容</a></li>
												<li><a href="unitLogin.html">校园统一认证</a></li>
												<li><a href="unitLogin.html">生源专业查询</a></li>
												<li><a href="unitLogin.html">招聘会展位优选</a></li>
												<li><a href="unitLogin.html">专属在线客服</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div  onmouseover="lul_list3()" onmouseout="lul_out3()" class="cr_li schoolbg">
									<a class="li_a" href="index.html">学校服务</a>
									<div class="box1" id="box4">
										<div class="css-subMenu">
											<div class="top-M">就业管理</div>
											<ul class="Mul">
												<li><a href="disLogin.html">推荐表审核</a></li>
												<li><a href="disLogin.html">协议书审核</a></li>
												<li><a href="disLogin.html">电子图像校对</a></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">常用链接</div>
											<ul class="Mul">
												<li><a href="http://www.baidu.com/">长春毕业生就业网</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div class="cr_li schoolLbg">
									<a href="SchoolList.html" class="li_a">高校分站点</a>
								</div>
							</div>
						</div>
						<div class="css-slide">
								<div class="xmK mb50">
									<div class="lB" id="lB">
										<div v-for="carim in carouselFigure">
											<a v-bind:href="carim.url"  class="aimg" onmouseover="ba_move()" onmouseout="ba_out()" style="display: block;">
												<img v-bind:src ="carim.name"/>
											</a>
										</div>
										<div class="dian_ul1">
											<div class="Txin" style="float: left;">
												<ul class="Tul" id="Tul">
													<div v-for="poim in photoAnnotate">
														<li style="display: block;">{{poim.name}}</li>
													</div>
												</ul>
											</div>

										</div>
										<ul class="dian_ul"  id="dian_ul">
											<li onmousemove="dian_list(0)" onmouseout="ba_out()" class="dian_li_bg"></li>
											<li onmousemove="dian_list(1)" onmouseout="ba_out()"></li>
											<li onmousemove="dian_list(2)" onmouseout="ba_out()"></li>
											<li onmousemove="dian_list(3)" onmouseout="ba_out()"></li>
											<li onmousemove="dian_list(4)" onmouseout="ba_out()"></li>
										</ul>
									</div>
								</div>
						</div>
						<div class="css-login-notice">
							<div class="css-login">
								<div class="css-welcome">
									<img src="/static/frontPage/imgs/vv.jpg">
									<ul class="Wul">
										<li>Hi,你好...</li>
										<li>找工作，招人才...</li>
									</ul>
								</div>
								<ul class="css-btn">
									<li class="css-btnlogin"><a href="disLogin.html">用户登录</a></li>
									<li class="css-btnregister"><a href="distRegist.html">免费注册</a></li>
								</ul>
							</div>
							<div class="css-notice">
								<div class="css-caption">
									<div class="Clt">公告</div>
									<div class="css-more"><a href="notice.html">MORE > </a></div>
								</div>
								<ul class="Nul">
									<div v-for="notice in noticeList">
										<li><a href="#this" @click="findthe(notice)">{{notice.name}}</a></li>
										
									</div>
								</ul>
							</div>
						</div>
						<div class="clearfix"></div>
						<div class="css-imggroup">
							<ul>
								<div v-for="advers in advertisingPosition">
								<li>
									<a @click="findadv(advers)" target="_blank">
									<img :src ="advers.img" :title="advers.titles"></a>
								</li>
								</div>
							</ul>
						</div>
						<div class="css-imgline" style="background: red;">
							<a href="noticePage.html" target="_blank"><img src="/static/frontPage/imgs/bigI.jpg" alt="大图片"></a>
						</div>
						<div class="clearfix"></div>
						<div class="css-imggroup">
							<ul>
								<div v-for="advers in advertisingPosition">
								<li>
									<a @click="findadv(advers)" target="_blank">
									<img :src ="advers.img" :title="advers.titles"></a>
								</li>
								</div>
							
							</ul>
						</div>
						<div class="clearfix"></div>
						<div class="css-jobfair pull-left">
							<div class="box">
								<ul class="tabs clearfix">
									<li v-for="(tab,index) in tabsName">
										<a v-bind:href="tab.url" class="tab-link" @mouseover="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}</a>
									</li>
									<div style="float: left; height: 48px; line-height: 48px; width:80px; margin-left: 150px;  "><a href="campusTalkPage.html"> MORE>> </a></div>
								</ul>

								<div class="cards">
									<div class="tab-card" style="display: block;" >
										<ul class="ulC">
											<div v-for="ctim in campusPreachlist"><!-- 校园宣讲会 -->
												<li><a href="#this" @click="findly(ctim)">
													<span class="css-col400">{{ctim.subject}}</span>
													<span class="css-col200">{{ctim.corp.name}}</span>
													<span class="tim">{{ctim.meta.createdAt}}</span>
												</a></li>
											</div>
										</ul>
									</div>
									<div class="tab-card">
										<ul class="ulC">
											<div v-for="dtim in campusRecruitlist">
												<li><a href="#this" @click="find(dtim)"><!-- 校园宣招聘公告 -->
													<span class="css-col400">{{dtim.subject}}</span>
													<span class="css-col200">{{dtim.tenant}}</span>
													<span class="tim">{{dtim.meta.createdAt}}</span>
												</a></li>
											</div>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="css-calendar pull-right" style="position: relative;">
							<!--<div style="width: 387px; height: 400px; background: #bfe9e7; position: relative; margin: 0 auto; margin-top: 100px;" >-->
								<div class="css-caption1" style="width:347px; height:50px; background: #00B8EC url('imgs/rili.png') no-repeat 10px 13px;; color: #ffffff; padding-left: 40px; font-size: 18px; line-height: 50px;">
									就业日历
								</div>
								<div id='schedule-box'  class="boxshaw" >

								</div>

								<div class="css-job" id="css-job">
									<div class="job-top">
										<div class="top-left" id='h3Ele'>
											<!--2017-03-01-->
										</div>
										<div onclick="jobclose()" class="top-right">
											X
										</div>
									</div>
									<div class="job-box">
										<p><a href="campusTalkPage.html">校园宣讲会：<span style="color:#00B8EC ">1场</span></a></p>

									</div>
								</div>
							</div>
						<!--</div>-->
						<div class="clearfix"></div>
						<!-- 拒绝诈骗-->
						<div class="css-imgline" style="margin-top: 0;">
							<img src="/static/frontPage/imgs/refuse.jpg" alt="拒绝诈骗图片" style="margin-top: 0;">
						</div>
						<div class="clearfix"></div>
						<div class="css-hotjob">
							<div class="css-caption">
								<div><img src="/static/frontPage/imgs/jobList.png">最新职位</div>
								<span><a href="recruitment.html" target="_blank" class="css-more">MORE&nbsp;&gt;&gt;</a></span>
							</div>
							<div class="css-content">
								<div class="css-ujobs clearfix">
									<div v-for="jobs in newJobs">
										<div v-if="(jobs.vip=='1')">
										<ul>
											<li>
												{{jobs.company}}
												<img src="/static/frontPage/imgs/vip.gif" title="VIP">
											</li>
											<li>
												<a href="recruitmentDetailPage.html"  target="_blank" class="text-blue">{{jobs.position}}</a>
												<a href="recruitmentDetailPage.html"  target="_blank" class="text-blue">{{jobs.position2}}</a>
												<a href="recruitmentDetailPage.html" target="_blank" class="text-blue">{{jobs.position3}}</a>
											</li>
										</ul>
										</div>
									</div>
									
								</div>
								<div class="css-njobs">
								<div v-for="jobs in newJobs">
									<div v-if="(jobs.vip=='0')">
									<ul>
										<li>{{jobs.company}}</li>
										<li>
											<a href="recruitmentDetailPage.html" target="_blank" class="text-blue">{{jobs.position}}</a>
											<a href="recruitmentDetailPage.html" target="_blank" class="text-blue">{{jobs.position2}}</a>
											<a href="recruitmentDetailPage.html" target="_blank" class="text-blue">{{jobs.position3}}</a>
										</li>
									</ul>
									</div>
								</div>
									
								</div>
							</div>
						</div>
						<div class="clearfix"></div>
						<div class="css-corphire">
							<div class="css-caption">
								<div><img src="/static/frontPage/imgs/vvip.png">高级会员</div>
								<span><a href="seniorMemberPage.html" class="css-more">MORE&nbsp;&gt;&gt;</a></span>
							</div>
							<div id="marquee5">
								<div style="height: 10000px;">
									<ul class="css-logos">
										<li v-for="senior in menber">
											<a :href="['companyDetailPage.html?id='+senior.id]" target="_blank">
												<img v-bind:src="senior.img" v-bind:title="senior.name">
												<p>{{senior.name}}</p>
											</a>
										</li>
										

									</ul>
								</div>

							</div>
						</div>
						<div class="css-talentmarket">
							<div class="css-caption">
								<div>
									<img src="/static/frontPage/imgs/jz.png">
									招聘简章
								</div>
								<span>
									<a href="recruitmentBrochurePage.html" target="_blank" class="css-more">MORE&nbsp;&gt;&gt;</a>
								</span>
							</div>
							<div class="css-content">
								<ul>
								
									<li v-for="recruit in recruitmentBrochure">
										<time>{{recruit.time}}</time>
										<a :href="['recruitmentBrochureDetailPage.html?id='+recruit.id]">
											<span class="css-col470">{{recruit.title}}</span>
										</a>
									</li>
									
									
								</ul>
							</div>
						</div>
						<div class="clearfix"></div>
						<div class="css-friendlink" style="margin-top: 20px;">
							<div class="css-caption">
								<div>
									<img src="/static/frontPage/imgs/link.png"> 
									友情链接
								</div>
							</div>

							<ul class="link">
								<li><a href="http://www.ccedin.net/index.shtml">吉林长春教育局</a></li>
								<li><a href="http://www.chsi.com.cn/xlrz/201202/20120228/284926187.html">长春市就业服务中心</a></li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
	</div>

</template>
<script>
export default{
    data() {
        return {
            tabsName: [{
				name: "校园宣讲会",
				url:"campusTalkPage.html",
				isActive: true
			}, {
				name: "校园招聘公告",
				url:"campusRecruitmentPage.html",
				isActive: false
			}],
            active: false,
			noticeList:[],
			campusPreachlist:[],
			campusRecruitlist:[],
			carouselFigure:[],
			photoAnnotate:[],
			positionIndustry:[],
			positionType:[],
			advertisingPosition:[],
			menber:[],
			recruitmentBrochure:[],
			newJobs:[]//最新职位
        };
  },
  mounted(){
    this.getFiveNotice();
    this.getCampusPreaching();
    this.getCampusRecruitment();
    this.getCarouselFigure();
    this.getPhotoAnnotate();
    this.getPositionIndustry();
    this.getPositionType();
    this.getAdvertisingPosition();
    this.getMenber();
    this.getRecruitmentBrochure();
    this.getNewJobs();
	},
  methods:{
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
        getPositionType: function(){
				//按类别查看职位
				var _this = this;
				_this.$http.get(
					"/apis/naf/code/items/36/list"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.positionType = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
        },
        getCampusPreaching: function(){
				//校园宣讲会
				var _this = this;
				_this.$http.get(
					"/apis/jobs/campus/simple?skip=0&limit=10"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.campusPreachlist = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
        },
        getCampusRecruitment: function(){
            //校园招聘公告
            var _this = this;
            _this.$http.get(
                "/apis/jobs/jobfair/simple?skip=0&limit=10"
            ).then((response) => {
                if(response.data.errcode===1){
                    alert(response.data.errmsg);
                }else{
                    _this.campusRecruitlist = response.data.data;
                }
            }),function(error){
                $.alert('对不起，你的请求处理失败了!');   //失败处理
            };
        },
        tabsSwitch: function(tabIndex) {

            var tabCardCollection = document.querySelectorAll(".tab-card"),
                    len = tabCardCollection.length;

            for(var i = 0; i < len; i++) {
                tabCardCollection[i].style.display = "none";
                this.tabsName[i].isActive = false;
            }
            this.tabsName[tabIndex].isActive = true;
            tabCardCollection[tabIndex].style.display = "block";
        },
        getFiveNotice: function(){
				//右上角五条公告
				var _this = this;
				_this.$http.get(
					"static/frontPage/json/fiveNotice.json"
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
		findthe: function(notice){
				//
				location.href="noticePage.html?id="+notice.id;
        },
		getCarouselFigure: function(){
				//轮播图
				var _this = this;
				_this.$http.get(
					"static/frontPage/json/homeCarouselFigure.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.carouselFigure = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
		},	
		getPhotoAnnotate: function(){
				//轮播图注释
				var _this = this;
				_this.$http.get(
					"static/frontPage/json/photoAnnotate.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.photoAnnotate = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
		},
		getAdvertisingPosition: function(){
				//广告
				var _this = this;
				_this.$http.get(
					"static/frontPage/json/advertisingPosition.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.advertisingPosition = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
		},
		findadv: function(advers){
				//
				location.href="companyDetailPage.html?id="+advers.id;
		},
		getMenber: function(){
			//高级会员
			var _this = this;
			_this.$http.get(
				"static/frontPage/json/menber.json"
			).then((response) => {
				if(response.data.errcode===1){
					alert(response.data.errmsg);
				}else{
					_this.menber = response.data.list;
				}
			}),function(error){
				$.alert('对不起，你的请求处理失败了!');   //失败处理
			};
		},
		getRecruitmentBrochure: function(){
				//招聘简章
				var _this = this;
				_this.$http.get(
					"static/frontPage/json/recruitmentBrochure.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.recruitmentBrochure = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
		},
		getNewJobs: function(){
			//最新职位
			var _this = this;
			_this.$http.get(
				"static/frontPage/json/newJobs.json"
			).then((response) => {
				if(response.data.errcode===1){
					alert(response.data.errmsg);
				}else{
					_this.newJobs = response.data.list;
				}
			}),function(error){
				$.alert('对不起，你的请求处理失败了!');   //失败处理
			};
		},
		find: function(pitem){
			//按行业查看职业
			location.href="recruitment.html?id="+pitem.id;
		},
		find: function(ptyim){
			//按行业查看职业
			location.href="recruitment.html?id="+ptyim.id;
		},
		findly: function(ctim){
			//跳转宣讲会
			location.href="companyDetailPage.html?id="+ctim._id;
		},
		find: function(dtim){
			//跳转校园招聘公告
			location.href="companyPage.html?id="+dtim._id;
		}
  }
}

	

</script>


<style>
#frontIndex{
    background:blueviolet;
    width:800px;
    height:800px;
}

</style>