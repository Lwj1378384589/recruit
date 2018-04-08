import main from '@/components/main.vue';
import backIndex from '@/views/backPage/backIndex.vue';
import frontPageMain from '@/components/frontPageMain.vue'
import frontIndex from '@/views/frontPage/frontIndex.vue'
import frontPageSecond from '@/components/frontPageSecond.vue'
import testPage from '@/views/frontPage/testPage.vue'
import { routes } from '@/utils/menus';
import { frontRoutes } from '@/utils/frontMenus'

const _routes=[
    {
        path: '/',
        component: main,
        name: 'main',
        meta: { requiresAuth: true },
        children:[
            {
                path: '',
                component: backIndex,
                name: 'home',
                hidden: true,
                meta: { requiresAuth: true },
            },
            ...routes,
        ],
        
    },
    {
        path:'/frontPage',
        component:frontPageMain,
        children:[
            {
                path:'',
                component:frontIndex,
                name:'frontIndex'
            },
            {
                path:'/frontPage/',
                component:frontPageSecond,
                name:'frontPageSecond',
                children:[
                    
                    ...frontRoutes,
                ],
            },
            {
                path:'/frontPage/testPage',
                component:testPage,
                name:'testPage'
            },
            

        ]

    }
]

export default _routes;