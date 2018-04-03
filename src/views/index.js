

const pages = {
    backPage:{
        backIndex:()=>import('@/views/backPage/backIndex.vue'),
        updatePassword:()=>import('@/views/backPage/updatePassword.vue'),
    },
    careertalk:{
        careertalkAdd:()=>import('@/views/careertalk/careertalkAdd.vue'),
    },
    jobfair:{
        jobfairList:()=>import('@/views/jobfair/jobfairList.vue'),
    },
    jobs:{
        jobsAdd:()=>import('@/views/jobs/jobsAdd.vue'),
        jobsList:()=>import('@/views/jobs/jobsList.vue'),
        jobsUpdate:()=>import('@/views/jobs/jobsUpdate.vue'),
    }
}
export default pages;