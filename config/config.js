export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      extends: "eslint-config-umi",
      // useLocale: true, //设置title
      title: 'antd_course',
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
    }],
  ],
  // proxy: {
  //   '/dev': {
  //     target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
  //     changeOrigin: true,
  //   },
  // },
  // chainWebpack(config, { webpack }) {
  //   config.module
  //     .rule('lint')
  //     .test(/\.js$/)
  //     .pre()
  //     .include
  //     .add('src')
  //     .end()
  //     // Even create named uses (loaders)
  //     .use('eslint')
  //     .loader('eslint-loader')
  //     .options({
  //       rules: {
  //         semi: 'off'
  //       }
  //     });
  // },
  routes: [{
    path: '/',
    component: '../layout/',
    routes: [
      {
        path: '/',
        redirect: './index',
      },
      {
        path: '/index',
        component: './index',
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
          {path: './monitor', component: 'dashboard/monitor', title: '检测'},
          {path: './workplace', component: 'dashboard/workplace', title: '工作区'}
        ]
      }
    ]
  }]
};
