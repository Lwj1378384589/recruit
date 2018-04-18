<template>
    <el-main  style="width:1150px;height:800px; background:none;overflow-y:auto ">
        <div style="margin-left:200px;">
            <form class="formcss"  style="margin:10px auto;text-align:center; ">
                <p class="pcss">修改招聘会职位</p>
                <!-- <DataForm></DataForm>
                <DataTable></DataTable> -->
                <digTable></digTable>
                <div class="renDetail">
                    <el-button type="primary" class="btncss" id="sub" @click="submit">提交</el-button>
                </div>
            </form>
        </div>
    </el-main>
</template>

<script>
import store from '@/store/store.js'
import DataForm from "@/components/data/dataForm"
import DataTable from "@/components/data/dataTable"
import digTable from "@/components/data/digTable"
export default{
    data(){
        return{
            id:this.$route.query._id
        }
    },
    store,
    components:{
      DataForm,DataTable,digTable
    },
    mounted(){
      this.getjobfairList();
    },
    methods:{
        
        getjobfairList(){
            var _this=this;
            _this.id="5aaa24e61ab25764103600a2";
            this.$http.get('/apis/jobs/jobfair/fetch?_id='+_this.jobs,
        ).then(function(response){
            var arr=response.data.data.corps[0].jobs;
            _this.$store.commit("jobfairListSearchInJobfair",arr); 
        })
        .catch(function(res){
        })
        

      },
        submit(){
            var _this=this;
            _this.id='5aaa24e61ab25764103600a2';
            var corpname='福瑞科技';
            this.$http.post("/apis/jobs/jobfair/corp/update?corp.id=session.userid&_id="+_this.id,
            {
                "jobs":store.state.jobfairList
            })
            .then(function(response){
                alert(response.data.errmsg)
            _this.$router.push({path:'/jobfair/jobfairList'})
            })
            .catch(function(res){
                alert(res.data.errmsg)
            })

        }
    }

}

</script>