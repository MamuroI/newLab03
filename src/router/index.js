import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import StudentList from '../views/StudentList.vue'
import EventProducer from '../views/EventProducer.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/producer',
    name: 'EventProducer',
    component: EventProducer
  },
  {
    path: '/students',
    name: 'StudentList',
    component: StudentList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
