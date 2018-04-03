<template>
        <div id="tab">
                <el-table
                    :data="$store.state.jobList"
                    style="width: 100%">
                    
                    <el-table-column
                    prop="name"
                    label="职位">
                    </el-table-column>
                
                  <el-table-column
                    prop="count"
                    label="人数">
                    </el-table-column>
                    
                    <el-table-column
                    prop="requirement"
                    label="需求">
                    </el-table-column>
                    
                    <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    v-on:click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                    </el-table-column>
                </el-table>   
            </div>
</template>

<script>
import store from '@/store/store.js'
export default{
    store,
    methods:{
        handleDelete(index,row){
		    		 this.jobList.splice(index,1) ;
		    	 }, 
        
    }

}


</script>