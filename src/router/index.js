import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import reg from '@/views/Reg'
import AppMain from '@/components/AppMain'
import tozi from '@/views/lixin/tozi'
import daikuan from '@/views/lixin/daikuan'
import cailiao from '@/views/caonuo/cailiao'
import huiyuan from '@/views/caonuo/huiyuan'
import shenfen from '@/views/caonuo/shenfen'
import chonzhi from '@/views/yangjie/chonzhi'
import jiaoyi from '@/views/yangjie/jiaoyi'
import jilu from '@/views/yangjie/jilu'
import tixian from '@/views/yangjie/tixian'
import geren from '@/views/qiantai/geren'
import creditLoan from '@/views/qiantai/CreditLoan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/reg',
      name: 'reg',
      component: reg
    },{
    path: '/creditLoan',
    name: 'creditLoan',
    component: creditLoan
    },{
      path: '/geren',
      name: 'geren',
      component: geren
    },{
      path: '/AppMain',
      name: 'AppMain',
      component: AppMain,
      children:[
        {
          path: '/lixin/tozi',
          name: 'tozi',
          component: tozi,
        },
        {
          path: '/lixin/daikuan',
          name: 'daikuan',
          component: daikuan,
        },
        {
          path: '/caonuo/cailiao',
          name: 'cailiao',
          component: cailiao,
        },
        {
          path: '/caonuo/huiyuan',
          name: 'huiyuan',
          component: huiyuan,
        },
        {
          path: '/caonuo/shenfen',
          name: 'shenfen',
          component: shenfen,
        },
        {
          path: '/yangjie/chonzhi',
          name: 'chonzhi',
          component: chonzhi,
        },
        {
          path: '/yangjie/jiaoyi',
          name: 'jiaoyi',
          component: jiaoyi,
        },
        {
          path: '/yangjie/jilu',
          name: 'jilu',
          component: jilu,
        },
        {
          path: '/yangjie/tixian',
          name: 'tixian',
          component: tixian,
        },


      ]
    }
  ]
})
