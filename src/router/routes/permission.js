
export default {
    path: 'permission',
    meta: {
        title: ''
    },
    component: {
        render: h => h('router-view')
    },
    children: [
        {
            path: 'config',
            meta: {
                title: '权限配置'
            },
            component: () => import('../../views/permission/index.vue'),
        },
        {
            path: 'role',
            meta: {
                title: '角色管理'
            },
            component: {
                render: h => h('router-view')
            },
            children: [
                {
                    path: '',
                    meta: {
                        title: '角色列表'
                    },
                    component: () => import('../../views/permission/role/index.vue'),
                },
                {
                    path: 'add',
                    meta: {
                        title: '角色添加'
                    },
                    component: () => import('../../views/permission/role/edit.vue'),
                },
                {
                    path: 'edit/:id',
                    meta: {
                        title: '角色编辑'
                    },
                    component: () => import('../../views/permission/role/edit.vue'),
                },
            ]
        },
        {
            path: 'user',
            meta: {
                title: '账号管理'
            },
            component: {
                render: h => h('router-view')
            },
            children: [
                {
                    path: '',
                    meta: {
                        title: '账号列表'
                    },
                    component: () => import('../../views/permission/user/index.vue'),
                },
                {
                    path: 'add',
                    meta: {
                        title: '账号添加'
                    },
                    component: () => import('../../views/permission/user/edit.vue'),
                },
                {
                    path: 'edit/:id',
                    meta: {
                        title: '账号编辑'
                    },
                    component: () => import('../../views/permission/user/edit.vue'),
                },
            ]
        },
    ]
}