export default {
  mfsu: {},
  hash: true,
  title: 'IfAntdV4',
  mode: 'site',
  dynamicImport: {},
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  navs: [
    { title: '组件', path: '/components' },
  ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/components': [
      {
        title: '增强组件',
        children: [
          'components/InputNumber',
          'components/DragSortTable',
        ],
      },
    ],
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  chainWebpack (config) {
    config.module.rule('mjs-rule').test(/.m?js/).resolve.set('fullySpecified', false)
  },
  scripts: ['https://v1.cnzz.com/z_stat.php?id=1278653578&web_id=1278653578'],
  analytics: {
    ga: 'UA-128069695-2',
  },
  styles: ['a[title=站长统计] { display: none; }'],
  // exportStatic: {},
  sitemap: {
    hostname: 'https://d.umijs.org',
  },
};
