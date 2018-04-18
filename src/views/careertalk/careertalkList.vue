<template>
        <el-main style=" background:none !important; height:700px;padding-left:300px;  line-height: 40px; text-align:center; margin:0 auto;height:860px;"> 
                <div style="border:1px solid #ccc; margin-top:30px; margin-bottom:50px; background:#fff;width:850px;">
                    <p class="pcss">宣讲会列表</p>
                     <el-table :data="tableData" style="width:1000px">
                          <el-table-column  prop="subject"  label="宣讲会标题" min-width="180"> </el-table-column>
                          <el-table-column  prop="meta.createdAt"   label="开始时间"     min-width="180"> </el-table-column>
                          <el-table-column  prop="corp.name"   label="发布公司" min-width="180"> </el-table-column>
                          <el-table-column  fixed="right"  label="操作"  min-width="120"> <template slot-scope="scope">
                            <el-button  v-on:click.native.prevent="listRow(scope.row._id)" type="text" size="small"> 详情  </el-button>
                           </template> </el-table-column>
                    </el-table>
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
        </el-main>
</template>

<script>
import store from '@/store/store.js'
export default{
    data(){
        return{
            tableData:[],
            currentPage: 1,
            pageSize:10,
            total:400,
            test:''
            
        }
    },
    store,
    mounted(){
		this.getData();
    },
    methods:{
        listRow(_id) {
            var _this =this;
            _this.$router.push({
                path:'/careertalk/careertalkUpdate',
                query: {
                 "_id": _id
                    }
            })
          },
        getData(){
            var _this = this;
            this.$http.get('/apis/api/getdata/jobs/campus/simple?skip='+(this.currentPage-1)+'&limit='+this.pageSize
            ).then(function(response){
                _this.tableData = response.data.data;
                _this.allSize = response.data
                _this.total = response.data.total
            })
            .catch(function(res){
                alert(res.data.errmsg)
            })
				
            },
        handleSizeChange(val) {
            var _this = this;
            _this.test=val;
                _this.$http.get(
                "/apis/api/getdata/jobs/jobfair/simple?corp.id=5a9e2ed7a44cd66c81cfcf61&skip="+(this.currentPage-1)+"&limit="+_this.test
            ).then((response) => {
                if(response.data.errcode===1){
                    alert(response.data.errmsg);
                }else{
                     _this.tableData = response.data.data;
                    _this.pageSize=_this.test;
                }
            }),function(error){
                $.alert('对不起，你的请求处理失败了!');   //失败处理
            } 
            },
        handleCurrentChange(val) {
            var _this = this;
                _this.test=val;
            _this.$http.get(
                "/apis/api/getdata/jobs/jobfair/simple?corp.id=5a9e2ed7a44cd66c81cfcf61&skip="+(val-1)+"&limit="+_this.pageSize
            ).then((response) => {
                if(response.data.errcode===1){
                    alert(response.data.errmsg);
                }else{
                     _this.tableData = response.data.data;
                    _this.currentPage=_this.test
                }	
            }),function(error){
                $.alert('对不起，你的请求处理失败了!');   //失败处理
            } 
        }



    }

}


</script>