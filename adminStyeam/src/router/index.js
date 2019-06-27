import Vue from 'vue'
import Router from 'vue-router'
import Install from '@/components/Install/Install'
import Installadmin from '@/components/Install/common/Installadmin'
import Installmysql from '@/components/Install/common/Installmysql'
import Index from '@/components/index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Install',
      name: 'Install',
      component: Install,
      children:[
        {
          path: 'Installadmin',
          name: 'Installadmin',
          component: Installadmin
        },
        {
          path: 'Installmysql',
          name: 'Installmysql',
          component: Installmysql
        }
      ]
    }
  ]
})
