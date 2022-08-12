import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import ProfileView from '../views/ProfileView.vue'
import AllDiaryView from '../views/AllDiaryView.vue'
import DiaryView from '../views/DiaryView.vue'
import FriendView from '../views/FriendView.vue'
import CharacterView from '../views/CharacterView.vue'
import MainView from '../views/MainView.vue'



const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path:'/login',
    name:'login',
    component:LoginView
  },
  {
    path:'/signup',
    name:'signup',
    component:SignupView
  },
  {
    path:'/all-diary',
    name:'all-diary',
    component:AllDiaryView
  },
  {
    path:'/profile',
    name:'profile',
    component:ProfileView
  },
  {
    path:'/friend',
    name:'friend',
    component:FriendView
  },
  {
    path:'/character',
    name:'character',
    component:CharacterView
  },
  {
    path:'/home',
    name:'home',
    component:HomeView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
