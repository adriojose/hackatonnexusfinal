import { createRouter, createWebHistory } from 'vue-router'
import ComunicadosView from '../components/ComunicadosView.vue'
import SidebarView from '@/components/SidebarView.vue'
import TesteView from '@/components/TesteView.vue'
import EditarPerfilView from '@/components/EditarPerfilView.vue'
import LoginView from '@/components/LoginView.vue'


const routes = [
  {
    path: '/',
    name: 'Comunicados',
    component: ComunicadosView
  },
  {
    path: '/editarPerfil',
    name: 'EditarPerfil',
    component: EditarPerfilView
  },
   {
    path: '/login',
    name: 'Login',
    component: LoginView
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