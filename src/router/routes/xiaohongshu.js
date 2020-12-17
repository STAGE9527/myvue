export default {
    path: 'xiaohongshu',
    component: {
        render: h => h('router-view')
    },
    redirect: 'xiaohongshu/kol',
    meta: {
        title: '小红书抓取',
    },
    children: [
        {
            path: 'kols',
            meta: {
                title: 'KOL信息'
            },
            component: () => import('../../views/xiaohongshu/kols.vue'),
        },
        {
            path: 'mcn',
            meta: {
                title: 'MCN机构信息'
            },
            component: () => import('../../views/xiaohongshu/mcn.vue'),
        },
        {
            path: 'business_note',
            meta: {
                title: '商业笔记数据'
            },
            component: () => import('../../views/xiaohongshu/businessNote.vue'),
        },
        {
            path: 'brand_keyword',
            meta: {
                title: '品牌关键词'
            },
            component: () => import('../../views/xiaohongshu/brandKeyword.vue'),
        }

    ]
}