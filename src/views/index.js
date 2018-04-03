

const pages = {
    backPage:{
        backIndex:()=>import('@/views/backPage/backIndex.vue'),
        updatePassword:()=>import('@/views/backPage/updatePassword.vue'),
    },
    careertalk:{
        careertalkAdd:()=>import('@/views/careertalk/careertalkAdd.vue'),
        careertalkList:()=>import('@/views/careertalk/careertalkList.vue'),
        careertalkUpdate:()=>import('@/views/careertalk/careertalkUpdate.vue'),
    },
    jobfair:{
        jobfairAdd:()=>import('@/views/jobfair/jobfairAdd.vue'),
        jobfairList:()=>import('@/views/jobfair/jobfairList.vue'),
        jobfairUpdate:()=>import('@/views/jobfair/jobfairUpdate.vue'),
    },
    jobs:{
        jobsAdd:()=>import('@/views/jobs/jobsAdd.vue'),
        jobsList:()=>import('@/views/jobs/jobsList.vue'),
        jobsUpdate:()=>import('@/views/jobs/jobsUpdate.vue'),
    },
    frontPage:{
        frontIndex:()=>import('@/views/frontPage/frontIndex.vue'),
        testPage:()=>import('@/views/frontPage/testPage.vue'),
    },
}
export default pages;