
export default {
    path: 'order',
    component: () => import('../../views/order'),
    meta: {
        title: '订单管理'
    },
    children: [
        {
            path: '',
            component: () => import('../../views/order/list.vue'),
        }
    ]
}