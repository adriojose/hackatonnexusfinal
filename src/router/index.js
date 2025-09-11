import { createRouter, createWebHistory } from 'vue-router'
import ComunicadosView from '../components/ComunicadosView.vue'
import SidebarView from '@/components/SidebarView.vue'
import TesteView from '@/components/TesteView.vue'


const routes = [
  {
    path: '/',
    name: 'Comunicados',
    component: ComunicadosView
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: SidebarView
  },
  {
    path: '/teste',
    name: 'teste',
    component: TesteView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, 
})

export default router