import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import movie from '@/components/movie'
import actorDetails from '@/components/actorDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: movie
    },
    {
      path: '/actor/:id',
      name: 'actorDetails',
      component: actorDetails
    }
  ]
})
