export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      extends: "eslint-config-umi",
      // useLocale: true, //设置title
      title: 'antd_course',
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
    }],
  ],
  routes: [{
    path: '/',
    component: '../layout/',
    routes: [
      {
        path: '/',
        redirect: '/index',
      },
      {
        path: '/index',
        component: 'index',
        title: 'index'
      },
      {
        path: 'about',
        component: './about/'
      },
      {
        path: '/dashboard',
        routes: [
          {path: './analysis', component: 'dashboard/analysis', title: '分析'},
          {path: './monitor', component: 'dashboard/monitor', title: '检测' },
          { path: './workplace', component: 'dashboard/workplace', title: '工作区' }
        ]
      }
    ]
  }]
};
