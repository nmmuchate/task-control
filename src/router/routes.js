
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/tasks', component: () => import('pages/PageTodo.vue') },
      { path: '/individualtasks', component: () => import('pages/PageTodoIndividual.vue') },
      { path: '/personaltasks', component: () => import('src/pages/PageTodoPersonal.vue') },
      { path: '/perfil', component: () => import('src/pages/PagePerfil.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
