export default {
    path: 'cooperate',
    component: {
        render: h => h('router-view')
    },
    redirect: 'cooperate/index',
    meta: {
        title: '合作管理',
    },
    children: [
        {
            path: 'index',
            meta: {
                title: '合作列表'
            },
            component: () => import('../../views/cooperate/index.vue'),
        },
        {
            path: 'evaluate',
            meta: {
                title: '合作评价'
            },
            component: () => import('../../views/cooperate/evaluate.vue'),
        }
    ]
}