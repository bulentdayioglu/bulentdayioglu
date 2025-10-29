import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

createApp(App).use(router).mount('#app')