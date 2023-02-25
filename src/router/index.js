import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SocialNetworks from '../views/SocialNetworks.vue'
import DesignPublicity from '../views/DesignPublicity.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/SocialNetworks',
    name: 'socialnetworks',
    component: SocialNetworks
  },
  {
    path: '/designpublicity',
    name: 'designpublicity',
    component: DesignPublicity
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
