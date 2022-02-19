import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/bosons/InternalLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/projects',
          name: 'projects',
          component: () => import('../views/ProjectsView.vue')
        },
        {
          path: '/team-members',
          name: 'teamMembers',
          component: () => import('../views/MembersView.vue')
        },
        {
          path: '/stats',
          name: 'stats',
          component: () => import('../views/StatsView.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component:() => import('../views/SettingsView.vue')
        }
      ]
    },
  ]
})

export default router
