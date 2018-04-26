// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store.js'
import {routes} from './utils/menus'
import axiosApi from "@/api/public"
Vue.use(ElementUI);
Vue.config.productionTip = false
// Vue.prototype.$http = axios
//登录验证  先查询是否登录,之后查询此路由地址是否需要登录
router.beforeEach((to, from, next) => {
    axiosApi.axiosGet('/apis/api/registLogin'
    ).then(res=>{
        if(res.data.errmsg=="请登录"){
            for(var i=0;i<routes.length-1;i++){ // 判断该路由是否需要登录权限
                if(routes[i].path===to.path||to.path==="/backpage"){
                    alert("使用此路由请先登录")
                    store.commit("loginBooleanChange","logout");
                    next({ path: '/frontPage/disLogin'})
                    break;
                }
            }
            if(i==9){
                alert("此路由无需登录")
                next();
            }
        }else{//登录情况
            store.commit("loginBooleanChange",res.data);
            next();
        }
    })
   

})

//请求-登录验证     需要设置什么样的请求拦截,什么不需要拦截(想想)
const blackList=[];
axios.interceptors.request.use(
  config => {
    
    // if(blackList.indexOf('sim')!=-1){
    //     alert("test:"+blackList.includes('sim'))
    //     alert(config.url+"需要拦截")
    //   if (store.state.loginBoolean) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //         alert("已登录,http拦截")
    //     }else{
    //         alert("未登录,已拦截")
    //     }
        
      
    //     //  alert(store.state.loginBoolean) // config.headers.Authorization = `token ${store.state.token}`;
    //   }else{
    //     alert("test:"+blackList.includes('sim'))
    //       alert(config.url+"无需拦截")
    //   }
      return config;
  },
  err => {
      return Promise.reject(err);
  });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
