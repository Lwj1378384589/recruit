import main from '@/components/main.vue';
import backIndex from '@/views/backPage/backIndex.vue';
import frontPageMain from '@/components/frontPageMain.vue'
import frontIndex from '@/views/frontPage/frontIndex.vue'
import testPage from '@/views/frontPage/testPage.vue'
import { routes } from '@/utils/menus';
import {frontRoutes} from '@/utils/frontMenus'
import { frontMenus } from '../utils/frontMenus';

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
                path:'/frontPage/',
                component:frontIndex,
                name:'frontIndex'
            },
            {
                path:'/frontPage/testPage',
                component:testPage,
                name:'testPage'
            },
            ...frontMenus,

        ]

    }
]

export default _routes;