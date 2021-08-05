import Main from '@/components/main/index'

export default [
  {
    path: '/manage',
    name: 'manage',
    component: Main,
    meta: {
      title: '文章管理',
      icon: 'ios-book'
    },
    children: [
      {
        path: 'tables_page',
        name: 'tables_page',
        meta: {
          icon: 'md-grid',
          title: '文章内容管理'
        },
        component: () => import('@/view/components/tables/tables.vue')
      }
    ]
  }
]
