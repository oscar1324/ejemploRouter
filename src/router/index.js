import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'//insertamos compoenentes

// Aquí declaramos todas nustras rutas --- enlace del componente + ruta referenciada abajo

const routes = [
  // Declaración de rutas
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // Sabe la ruta po rque se la importamos aquí
  },
  {
    path: '/Pepe',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pepe.vue')
  },
  {
    path: '/Bibliografia',
    name: 'Bibliografia',
    component: () => import('../views/Bibliografia.vue')
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes // le pasasmos el array creado de routas
})

export default router // lo exporta directo al main.js
