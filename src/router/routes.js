import main from '@/components/main.vue';
import backIndex from '@/views/backPage/backIndex.vue';
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
]

export default _routes;