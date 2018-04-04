import main from '@/components/main.vue';
import backIndex from '@/views/backPage/backIndex.vue';
import frontPageMain from '@/components/frontPageMain.vue'
import testPage from '@/views/frontPage/testPage.vue'
import { routes } from '@/utils/menus';
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
                path:'/frontPage/testPage',
                component:testPage,
                name:'testPage'
            },
        ]

    }
]

export default _routes;