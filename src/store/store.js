import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 定义接收变量
const state={
    num1:1,
    num2:2
}

//写方法
const mutations = {
    add(state){
        state.num1+=1,
        state.num2+=2
    },
    reduce(state){
        state.num1-=1,
        state.num2-=2
    },
    jobfairListChange(state,map){
        alert(state.jobfairList)
        this.jobfairList.push(map);
    }
}

//返回
export default new Vuex.Store({

    state,mutations

})