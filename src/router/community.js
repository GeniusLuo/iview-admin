import Main from '@/components/main/index'

export default [
  {
    path: '/content',
    name: 'article_management',
    component: Main,
    meta: {
      icon: 'logo-buffer',
      title: '文章管理'
    },
    children: [
      {
        path: 'index',
        name: 'content_management',
        meta: {
          icon: 'md-grid',
          title: '内容管理'
        },
        component: () => import('@/view/content/index.vue')
      },
      {
        path: 'tags',
        name: 'tags_management',
        meta: {
          icon: 'md-grid',
          title: '标签管理'
        },
        component: () => import('@/view/content/index.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: Main,
    meta: {
      icon: 'md-albums',
      title: '用户管理'
    },
    children: [
      {
        path: 'index',
        name: 'user_management',
        meta: {
          icon: 'ios-people',
          title: '用户管理'
        },
        component: () => import('@/view/user/index.vue')
      }
    ]
  },
  {
    path: '/menu',
    name: 'menu',
    component: Main,
    meta: {
      icon: 'md-settings',
      title: '菜单管理'
    },
    children: [
      {
        path: 'index',
        name: 'menu_management',
        meta: {
          icon: 'ios-menu',
          title: '用户管理'
        },
        component: () => import('@/view/menu/index.vue')
      }
    ]
  },
  {
    path: '/roles',
    name: 'roles',
    component: Main,
    meta: {
      icon: 'md-checkbox',
      title: '权限管理'
    },
    children: [
      {
        path: 'index',
        name: 'roles_management',
        meta: {
          icon: 'md-key',
          title: '角色权限'
        },
        component: () => import('@/view/roles/index.vue')
      }
    ]
  }
]
