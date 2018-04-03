<template>
    <el-form :model="testForm" ref="testForm" class="demo-dynamic" style="width:300px;padding-left:50px">
        <el-form-item 
        prop="name"
        label="招聘职位">
        <el-input v-model="testForm.name" id="name"></el-input>
        </el-form-item>
        
        <el-form-item 
        prop="count"
        label="招聘人数">
        <el-input v-model="testForm.count" id="count"></el-input>
        </el-form-item>
        
        <el-form-item 
        prop="requirement"
        label="招聘需求">
        <el-input v-model="testForm.requirement" id="requirement"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="save()" >保存</el-button>
          <el-button v-on:click="resetForm('testForm')">重置</el-button>
        </el-form-item>

      </el-form>


</template>


<script>
import store from '@/store/store.js'
export default{
    data(){
        return{
            testForm:{
                    name:'',
                    count:'',
                    requirement:''
                    },
        } 

    },
    store,
    methods:{
       save(){
            var map={};
            var name=this.testForm.name;
            if(name==""||name==null){
                return false;
              }
          map["name"]=name;
          $("#name").val("");
          var count=this.testForm.count;
          if(count==""||count==null){
              return false;
            }
          map["count"]=count;
          $("#count").val("");
          var requirement=this.testForm.requirement;
          if(requirement==""||requirement==null){
              return false;
            }
          map["requirement"]=requirement;
          $("#requirement").val(""); 
          this.$store.commit("jobfairListAdd",map)
        //   this.jobList.push(map);
        //  const num=this.jobList.length;
       }

    }

}

</script>