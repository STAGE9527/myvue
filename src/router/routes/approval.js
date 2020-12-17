
export default {
    path: 'approval',
    name: 'approval',
    meta: {
        title: ''
    },
    component: {
        render: h => h('router-view')
    },
    children: [
        {
            path: 'kol',
            meta: {
                title: 'KOL审核'
            },
            component: () => import('../../views/approval/kol.vue'),
        },
        {
            path: 'goods',
            meta: {
                title: '商品推广审核'
            },
            component: {
                render: h => h('router-view')
            },
            children: [
                {
                    path: '',
                    component: () => import('../../views/approval/goods.vue'),
                },
                {
                    path: 'detail/(:id)?',
                    meta: {
                        title: '商品详情页'
                    },
                    component: () => import('../../views/resource/goods/detail.vue'),
                }
            ]
        },
        {
            path: 'activities',
            meta: {
                title: '活动推广审核'
            },
            component: {
                render: h => h('router-view')
            },
            children: [
                {
                    path: '',
                    component: () => import('../../views/approval/activites.vue'),
                },
                {
                    path: 'detail/(:id)?',
                    meta: {
                        title: '活动详情页'
                    },
                    component: () => import('../../views/resource/activities/detail.vue'),
                }
            ]
        },

    ]
}