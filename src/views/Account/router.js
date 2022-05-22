import RouterViewContainer from '../../business-components/router-view-container'

export default {
  path: '/account',
  name: '用户中心',
  component: RouterViewContainer,
  children: [
    {
      path: 'hello',
      component: () => import(/* webpackChunkName: "HelloVue" */ './HelloWorld'), // webpack魔法注释设置chunkName，代码分割，按需引入,
      meta: { title: '你好', auth: false, global: false }
    },
  ]
}