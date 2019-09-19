import Vue from 'vue'
import Router from 'vue-router'

import Home     from './views/Home.vue'
import About    from './views/About.vue'
import Certific from './views/Certificate.vue'
import GetTouch from './views/GetInTouch.vue'
import Projects from './views/RecentProjects.vue'
import Services from './views/Services.vue'
import Education from './views/Education.vue'
import Experience from './views/Experience.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },    
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },    
    {
      path: '/Certifications',
      name: 'Certifications',
      component: Certific
    },
    {
      path: '/work',
      name: 'work',
      component: Experience
    },    
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },     
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/touch',
      name: 'touch',
      component: GetTouch
    }    
  ]
})
