export default {
    path: 'resource',
    component: {
        render: h => h('router-view')
    },
    redirect: 'resource/goods',
    meta: {
        title: '资源管理',
    },
    children: [
        {
            path: 'index',
            meta: {
                title: '资源列表'
            },
            component: () => import('../../views/resource/index.vue'),
        },
        {
            path: 'goods',
            meta: {
                title: '商品列表'
            },
            component: () => import('../../views/resource/goods/index.vue'),
        },
        {
            path: 'goods/add',
            meta: {
                title: '添加商品'
            },
            component: () => import('../../views/resource/goods/add.vue'),
        },
        {
            path: 'goods/:id',
            meta: {
                title: '商品详情'
            },
            component: () => import('../../views/resource/goods/detail.vue'),
        },
        {
            path: 'goods/edit/:id',
            meta: {
                title: '编辑商品'
            },
            component: () => import('../../views/resource/goods/add.vue'),
        },
        {
            path: 'activities',
            meta: {
                title: '活动列表'
            },
            component: () => import('../../views/resource/activities/index.vue'),
        },
        {
            path: 'activities/add',
            meta: {
                title: '添加活动'
            },
            component: () => import('../../views/resource/activities/add.vue'),
        },
        {
            path: 'activities/edit/:id',
            meta: {
                title: '编辑活动'
            },
            component: () => import('../../views/resource/activities/add.vue'),
        },
        {
            path: 'activities/:id',
            meta: {
                title: '活动详情'
            },
            component: () => import('../../views/resource/activities/detail.vue'),
        },
    ]
}