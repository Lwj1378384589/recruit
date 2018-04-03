<template>
    <el-main  style="width:1150px;height:800px; background:none;overflow-y:auto ">
        <div style="margin-left:200px;">
            <form class="formcss"  style="margin:10px auto;text-align:center; ">
                <p class="pcss">添加招聘会职位</p>
                <DataForm></DataForm>
                <DataTable></DataTable>
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
export default{
    data(){
        return{

        }
    },
    store,
    components:{
      DataForm,DataTable
    },
    methods:{
        submit(){
            var _this=this;
            var id='5aaa24e61ab25764103600a2';
            var corpname='福瑞科技';
            this.$http.post("/apis/jobs/jobfair/corp/apply?corp.name="+corpname+"&_id="+id,
            {
                "jobs":store.state.jobfairList
            })
            .then(function(response){
            _this.$router.push({path:'/'})
            })
            .catch(function(res){
                alert(res.data.errmsg)
            })

        }
    }

}

</script>