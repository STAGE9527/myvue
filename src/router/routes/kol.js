
export default {
    path: 'kol',
    component: () => import('../../views/kol'),
    meta: {
        title: '达人管理'
    },
    children: [
        {
            path: '',
            meta: {
                title: '达人列表'
            },
            component: () => import('../../views/kol/list.vue'),
        },
        {
            path: 'approval',
            component: () => import('../../views/kol/approval.vue'),
        },
        {
            path: ':id',
            meta: {
                title: 'KOL详情页'
            },
            component: () => import('../../views/kol/detail.vue'),
        },
    ]
}