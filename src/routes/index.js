import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./Home"
import About from "./About"
import Movie from "./Movie"
import NotFound from './NotFound'

export default createRouter({
  
  // Hash or History, we use Hash type
  // https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      return { top: 0 }
    }
  },
  // pages
  // https://google.com/
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/movie/:id",
      component: Movie
    },
    {
      path: "/about",
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})